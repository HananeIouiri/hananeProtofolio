"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { projects } from "@/data/projects";

export function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.slug === openSlug) ?? null;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured projects"
          description="Chosen for technical depth and relevance to Data, AI, and BI — not a full repository dump. My final-year project has its own dedicated section below."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} onOpen={setOpenSlug} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setOpenSlug(null)} />
    </section>
  );
}
