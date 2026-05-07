import Link from "next/link";

import { contactLinks, qrCodes } from "@/data/contact";
import { WechatCard } from "@/components/shared/wechat-card";
import { ContactChannelIcon, CONTACT_LINK_ORDER } from "@/components/shared/contact-channel-icons";
import { WechatMpQrTrigger } from "@/components/shared/wechat-mp-qr-trigger";

type ContactPanelProps = {
  linkClassName?: string;
  variant?: "default" | "home";
};

function linkDisplayText(href: string, label: string) {
  if (href.startsWith("mailto:")) {
    return href.replace(/^mailto:/i, "");
  }
  return label;
}

export function ContactPanel({
  linkClassName = "group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-[oklch(0.38_0.11_155)] dark:hover:text-[oklch(0.78_0.12_155)]",
  variant = "default",
}: ContactPanelProps) {
  const wechatMp = qrCodes.find((qr) => qr.label === "公众号");
  const linkByLabel = Object.fromEntries(contactLinks.map((l) => [l.label, l])) as Record<
    string,
    (typeof contactLinks)[number]
  >;

  const showFooterRow = contactLinks.length > 0 || wechatMp;
  const iconClassName =
    variant === "home"
      ? "border-[oklch(0.82_0.016_105)] bg-[oklch(0.995_0.003_95/0.72)] group-hover:border-[oklch(0.55_0.11_155/0.48)] group-hover:bg-[oklch(0.94_0.035_150)] group-hover:text-[oklch(0.38_0.11_155)] dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-[oklch(0.74_0.12_155/0.36)] dark:group-hover:bg-[oklch(0.74_0.12_155/0.1)] dark:group-hover:text-[oklch(0.78_0.12_155)]"
      : "border-[oklch(0.82_0.016_105)] bg-card/80 group-hover:border-[oklch(0.55_0.11_155/0.48)] group-hover:bg-[oklch(0.94_0.035_150)] group-hover:text-[oklch(0.38_0.11_155)] dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-[oklch(0.74_0.12_155/0.36)] dark:group-hover:bg-[oklch(0.74_0.12_155/0.1)] dark:group-hover:text-[oklch(0.78_0.12_155)]";

  return (
    <div className="flex flex-col">
      <WechatCard variant={variant} />

      {showFooterRow && (
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-6">
          {wechatMp ? (
            <WechatMpQrTrigger
              wechatMp={wechatMp}
              linkClassName={linkClassName}
              variant={variant}
            />
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
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-colors ${iconClassName}`}
                >
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
