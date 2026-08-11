"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education, certifications } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Background" title="Education & certifications" />

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div className="space-y-6">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6"
              >
                <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-xl bg-accent-soft text-accent">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted">{item.dates} · {item.location}</p>
                  <h3 className="mt-1 text-base font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{item.institution}</p>
                  {item.program ? (
                    <p className="mt-2 text-sm text-foreground/80">{item.program}</p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-accent" />
              <p className="text-sm font-semibold">Certifications</p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {certifications.map((cert, i) => (
                <motion.li
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <p className="text-sm font-medium leading-snug">{cert.name}</p>
                  <p className="text-xs text-muted mt-0.5">{cert.issuer}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
