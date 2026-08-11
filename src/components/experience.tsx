"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied this"
          description="Internships that moved from business analysis to shipped, working systems."
        />

        <div className="mt-14 space-y-10">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                  <p className="mt-1 text-accent font-medium">
                    {exp.company}
                    {exp.client ? <span className="text-muted font-normal"> · {exp.client}</span> : null}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5 text-xs text-muted shrink-0">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} /> {exp.dates}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-[0.95rem] text-foreground/85 leading-relaxed max-w-3xl">
                {exp.summary}
              </p>

              {exp.businessSide && exp.technicalSide ? (
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wide text-muted mb-3 flex items-center gap-1.5">
                      <Briefcase size={12} /> Business & analysis
                    </p>
                    <ul className="space-y-2">
                      {exp.businessSide.map((item) => (
                        <li key={item} className="text-sm text-foreground/80 leading-snug flex gap-2.5">
                          <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wide text-muted mb-3 flex items-center gap-1.5">
                      <Briefcase size={12} /> Technical build
                    </p>
                    <ul className="space-y-2">
                      {exp.technicalSide.map((item) => (
                        <li key={item} className="text-sm text-foreground/80 leading-snug flex gap-2.5">
                          <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <ul className="mt-6 space-y-2">
                  {exp.responsibilities?.map((item) => (
                    <li key={item} className="text-sm text-foreground/80 leading-snug flex gap-2.5">
                      <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-2 px-2.5 py-1 text-[11px] font-mono text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
