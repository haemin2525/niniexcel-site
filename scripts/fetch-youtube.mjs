#!/usr/bin/env node
// niniexcel-site — YouTube TOP 5 from curated playlists (long-form only)
// Runs at build time (CI). On failure writes a placeholder so build stays green.

import { writeFileSync } from "node:fs";

const API_KEY = process.env.YOUTUBE_API_KEY;
const PLAYLIST_IDS = [
  "PL7v22YGkvT-Ag3roVp3VZKcSkKwtXDM4G",
  "PL7v22YGkvT-CPlqgQGTyWralmMyMyTIzW",
];
const MIN_DURATION_SECONDS = 61; // 60s 이하 = Shorts → 제외
const TOP_N = 5;
const HANDLE = "niniexcel";
const OUTPUT_PATH = new URL("../src/content/youtube.json", import.meta.url);

const placeholder = JSON.stringify(
  {
    handle: `@${HANDLE}`,
    playlistIds: PLAYLIST_IDS,
    top: [],
    updatedAt: null,
  },
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

// ISO 8601 duration ("PT15M30S", "PT1H10M5S", "PT45S") → seconds
const parseDuration = (iso) => {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || "");
  if (!m) return 0;
  return Number(m[1] || 0) * 3600 + Number(m[2] || 0) * 60 + Number(m[3] || 0);
};

try {
  // 1. Collect unique video IDs from all playlists
  const videoIdSet = new Set();
  for (const playlistId of PLAYLIST_IDS) {
    let pageToken = "";
    do {
      const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
      url.searchParams.set("part", "contentDetails");
      url.searchParams.set("playlistId", playlistId);
      url.searchParams.set("maxResults", "50");
      url.searchParams.set("key", API_KEY);
      if (pageToken) url.searchParams.set("pageToken", pageToken);
      const data = await fetch(url).then(json);
      for (const it of data.items || []) {
        videoIdSet.add(it.contentDetails.videoId);
      }
      pageToken = data.nextPageToken || "";
    } while (pageToken);
  }
  const videoIds = Array.from(videoIdSet);

  // 2. Fetch snippet + statistics + contentDetails (50 per call)
  const videos = [];
  for (let i = 0; i < videoIds.length; i += 50) {
    const batch = videoIds.slice(i, i + 50).join(",");
    const url = new URL("https://www.googleapis.com/youtube/v3/videos");
    url.searchParams.set("part", "snippet,statistics,contentDetails");
    url.searchParams.set("id", batch);
    url.searchParams.set("key", API_KEY);
    const data = await fetch(url).then(json);
    for (const v of data.items || []) {
      const durationSeconds = parseDuration(v.contentDetails?.duration);
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
        durationSeconds,
      });
    }
  }

  // 3. Filter long-form (>= 61s) → sort by viewCount → slice TOP N
  const longForm = videos.filter((v) => v.durationSeconds >= MIN_DURATION_SECONDS);
  longForm.sort((a, b) => b.viewCount - a.viewCount);
  const top = longForm.slice(0, TOP_N).map(({ durationSeconds, ...rest }) => rest);

  const payload = {
    handle: `@${HANDLE}`,
    playlistIds: PLAYLIST_IDS,
    minDurationSeconds: MIN_DURATION_SECONDS,
    top,
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2) + "\n");
  console.log(
    `[fetch-youtube] OK — ${top.length} long-form videos picked from ${videos.length} (${PLAYLIST_IDS.length} playlists)`,
  );
} catch (err) {
  writePlaceholder(`fetch failed: ${err.message}`);
  process.exit(0);
}
