"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { ContactChannelIcon } from "@/components/shared/contact-channel-icons";

type WechatMp = {
  src: string;
  label: string;
  sub: string;
};

type WechatMpQrTriggerProps = {
  wechatMp: WechatMp;
  linkClassName: string;
  variant?: "default" | "home";
};

function isNarrowViewport() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(max-width: 767px)").matches;
}

const iconClassNames = {
  default:
    "border-[oklch(0.82_0.016_105)] bg-card/80 group-hover:border-[oklch(0.55_0.11_155/0.48)] group-hover:bg-[oklch(0.94_0.035_150)] group-hover:text-[oklch(0.38_0.11_155)] dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-[oklch(0.74_0.12_155/0.36)] dark:group-hover:bg-[oklch(0.74_0.12_155/0.1)] dark:group-hover:text-[oklch(0.78_0.12_155)]",
  home:
    "border-[oklch(0.82_0.016_105)] bg-[oklch(0.995_0.003_95/0.72)] group-hover:border-[oklch(0.55_0.11_155/0.48)] group-hover:bg-[oklch(0.94_0.035_150)] group-hover:text-[oklch(0.38_0.11_155)] dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-[oklch(0.74_0.12_155/0.36)] dark:group-hover:bg-[oklch(0.74_0.12_155/0.1)] dark:group-hover:text-[oklch(0.78_0.12_155)]",
};

const tooltipClassNames = {
  default:
    "border-[oklch(0.82_0.016_105)] bg-white/95 shadow-[0_10px_24px_rgba(45,60,43,0.1)] dark:border-white/10 dark:bg-card dark:shadow-lg",
  home:
    "border-[oklch(0.82_0.016_105)] bg-white/95 shadow-[0_10px_24px_rgba(45,60,43,0.12)] dark:border-white/10 dark:bg-card dark:shadow-lg",
};

const dialogClassNames = {
  default:
    "border-[oklch(0.82_0.016_105)] bg-white/95 shadow-[0_18px_40px_rgba(45,60,43,0.18)] dark:border-white/10 dark:bg-card dark:shadow-xl",
  home:
    "border-[oklch(0.82_0.016_105)] bg-white/95 shadow-[0_18px_40px_rgba(45,60,43,0.18)] dark:border-white/10 dark:bg-card dark:shadow-xl",
};

const qrFrameClassNames = {
  default:
    "border-[oklch(0.8_0.022_105)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/10 dark:shadow-inner",
  home:
    "border-[oklch(0.8_0.022_105)] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:border-white/10 dark:shadow-inner",
};

export function WechatMpQrTrigger({
  wechatMp,
  linkClassName,
  variant = "default",
}: WechatMpQrTriggerProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const searchHint = `微信搜索「${wechatMp.sub}」`;

  return (
    <>
      <div className="group relative inline-flex">
        <button
          type="button"
          aria-label={`${wechatMp.label}「${wechatMp.sub}」，小屏点击、大屏悬停或聚焦时显示二维码`}
          aria-expanded={mobileOpen}
          aria-haspopup="dialog"
          className={`${linkClassName} cursor-pointer border-0 bg-transparent p-0 text-left md:cursor-help`}
          onClick={() => {
            if (isNarrowViewport()) {
              setMobileOpen(true);
            }
          }}
        >
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-colors ${iconClassNames[variant]}`}
          >
            <ContactChannelIcon label="公众号" />
          </span>
          <span className="text-left">{wechatMp.label}</span>
        </button>
        <div
          className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-max -translate-x-1/2 flex-col items-center gap-2 rounded-lg border p-3 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 md:flex md:flex-col ${tooltipClassNames[variant]}`}
          role="tooltip"
        >
          <Image
            src={wechatMp.src}
            alt={`${wechatMp.label}「${wechatMp.sub}」二维码`}
            width={200}
            height={200}
            className="h-32 w-32 object-contain sm:h-36 sm:w-36"
          />
          <p className="max-w-[9.5rem] text-center text-xs leading-snug text-slate-600 dark:text-muted-foreground">
            {searchHint}
          </p>
        </div>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="关闭二维码"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 flex min-h-full items-center justify-center p-6">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="wechat-mp-qr-heading"
              className={`relative w-full max-w-sm rounded-2xl border p-5 backdrop-blur-sm ${dialogClassNames[variant]}`}
            >
              <button
                type="button"
                className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="关闭"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
              <h2 id="wechat-mp-qr-heading" className="pr-10 text-base font-semibold text-foreground">
                {wechatMp.label}
              </h2>
              <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                {searchHint}
              </p>
              <div className="mt-5 flex justify-center">
                <div className={`overflow-hidden rounded-xl border p-2 ${qrFrameClassNames[variant]}`}>
                  <Image
                    src={wechatMp.src}
                    alt={`${wechatMp.label}「${wechatMp.sub}」二维码`}
                    width={280}
                    height={280}
                    className="h-[min(72vw,17.5rem)] w-[min(72vw,17.5rem)] max-h-[280px] max-w-[280px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
