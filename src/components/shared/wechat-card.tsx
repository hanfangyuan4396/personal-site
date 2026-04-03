import Image from "next/image";

import { wechatPersonalId } from "@/data/contact";

const CARD_TAGS = ["智能体开发 / AI 技术顾问", "AI 编程 / AI 开源项目 3k+ Stars"];

export function WechatCard() {
  return (
    <div className="flex w-full max-w-[680px] flex-col overflow-hidden rounded-2xl border border-blue-200/70 bg-gradient-to-br from-white via-blue-50/60 to-cyan-50/30 shadow-[0_10px_28px_rgba(59,130,246,0.08)] sm:flex-row sm:items-center dark:border-border dark:bg-card dark:bg-none dark:shadow-none">
      {/* 小屏：头像+文案一行；桌面：contents 拆成与二维码并列的两列 */}
      <div className="flex gap-4 px-4 pt-5 sm:contents sm:p-0">
        <div className="flex shrink-0 items-center justify-center sm:py-7 sm:pl-7 sm:pr-4">
          <Image
            src="/wechat_avatar.jpg"
            alt="方圆"
            width={120}
            height={120}
            className="h-20 w-20 rounded-full border-2 border-blue-200 object-cover shadow-[0_4px_14px_rgba(59,130,246,0.12)] sm:h-[120px] sm:w-[120px] sm:border-[2.5px] dark:border-foreground/70 dark:shadow-none"
          />
        </div>

        <div className="min-w-0 flex-1 sm:px-5 sm:py-6">
          <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-blue-200/70 pb-3 sm:gap-4 dark:border-border">
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
        <div className="overflow-hidden rounded-lg border border-blue-200/70 bg-white p-1.5 shadow-[0_8px_18px_rgba(59,130,246,0.1)] dark:border-transparent dark:shadow-none">
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
