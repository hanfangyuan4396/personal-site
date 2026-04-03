import Link from "next/link";

import { contactLinks, qrCodes } from "@/data/contact";
import { WechatCard } from "@/components/shared/wechat-card";
import { ContactChannelIcon, CONTACT_LINK_ORDER } from "@/components/shared/contact-channel-icons";
import { WechatMpQrTrigger } from "@/components/shared/wechat-mp-qr-trigger";

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
  linkClassName = "group flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400",
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
          {wechatMp ? <WechatMpQrTrigger wechatMp={wechatMp} linkClassName={linkClassName} /> : null}

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
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-card/80 transition-colors group-hover:border-blue-400/50 group-hover:bg-blue-50/80 group-hover:text-blue-600 dark:group-hover:border-blue-500/40 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
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
