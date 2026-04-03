import Link from "next/link";
import { ArrowRight, BookOpen, ExternalLink, Github } from "lucide-react";

import { featuredProjects } from "@/data/projects";

const homeProjects = featuredProjects.filter((p) => p.showOnHome !== false);

const projectCardClassName =
  "group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-blue-400/50 hover:shadow-[0_4px_20px_rgba(59,130,246,0.12)] dark:hover:border-blue-500/40 dark:hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]";

const projectCardStretchLinkClassName =
  "absolute inset-0 z-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-blue-500/10 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">精选项目</h2>
          <p className="mt-2 text-muted-foreground">我参与并引以为豪的代表性工作</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {homeProjects.map((project) => {
            const cardInner = (
              <div
                className={
                  project.cardHref
                    ? "relative z-10 flex flex-col pointer-events-none"
                    : "flex flex-col"
                }
              >
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-medium text-blue-600/80 dark:text-blue-400/80">
                      {project.category}
                    </span>
                    <h3 className="mt-0.5 font-semibold">{project.name}</h3>
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

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

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

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-300/60 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700 transition-all hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:border-blue-400/60 dark:hover:bg-blue-500/15 dark:hover:text-blue-200"
          >
            了解详细项目 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
