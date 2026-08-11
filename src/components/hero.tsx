"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { HeroPanel } from "@/components/hero-panel";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-grid-fade"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-mono text-muted mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            Open to Data / BI / AI opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] text-balance">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-medium text-accent">{profile.headline}</p>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed text-balance">
            {profile.positioning}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View my work
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-surface-2 transition-colors"
            >
              Download CV
              <FileDown size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-border hover:bg-surface-2 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-border hover:bg-surface-2 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-border pt-7">
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-muted">Focus</dt>
              <dd className="mt-1 font-mono text-sm">Data · AI · BI</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-muted">Based in</dt>
              <dd className="mt-1 font-mono text-sm">Casablanca, MA</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-muted">Currently</dt>
              <dd className="mt-1 font-mono text-sm">Scalian × Alstom</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <HeroPanel />
        </motion.div>
      </div>
    </section>
  );
}
