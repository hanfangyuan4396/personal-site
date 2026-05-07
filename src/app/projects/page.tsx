import Link from "next/link";
import { BookOpen, ExternalLink, Github } from "lucide-react";

import { featuredProjects } from "@/data/projects";

const projectCardClassName =
  "group relative flex flex-col overflow-hidden rounded-lg border border-[oklch(0.84_0.018_105)] bg-[oklch(0.995_0.003_95/0.78)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm transition-all before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[oklch(0.47_0.12_155)] before:opacity-0 before:transition-opacity hover:border-[oklch(0.58_0.09_145/0.55)] hover:shadow-[0_16px_34px_rgba(45,60,43,0.1)] hover:before:opacity-100 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none dark:hover:border-[oklch(0.74_0.12_155/0.45)] dark:hover:shadow-[0_18px_38px_rgba(0,0,0,0.26)]";

const projectCardStretchLinkClassName =
  "absolute inset-0 z-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.47_0.12_155/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const projectIconLinkClassName =
  "text-muted-foreground transition-colors hover:text-[oklch(0.38_0.11_155)] dark:hover:text-[oklch(0.78_0.12_155)]";

export const metadata = {
  title: "方圆AI",
  description: "方圆参与并引以为豪的代表性项目",
};

export default function ProjectsPage() {
  /** 与 `featuredProjects` 数组顺序一致，便于相关项目（如 Dify 与顾问落地）紧挨展示 */
  const projects = featuredProjects;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-14">
        <h1 className="text-3xl font-bold sm:text-4xl">项目经历</h1>
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
                      className={projectIconLinkClassName}
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
                      className={projectIconLinkClassName}
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
                      className={projectIconLinkClassName}
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
                      className="list-disc pl-4 marker:text-[oklch(0.72_0.14_78/0.72)] dark:marker:text-[oklch(0.82_0.13_78/0.68)]"
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
                      className="rounded-md border border-[oklch(0.78_0.08_78/0.42)] bg-[oklch(0.96_0.035_82)] px-2 py-0.5 text-xs font-medium text-[oklch(0.43_0.08_78)] dark:border-[oklch(0.82_0.13_78/0.32)] dark:bg-[oklch(0.82_0.13_78/0.1)] dark:text-[oklch(0.84_0.13_78)]"
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
                    className="rounded-full border border-[oklch(0.82_0.016_105)] px-2.5 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-[oklch(0.47_0.12_155/0.25)] dark:border-white/10 dark:group-hover:border-[oklch(0.74_0.12_155/0.25)]"
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
