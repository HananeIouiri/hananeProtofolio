"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Lightbulb, ListChecks, User } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "@/components/brand-icons";

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            className="relative z-10 w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-border bg-surface/95 backdrop-blur px-6 py-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wide text-accent">{project.category}</p>
                <h3 className="text-xl font-semibold mt-0.5">{project.name}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close case study"
                className="p-2 rounded-full hover:bg-surface-2 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-6 space-y-6">
              <p className="text-muted leading-relaxed">{project.tagline}</p>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-muted mb-2">
                  <Target size={13} /> Problem
                </p>
                <p className="text-sm leading-relaxed text-foreground/85">{project.problem}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-muted mb-2">
                  <Lightbulb size={13} /> Solution
                </p>
                <p className="text-sm leading-relaxed text-foreground/85">{project.solution}</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-muted mb-2">
                  <ListChecks size={13} /> Key features
                </p>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/85 leading-snug flex gap-2.5">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-muted mb-2">
                  <User size={13} /> My contribution
                </p>
                <p className="text-sm leading-relaxed text-foreground/85">{project.contribution}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-mono text-muted">
                    {t}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-surface-2 transition-colors"
                >
                  <GithubIcon size={16} />
                  View source on GitHub
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
