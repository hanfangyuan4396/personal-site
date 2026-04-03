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
};

function isNarrowViewport() {
  if (typeof window === "undefined") {
    return false;
  }
  return window.matchMedia("(max-width: 767px)").matches;
}

export function WechatMpQrTrigger({ wechatMp, linkClassName }: WechatMpQrTriggerProps) {
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
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-card transition-colors group-hover:border-blue-500/40 group-hover:text-blue-400">
            <ContactChannelIcon label="公众号" />
          </span>
          <span className="text-left">{wechatMp.label}</span>
        </button>
        <div
          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-max -translate-x-1/2 flex-col items-center gap-2 rounded-lg border border-blue-500/20 bg-white p-3 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 md:flex md:flex-col"
          role="tooltip"
        >
          <Image
            src={wechatMp.src}
            alt={`${wechatMp.label}「${wechatMp.sub}」二维码`}
            width={200}
            height={200}
            className="h-32 w-32 object-contain sm:h-36 sm:w-36"
          />
          <p className="max-w-[9.5rem] text-center text-xs leading-snug text-neutral-700">
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
              className="relative w-full max-w-sm rounded-2xl border border-blue-500/25 bg-card p-5 shadow-xl"
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
                <div className="overflow-hidden rounded-xl border border-border bg-white p-2 shadow-inner">
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
