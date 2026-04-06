import type { Metadata } from "next";

const fallbackSiteUrl = "https://hanfangyuan.cn";

export const siteName = "方圆AI分享";
export const defaultOgImagePath = "/wechat_avatar.jpg";

export function getSiteUrl(): URL {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl;
  return new URL(rawUrl);
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalUrl = new URL(path, siteUrl).toString();
  const ogImageUrl = new URL(defaultOgImagePath, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: "zh_CN",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}
