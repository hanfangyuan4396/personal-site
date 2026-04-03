import Link from "next/link";
import { BookOpen, ExternalLink, Github } from "lucide-react";

import { featuredProjects } from "@/data/projects";

const projectCardClassName =
  "group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-blue-400/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)] dark:hover:border-blue-500/40 dark:hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]";

const projectCardStretchLinkClassName =
  "absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const metadata = {
  title: "方圆AI分享",
  description: "方圆参与并引以为豪的代表性项目",
};

export default function ProjectsPage() {
  /** 与 `featuredProjects` 数组顺序一致，便于相关项目（如 Dify 与顾问落地）紧挨展示 */
  const projects = featuredProjects;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-14">
        <h1 className="text-3xl font-bold sm:text-4xl">项目经历</h1>
        <p className="mt-3 text-muted-foreground">
          按简历与真实交付整理：每条项目在下方展开职责、模块与效果，便于与首页「精选」对照阅读
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const cardInner = (
            <div
              className={
                project.cardHref
                  ? "relative z-10 flex flex-col pointer-events-none"
                  : "flex flex-col"
              }
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h2 className="text-base font-semibold">{project.name}</h2>
                  {(project.organization || project.period) && (
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">
                      {[project.organization, project.period].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
                <div
                  className={`flex shrink-0 items-center gap-2 ${project.cardHref ? "pointer-events-auto" : ""}`}
                >
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
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
                      className="text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="在线体验"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                  {project.links.paper && (
                    <Link
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                      aria-label="论文（ScienceDirect）"
                    >
                      <BookOpen className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

              {project.details && project.details.length > 0 ? (
                <ul className="mt-4 space-y-2.5 border-t border-border/70 pt-4 text-sm leading-relaxed text-muted-foreground">
                  {project.details.map((line, idx) => (
                    <li
                      key={`${project.id}-${idx}`}
                      className="list-disc pl-4 marker:text-blue-400/70"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}

              {project.highlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300"
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
          );

          if (project.cardHref) {
            return (
              <div key={project.id} className={projectCardClassName}>
                <Link
                  href={project.cardHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={projectCardStretchLinkClassName}
                  aria-label={`在浏览器新标签打开 ${project.name}`}
                />
                {cardInner}
              </div>
            );
          }

          return (
            <div key={project.id} className={projectCardClassName}>
              {cardInner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
