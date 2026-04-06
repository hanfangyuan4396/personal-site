import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { NotificationProvider } from "@/providers/notification-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { defaultOgImagePath, getSiteUrl, siteName } from "@/lib/seo";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultOgImageUrl = new URL(defaultOgImagePath, getSiteUrl()).toString();

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "智能体开发实践者，Dify-on-WeChat 开源项目作者，曾参与 LLMOps 平台核心能力建设，也作为 AI 技术顾问推动企业 AI 应用落地。",
  openGraph: {
    title: siteName,
    description:
      "智能体开发实践者，Dify-on-WeChat 开源项目作者，曾参与 LLMOps 平台核心能力建设，也作为 AI 技术顾问推动企业 AI 应用落地。",
    siteName,
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: defaultOgImageUrl,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "智能体开发实践者，Dify-on-WeChat 开源项目作者，曾参与 LLMOps 平台核心能力建设，也作为 AI 技术顾问推动企业 AI 应用落地。",
    images: [defaultOgImageUrl],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <NotificationProvider />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
