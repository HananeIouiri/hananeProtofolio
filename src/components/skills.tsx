"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills, organized the way I use them"
          description="Grouped by the role they play in a project rather than dumped into one long list."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-semibold">{cat.title}</h3>
              <p className="mt-1.5 text-xs text-muted leading-relaxed">{cat.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-mono text-foreground/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
