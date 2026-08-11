"use client";

import { motion } from "framer-motion";
import { Database, Cog, BarChart3, Sparkles, LayoutDashboard, Target } from "lucide-react";

const stages = [
  { icon: Database, label: "Raw Data", note: "Excel reports, logs, sensor streams" },
  { icon: Cog, label: "Engineering", note: "ETL pipelines, warehousing" },
  { icon: BarChart3, label: "Analytics", note: "KPIs, trends, regressions" },
  { icon: Sparkles, label: "AI", note: "Anomaly detection, RAG copilots" },
  { icon: LayoutDashboard, label: "Business Intelligence", note: "Dashboards, reporting" },
  { icon: Target, label: "Decision", note: "The answer a stakeholder needed" },
];

function Connector({ delay }: { delay: number }) {
  return (
    <div className="relative shrink-0 w-px h-10 lg:w-full lg:h-px lg:flex-1 bg-border mx-auto lg:mx-0 lg:mt-6 overflow-hidden">
      <motion.span
        className="absolute lg:top-0 left-0 lg:left-auto w-full h-6 lg:h-full lg:w-6 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-accent to-transparent"
        animate={{
          top: ["-30%", "130%"],
          left: ["-30%", "130%"],
        }}
        transition={{ duration: 2, repeat: Infinity, delay, ease: "linear" }}
      />
    </div>
  );
}

export function DataFlow() {
  return (
    <section className="py-24 sm:py-28 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent">How I work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
            I don&apos;t just write code — I move data into decisions
          </h2>
        </div>

        <div className="mt-16 flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-0">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="contents lg:flex lg:flex-1 lg:items-start">
                <div className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-0 lg:w-32 lg:text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-center justify-center h-12 w-12 shrink-0 rounded-xl border border-border bg-surface"
                  >
                    <Icon size={20} className="text-accent" />
                  </motion.div>
                  <div className="lg:mt-4">
                    <p className="text-sm font-semibold">{stage.label}</p>
                    <p className="mt-0.5 text-xs text-muted leading-relaxed lg:max-w-[8.5rem] mx-auto">
                      {stage.note}
                    </p>
                  </div>
                </div>
                {i < stages.length - 1 ? <Connector delay={i * 0.25} /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
