import { timelineItems } from "@/data/timeline";
import { cn } from "@/lib/utils";

const typeStyles = {
  education: {
    dot: "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]",
    label: "text-blue-400",
  },
  work: {
    dot: "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    label: "text-emerald-400",
  },
  opensource: {
    dot: "bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]",
    label: "text-orange-400",
  },
} as const;

const legendItems = [
  { type: "education" as const, label: "教育背景" },
  { type: "work" as const, label: "工作经历" },
  { type: "opensource" as const, label: "开源项目" },
];

function getTimelinePoints(description: string) {
  return description
    .split("，")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function TimelineSection() {
  return (
    <section id="timeline" className="border-t border-blue-500/10 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">成长轨迹</h2>
          <p className="mt-2 text-muted-foreground">我走过的路</p>
        </div>

        <div className="relative ml-3">
          {/* 渐变竖线 */}
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/30 to-orange-500/20" />

          <div className="flex flex-col gap-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-8">
                {/* 发光圆点 */}
                <div
                  className={cn(
                    "absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ring-2 ring-background",
                    typeStyles[item.type].dot
                  )}
                />
                <p className="text-xs font-medium text-muted-foreground">{item.date}</p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {getTimelinePoints(item.description).map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 pl-3">
          {legendItems.map(({ type, label }) => (
            <div key={type} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className={cn("h-2 w-2 rounded-full", typeStyles[type].dot)} />
              <span className={typeStyles[type].label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
