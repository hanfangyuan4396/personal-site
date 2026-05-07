import { timelineItems } from "@/data/timeline";
import { cn } from "@/lib/utils";

const typeStyles = {
  education: {
    dot: "bg-[oklch(0.47_0.12_155)] shadow-[0_0_8px_oklch(0.47_0.12_155/0.38)] dark:bg-[oklch(0.74_0.12_155)] dark:shadow-[0_0_8px_oklch(0.74_0.12_155/0.28)]",
    label: "text-[oklch(0.42_0.1_155)] dark:text-[oklch(0.78_0.12_155)]",
  },
  work: {
    dot: "bg-[oklch(0.72_0.14_78)] shadow-[0_0_8px_oklch(0.72_0.14_78/0.34)] dark:bg-[oklch(0.82_0.13_78)] dark:shadow-[0_0_8px_oklch(0.82_0.13_78/0.24)]",
    label: "text-[oklch(0.46_0.08_78)] dark:text-[oklch(0.84_0.13_78)]",
  },
  opensource: {
    dot: "bg-[oklch(0.34_0.035_120)] shadow-[0_0_8px_oklch(0.34_0.035_120/0.22)] dark:bg-[oklch(0.7_0.025_110)] dark:shadow-[0_0_8px_oklch(0.7_0.025_110/0.18)]",
    label: "text-[oklch(0.34_0.035_120)] dark:text-[oklch(0.72_0.025_110)]",
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
    <section
      id="timeline"
      className="border-t border-[oklch(0.72_0.045_100/0.14)] py-16 sm:py-24 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">成长轨迹</h2>
          <p className="mt-2 text-muted-foreground">我走过的路</p>
        </div>

        <div className="relative ml-3">
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-[oklch(0.47_0.12_155/0.55)] via-[oklch(0.72_0.14_78/0.34)] to-[oklch(0.34_0.035_120/0.22)] dark:from-[oklch(0.74_0.12_155/0.42)] dark:via-[oklch(0.82_0.13_78/0.24)] dark:to-white/12" />

          <div className="flex flex-col gap-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-8">
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
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.72_0.14_78/0.72)] dark:bg-[oklch(0.82_0.13_78/0.68)]" />
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
