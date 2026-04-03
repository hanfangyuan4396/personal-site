import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import { featuredProjects } from "@/data/home";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-blue-500/10 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">精选项目</h2>
          <p className="mt-2 text-muted-foreground">我参与并引以为豪的代表性工作</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-blue-500/40 hover:shadow-[0_0_24px_rgba(59,130,246,0.08)]"
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium text-blue-400/80">
                    {project.category}
                  </span>
                  <h3 className="mt-0.5 font-semibold">{project.name}</h3>
                </div>
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
                      className="rounded-md bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-300 border border-blue-500/20"
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

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300 transition-all hover:border-blue-400/60 hover:bg-blue-500/15 hover:text-blue-200"
          >
            了解详细项目 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
