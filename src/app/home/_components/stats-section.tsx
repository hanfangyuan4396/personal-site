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
          <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300">
            {(() => {
              const Icon = statIcons[stat.icon];
              return <Icon className="h-4 w-4" aria-hidden="true" />;
            })()}
          </div>
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
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
              <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground/45" aria-hidden="true" />
              <span className="text-2xl font-semibold tabular-nums tracking-tight text-foreground sm:text-[1.65rem]">
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
        className="mt-6 w-full border-t border-blue-500/10 pt-5 md:mt-7"
        role="region"
        aria-label="数据概览"
      >
        <StatsGridEmbedded />
      </div>
    );
  }

  return (
    <section className="border-y border-blue-500/10 bg-gradient-to-r from-blue-950/40 via-card/60 to-cyan-950/30">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <StatsGrid />
      </div>
    </section>
  );
}
