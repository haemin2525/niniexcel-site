export type Cta = { label: string; href: string };

export type Profile = {
  name: string;
  nameEn: string;
  title: string;
  hero: {
    headline: string;
    subheadline: string;
    editorialHeadline: {
      line1: string;
      line2Lead: string;
    };
    trustBar: string[];
    primaryCta: Cta;
    secondaryCta: Cta;
  };
  about: {
    intro: string;
    strengths: string[];
    career: { period: string; company: string; role: string }[];
    certifications: string[];
  };
  youtube: { channel: string; url: string; featuredVideoId: string | null };
  contact: {
    email: string;
    altEmail?: string;
    phone?: string;
    sns?: { label: string; url: string }[];
  };
};

export type Topic = {
  id: string;
  title: string;
  summary: string;
  icon?: string;
  tags: string[];
};

export type Talk = {
  year: string;
  client: string;
  topic: string;
  type: string;
  url?: string;
};

export type Product = {
  id: string;
  name: string;
  description?: string;
  url: string;
  thumbnail?: string;
};
