import Image from "next/image";

const CARD_TAGS = ["智能体开发 / AI 技术顾问", "AI 编程 / AI 开源项目 3k+ Stars"];

export function WechatCard() {
  return (
    <div className="flex w-full max-w-[680px] items-center overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex shrink-0 items-center justify-center py-6 pl-6 pr-4 sm:py-7 sm:pl-7">
        <Image
          src="/wechat_avatar.jpg"
          alt="方圆"
          width={120}
          height={120}
          className="h-[104px] w-[104px] rounded-full border-[2.5px] border-foreground/70 object-cover sm:h-[120px] sm:w-[120px]"
        />
      </div>

      <div className="min-w-0 flex-1 px-4 py-5 sm:px-5 sm:py-6">
        <div className="mb-3 flex items-baseline gap-3 border-b border-border pb-3 sm:gap-4">
          <span className="truncate text-xl font-bold tracking-wide text-foreground sm:text-2xl">
            方圆AI分享
          </span>
          <span className="shrink-0 text-sm text-muted-foreground">📍 上海</span>
        </div>
        <div className="flex flex-col gap-2">
          {CARD_TAGS.map((tag) => (
            <div key={tag} className="flex items-start gap-2 text-base text-foreground/80 sm:text-[17px]">
              <span className="mt-0.5 shrink-0 font-bold leading-snug">·</span>
              <span className="leading-snug">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 py-5 pl-2 pr-5 sm:py-6 sm:pr-6">
        <div className="overflow-hidden rounded-lg bg-white p-1.5">
          <Image
            src="/wechat_qr.png"
            alt="微信二维码"
            width={128}
            height={128}
            className="h-[112px] w-[112px] object-contain sm:h-[128px] sm:w-[128px]"
          />
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:text-sm">加我好友</p>
      </div>
    </div>
  );
}
