#!/usr/bin/env node
// niniexcel-site — YouTube TOP 5 by viewCount
// Runs at build time (CI) and writes src/content/youtube.json.
// If YOUTUBE_API_KEY is missing or any fetch fails, writes a safe placeholder
// so the build still succeeds (the section just shows a fallback message).

import { writeFileSync } from "node:fs";

const API_KEY = process.env.YOUTUBE_API_KEY;
const HANDLE = process.env.YOUTUBE_HANDLE || "niniexcel";
const TOP_N = 5;
const OUTPUT_PATH = new URL("../src/content/youtube.json", import.meta.url);

const placeholder = JSON.stringify(
  { channelId: "", handle: `@${HANDLE}`, top: [], updatedAt: null },
  null,
  2,
);

const writePlaceholder = (reason) => {
  console.warn(`[fetch-youtube] ${reason} — writing placeholder`);
  writeFileSync(OUTPUT_PATH, placeholder + "\n");
};

if (!API_KEY) {
  writePlaceholder("YOUTUBE_API_KEY missing");
  process.exit(0);
}

const json = async (res) => {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText} — ${text.slice(0, 200)}`);
  }
  return res.json();
};

try {
  // 1. Resolve channel by handle → uploads playlist
  const channels = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=id,contentDetails&forHandle=${HANDLE}&key=${API_KEY}`,
  ).then(json);

  const channel = channels.items?.[0];
  if (!channel) throw new Error(`Channel @${HANDLE} not found`);
  const channelId = channel.id;
  const uploadsId = channel.contentDetails.relatedPlaylists.uploads;

  // 2. List all upload video IDs (paginated)
  const videoIds = [];
  let pageToken = "";
  do {
    const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
    url.searchParams.set("part", "contentDetails");
    url.searchParams.set("playlistId", uploadsId);
    url.searchParams.set("maxResults", "50");
    url.searchParams.set("key", API_KEY);
    if (pageToken) url.searchParams.set("pageToken", pageToken);
    const data = await fetch(url).then(json);
    for (const it of data.items || []) videoIds.push(it.contentDetails.videoId);
    pageToken = data.nextPageToken || "";
  } while (pageToken);

  // 3. Fetch snippet + statistics in batches of 50
  const videos = [];
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50).join(",");
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "snippet,statistics");
    url.searchParams.set("id", batch);
    url.searchParams.set("key", API_KEY);
    const data = await fetch(url).then(json);
    for (const v of data.items || []) {
      videos.push({
        id: v.id,
        title: v.snippet.title,
        thumbnail:
          v.snippet.thumbnails?.maxres?.url ??
          v.snippet.thumbnails?.high?.url ??
          v.snippet.thumbnails?.medium?.url ??
          v.snippet.thumbnails?.default?.url ??
          "",
        publishedAt: v.snippet.publishedAt,
        viewCount: Number(v.statistics?.viewCount || 0),
      });
    }
  }

  // 4. Sort by viewCount desc, slice TOP N
  videos.sort((a, b) => b.viewCount - a.viewCount);
  const top = videos.slice(0, TOP_N);

  const payload = {
    channelId,
    handle: `@${HANDLE}`,
    top,
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + "\n");
  console.log(`[fetch-youtube] OK — ${top.length} videos written`);
} catch (err) {
  writePlaceholder(`fetch failed: ${err.message}`);
  // Do not fail the build — site keeps working with fallback message.
  process.exit(0);
}
