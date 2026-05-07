import Image from "next/image";

import { wechatPersonalId } from "@/data/contact";

const CARD_TAGS = ["智能体开发 / AI 技术顾问", "AI 编程 / AI 开源项目 3k+ Stars"];

type WechatCardProps = {
  variant?: "default" | "home";
};

const cardClassNames = {
  default:
    "border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] shadow-[0_16px_34px_rgba(45,60,43,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:bg-none dark:shadow-[0_18px_38px_rgba(0,0,0,0.2)]",
  home:
    "border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] shadow-[0_16px_34px_rgba(45,60,43,0.1)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:bg-none dark:shadow-[0_18px_38px_rgba(0,0,0,0.24)]",
};

const avatarClassNames = {
  default:
    "border-[oklch(0.47_0.12_155/0.45)] shadow-[0_8px_22px_rgba(38,55,43,0.12)] dark:border-[oklch(0.74_0.12_155/0.36)] dark:shadow-none",
  home:
    "border-[oklch(0.47_0.12_155/0.5)] shadow-[0_8px_22px_rgba(38,55,43,0.14)] dark:border-[oklch(0.74_0.12_155/0.42)] dark:shadow-none",
};

const dividerClassNames = {
  default: "border-[oklch(0.76_0.035_105/0.55)] dark:border-white/10",
  home: "border-[oklch(0.76_0.035_105/0.55)] dark:border-white/10",
};

const qrClassNames = {
  default:
    "border-[oklch(0.8_0.022_105)] bg-white shadow-[0_10px_22px_rgba(45,60,43,0.08)] dark:border-white/10 dark:bg-white/[0.92] dark:shadow-none",
  home:
    "border-[oklch(0.8_0.022_105)] bg-white shadow-[0_10px_22px_rgba(45,60,43,0.1)] dark:border-white/10 dark:bg-white/[0.92] dark:shadow-none",
};

export function WechatCard({ variant = "default" }: WechatCardProps) {
  return (
    <div
      className={`flex w-full max-w-[680px] flex-col overflow-hidden rounded-lg border sm:flex-row sm:items-center ${cardClassNames[variant]}`}
    >
      {/* 小屏：头像+文案一行；桌面：contents 拆成与二维码并列的两列 */}
      <div className="flex gap-4 px-4 pt-5 sm:contents sm:p-0">
        <div className="flex shrink-0 items-center justify-center sm:py-7 sm:pl-7 sm:pr-4">
          <Image
            src="/wechat_avatar.jpg"
            alt="方圆"
            width={120}
            height={120}
            className={`h-20 w-20 rounded-full border-2 object-cover sm:h-[120px] sm:w-[120px] sm:border-[2.5px] ${avatarClassNames[variant]}`}
          />
        </div>

        <div className="min-w-0 flex-1 sm:px-5 sm:py-6">
          <div
            className={`mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b pb-3 sm:gap-4 ${dividerClassNames[variant]}`}
          >
            <span className="min-w-0 text-xl font-bold tracking-wide text-foreground sm:text-2xl">
              方圆AI分享
            </span>
            <span className="shrink-0 text-sm text-muted-foreground">📍 上海</span>
          </div>
          <div className="flex flex-col gap-2">
            {CARD_TAGS.map((tag) => (
              <div key={tag} className="flex items-start gap-2 text-base text-foreground/80 sm:text-[17px]">
                <span className="mt-0.5 shrink-0 font-bold leading-snug">·</span>
                <span className="min-w-0 leading-snug">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 pb-5 pt-4 sm:shrink-0 sm:py-6 sm:pl-2 sm:pr-6 sm:pt-6">
        <div className={`overflow-hidden rounded-lg border p-1.5 ${qrClassNames[variant]}`}>
          <Image
            src="/wechat_qr.png"
            alt="微信二维码"
            width={128}
            height={128}
            className="h-[112px] w-[112px] object-contain sm:h-[128px] sm:w-[128px]"
          />
        </div>
        <div className="mt-2 space-y-1 text-center">
          <p className="text-xs text-muted-foreground sm:text-sm">
            微信号:{" "}
            <span className="font-mono font-medium text-foreground">{wechatPersonalId}</span>
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">加我好友</p>
        </div>
      </div>
    </div>
  );
}
