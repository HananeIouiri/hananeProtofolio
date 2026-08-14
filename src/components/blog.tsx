"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Notebook } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";

export function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Writing"
          title="Blog"
          description="Notes on data engineering, BI, and applied AI — written as I build things."
        />

        {blogPosts.length > 0 ? (
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <motion.a
                key={post.slug}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-muted font-mono">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-2 px-2.5 py-1 text-[10.5px] font-mono text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Read
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mt-14 flex flex-col items-center text-center rounded-2xl border border-dashed border-border bg-surface px-6 py-16"
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-accent-soft text-accent">
              <Notebook size={20} />
            </div>
            <p className="mt-4 text-sm font-semibold">First post coming soon</p>
            <p className="mt-1.5 text-sm text-muted max-w-sm">
              I'm writing up notes from recent projects — check back soon, or follow along on{" "}
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-accent font-medium">
                LinkedIn
              </a>
              .
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
