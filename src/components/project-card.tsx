"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/brand-icons";

const categoryTone: Record<Project["category"], string> = {
  "Data Engineering": "text-accent",
  AI: "text-ok",
  "Software Engineering": "text-warn",
};

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (slug: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors"
    >
      <div className="flex items-center justify-between">
        <span className={`font-mono text-[11px] uppercase tracking-wide ${categoryTone[project.category]}`}>
          {project.category}
        </span>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="text-muted hover:text-foreground transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={16} />
          </a>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold">{project.name}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full bg-surface-2 px-2.5 py-1 text-[10.5px] font-mono text-muted">
            {t}
          </span>
        ))}
        {project.tech.length > 4 ? (
          <span className="rounded-full px-2.5 py-1 text-[10.5px] font-mono text-muted">
            +{project.tech.length - 4}
          </span>
        ) : null}
      </div>

      <button
        onClick={() => onOpen(project.slug)}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
      >
        View case study
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
      </button>
    </motion.article>
  );
}
