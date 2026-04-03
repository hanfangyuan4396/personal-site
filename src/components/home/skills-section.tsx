import { skillGroups } from "@/data/skills";

const cardStyle = {
  wrapper: "border-border bg-card hover:border-blue-400/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)] dark:hover:border-blue-500/40 dark:hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]",
  titleColor: "text-blue-600/80 dark:text-blue-400/80",
  tagStyle: "rounded-full border border-cyan-300/70 bg-cyan-50 text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-500/5 dark:text-cyan-400",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-blue-500/10 bg-gradient-to-b from-transparent to-blue-100/30 py-16 sm:py-24 dark:to-blue-950/10"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">技能专长</h2>
          <p className="mt-2 text-muted-foreground">我熟悉并持续实践的技术方向</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-xl border p-6 transition-all ${cardStyle.wrapper}`}
            >
              <h3 className={`mb-4 font-semibold ${cardStyle.titleColor}`}>{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium ${cardStyle.tagStyle}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
