import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { featuredProjects } from "@/data/home";

const categoryOrder = ["开源项目", "AI 工程", "全栈开发", "学术研究", "AI 应用"];

const categoryColors: Record<string, string> = {
  "开源项目": "text-cyan-400",
  "AI 工程": "text-blue-400",
  "全栈开发": "text-purple-400",
  "学术研究": "text-green-400",
  "AI 应用": "text-orange-400",
};

function groupByCategory(projects: typeof featuredProjects) {
  const map = new Map<string, typeof featuredProjects>();
  for (const p of projects) {
    const list = map.get(p.category) ?? [];
    list.push(p);
    map.set(p.category, list);
  }
  return categoryOrder
    .filter((c) => map.has(c))
    .map((c) => ({ category: c, projects: map.get(c)! }));
}

export const metadata = {
  title: "项目 · 方圆",
  description: "方圆参与并引以为豪的代表性项目",
};

export default function ProjectsPage() {
  const groups = groupByCategory(featuredProjects);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-14">
        <h1 className="text-3xl font-bold sm:text-4xl">项目经历</h1>
        <p className="mt-3 text-muted-foreground">
          涵盖开源项目、AI 工程、全栈开发与学术研究方向
        </p>
      </div>

      <div className="flex flex-col gap-14">
        {groups.map(({ category, projects }) => (
          <section key={category}>
            <h2
              className={`mb-6 text-lg font-semibold ${categoryColors[category] ?? "text-muted-foreground"}`}
            >
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
                >
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="font-semibold">{project.name}</h3>
                    <div className="flex shrink-0 items-center gap-2">
                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-blue-400"
                          aria-label="GitHub"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      )}
                      {project.links.demo && (
                        <Link
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-blue-400"
                          aria-label="在线体验"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {project.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
