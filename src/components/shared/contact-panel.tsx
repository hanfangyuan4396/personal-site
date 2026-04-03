import Link from "next/link";
import Image from "next/image";

import { contactLinks, qrCodes } from "@/data/home";
import { WechatCard } from "@/components/shared/wechat-card";
import { ContactChannelIcon, CONTACT_LINK_ORDER } from "@/components/shared/contact-channel-icons";

type ContactPanelProps = {
  linkClassName?: string;
};

function linkDisplayText(href: string, label: string) {
  if (href.startsWith("mailto:")) {
    return href.replace(/^mailto:/i, "");
  }
  return label;
}

export function ContactPanel({
  linkClassName = "group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-blue-400",
}: ContactPanelProps) {
  const wechatMp = qrCodes.find((qr) => qr.label === "公众号");
  const linkByLabel = Object.fromEntries(contactLinks.map((l) => [l.label, l])) as Record<
    string,
    (typeof contactLinks)[number]
  >;

  const showFooterRow = contactLinks.length > 0 || wechatMp;

  return (
    <div className="flex flex-col">
      <WechatCard />

      {showFooterRow && (
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-6">
          {wechatMp ? (
            <div className="group relative inline-flex">
              <button
                type="button"
                aria-label={`${wechatMp.label}「${wechatMp.sub}」，悬停或聚焦时显示二维码`}
                className={`${linkClassName} cursor-help border-0 bg-transparent p-0 text-left`}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-card transition-colors group-hover:border-blue-500/40 group-hover:text-blue-400">
                  <ContactChannelIcon label="公众号" />
                </span>
                <span className="text-left">{wechatMp.label}</span>
              </button>
              <div
                className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-max -translate-x-1/2 rounded-lg border border-blue-500/20 bg-white p-2 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
                role="tooltip"
              >
                <Image
                  src={wechatMp.src}
                  alt={`${wechatMp.label}「${wechatMp.sub}」二维码`}
                  width={120}
                  height={120}
                  className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                />
              </div>
            </div>
          ) : null}

          {CONTACT_LINK_ORDER.map((label) => {
            const link = linkByLabel[label];
            if (!link) {
              return null;
            }
            const text = linkDisplayText(link.href, link.label);
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={linkClassName}
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-card transition-colors group-hover:border-blue-500/40 group-hover:text-blue-400">
                  <ContactChannelIcon label={link.label} />
                </span>
                {text}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
