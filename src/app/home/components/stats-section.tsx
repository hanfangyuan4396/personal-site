import { BarChart3, Boxes, FileText, Star, type LucideIcon } from "lucide-react";

import { stats, type HomeStatIcon } from "@/data/home-stats";

const statIcons: Record<HomeStatIcon, LucideIcon> = {
  star: Star,
  trend: BarChart3,
  boxes: Boxes,
  paper: FileText,
};

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.68_0.09_155/0.34)] bg-[oklch(0.94_0.035_150)] text-[oklch(0.38_0.11_155)] dark:border-[oklch(0.74_0.12_155/0.28)] dark:bg-[oklch(0.74_0.12_155/0.08)] dark:text-[oklch(0.78_0.12_155)]">
            {(() => {
              const Icon = statIcons[stat.icon];
              return <Icon className="h-4 w-4" aria-hidden="true" />;
            })()}
          </div>
          <span className="text-3xl font-bold text-[oklch(0.36_0.1_155)] sm:text-4xl dark:text-[oklch(0.78_0.12_155)]">
            {stat.value}
          </span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

function StatsGridEmbedded() {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 sm:gap-x-6">
      {stats.map((stat) => {
        const Icon = statIcons[stat.icon];
        return (
          <div key={stat.label} className="min-w-0 text-left">
            <div className="flex items-baseline gap-2">
              <Icon
                className="h-3.5 w-3.5 shrink-0 text-[oklch(0.56_0.1_155)] dark:text-[oklch(0.74_0.11_155)]"
                aria-hidden="true"
              />
              <span className="text-2xl font-semibold tabular-nums tracking-normal text-[oklch(0.24_0.025_120)] sm:text-[1.65rem] dark:text-[oklch(0.9_0.018_110)]">
                {stat.value}
              </span>
            </div>
            <p className="mt-1 pl-[1.375rem] text-[0.7rem] leading-snug text-muted-foreground sm:text-xs">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export type StatsSectionProps = {
  variant?: "default" | "embedded";
};

export function StatsSection({ variant = "default" }: StatsSectionProps) {
  if (variant === "embedded") {
    return (
      <div
        className="mt-6 w-full border-t border-[oklch(0.72_0.045_100/0.32)] pt-5 md:mt-7 dark:border-white/10"
        role="region"
        aria-label="数据概览"
      >
        <StatsGridEmbedded />
      </div>
    );
  }

  return (
    <section className="border-y border-[oklch(0.72_0.045_100/0.14)] dark:border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <StatsGrid />
      </div>
    </section>
  );
}
