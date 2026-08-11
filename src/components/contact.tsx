"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${name || "your website"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`)}`;

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Open to Data Analyst, BI Analyst, Data Engineer, and AI/ML Engineer roles. The fastest way to reach me is email or LinkedIn."
        />

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <Mail size={18} className="text-accent shrink-0" />
              <span className="text-sm break-all">{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <LinkedinIcon size={18} className="text-accent shrink-0" />
              <span className="text-sm">LinkedIn — Hanane Iouiri</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 hover:border-accent/50 transition-colors"
            >
              <GithubIcon size={18} className="text-accent shrink-0" />
              <span className="text-sm">GitHub — HananeIouiri</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4">
              <MapPin size={18} className="text-accent shrink-0" />
              <span className="text-sm text-muted">{profile.location}</span>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            action={mailtoHref}
            method="get"
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-mono text-muted">Name</label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-muted">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-mono text-muted">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="mt-1.5 w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none"
                placeholder="Tell me a bit about the role or project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Send message
              <Send size={14} />
            </button>
            <p className="text-[11px] text-muted">Opens your email client with this message pre-filled — no data is stored.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
