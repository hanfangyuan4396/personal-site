import { skillGroups } from "@/data/skills";

const cardStyle = {
  wrapper:
    "border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.76)] shadow-[0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-sm hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.09)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.22)]",
  titleColor: "text-foreground",
  tagStyle:
    "rounded-full border border-[oklch(0.68_0.09_155/0.36)] bg-[oklch(0.94_0.035_150)] text-[oklch(0.37_0.1_155)] dark:border-[oklch(0.74_0.12_155/0.28)] dark:bg-[oklch(0.74_0.12_155/0.08)] dark:text-[oklch(0.78_0.12_155)]",
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-[oklch(0.72_0.045_100/0.14)] py-16 sm:py-24 dark:border-white/[0.06]"
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
              className={`rounded-lg border p-6 transition-all ${cardStyle.wrapper}`}
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
