"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { pfe } from "@/data/pfe";

export function Pfe() {
  return (
    <section id="pfe" className="py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Final-Year Project" title="AI Reporting Assistant" />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent-soft text-accent px-3 py-1 text-xs font-mono">
            {pfe.subtitle}
          </span>
        </div>

        <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3 max-w-2xl">
          <ShieldCheck size={16} className="text-muted mt-0.5 shrink-0" />
          <p className="text-xs text-muted leading-relaxed">{pfe.confidentialityNote}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3">Problem</p>
            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-foreground/85">{pfe.problem}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <p className="font-mono text-xs uppercase tracking-wide text-accent mb-3">Objective</p>
            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-foreground/85">{pfe.objective}</p>
          </motion.div>
        </div>

        {/* Pipeline */}
        <div className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-wide text-accent mb-6">Pipeline</p>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-2">
            {pfe.pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-2 lg:gap-2 flex-1">
                <div className="flex-1 rounded-xl bg-surface-2 px-4 py-3.5 text-center">
                  <p className="text-xs sm:text-[13px] font-medium leading-snug">{step}</p>
                </div>
                {i < pfe.pipeline.length - 1 ? (
                  <ArrowRight
                    size={16}
                    className="hidden lg:block text-accent shrink-0"
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs text-muted">
            <p><span className="text-foreground font-medium">Style: </span>{pfe.architecture.style}</p>
            <p><span className="text-foreground font-medium">Data layer: </span>{pfe.architecture.dataLayer}</p>
            <p><span className="text-foreground font-medium">Deployment: </span>{pfe.architecture.deployment}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {pfe.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h4 className="font-semibold text-sm">{f.title}</h4>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech */}
        <div className="mt-8 flex flex-wrap gap-2">
          {pfe.technologies.map((t) => (
            <span key={t} className="rounded-full bg-surface-2 px-3 py-1.5 text-xs font-mono text-muted">
              {t}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 border-t border-border pt-10">
          {pfe.results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <p className="font-mono text-2xl sm:text-3xl font-semibold text-accent">{r.value}</p>
              <p className="mt-1 text-xs text-muted leading-snug">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
