"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { storySteps } from "@/data/profile";

const paragraphs = [
  "My background sits at the intersection of Big Data engineering and Business Intelligence: an engineering track at ENSET Mohammedia built around distributed data pipelines and cloud computing, applied since to real reporting problems rather than isolated coursework.",
  "The clearest example is my current mission at Scalian Maroc, on behalf of Alstom's Marseille metro signalling project. It started as a business-analysis assignment — understanding how test engineers validated a rail-supervision interface — and turned into an end-to-end platform: a data warehouse, an ETL pipeline, an alert engine, Power BI reporting, and a local AI copilot, all built to answer one question faster: is this test campaign healthy?",
  "Outside that mission, I keep building the same kind of system on smaller scales — Kafka and Spark pipelines for streaming and log analytics, a serverless AI product, a secured backend — because the fastest way to learn a data stack is to ship something real with it.",
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Business problems, translated into data systems"
          description="A short version of how I got here — and how I think about the work."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_0.85fr] gap-16">
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-base sm:text-[1.05rem] leading-relaxed text-foreground/90"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-28 space-y-0">
              {storySteps.map((step, i) => (
                <motion.div
                  key={step.index}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4 py-4 border-b border-border last:border-0"
                >
                  <span className="font-mono text-xs text-accent pt-0.5 shrink-0">{step.index}</span>
                  <div>
                    <p className="text-sm font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm text-muted leading-relaxed">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
