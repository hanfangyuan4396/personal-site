import { BarChart3, Boxes, FileText, Star, type LucideIcon } from "lucide-react";

import { stats, type HomeStatIcon } from "@/data/home";

const statIcons: Record<HomeStatIcon, LucideIcon> = {
  star: Star,
  trend: BarChart3,
  boxes: Boxes,
  paper: FileText,
};

export function StatsSection() {
  return (
    <section className="border-y border-blue-500/10 bg-gradient-to-r from-blue-950/40 via-card/60 to-cyan-950/30">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
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
      </div>
    </section>
  );
}
