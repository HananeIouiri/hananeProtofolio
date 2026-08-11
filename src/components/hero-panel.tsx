"use client";

import { motion } from "framer-motion";

const bars = [42, 68, 55, 81, 60, 74, 47, 88, 63, 70];

export function HeroPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2rem] bg-accent/10 blur-2xl" aria-hidden />
      <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-sm shadow-xl shadow-black/5 overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-crit/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
          </div>
          <span className="font-mono text-[11px] text-muted">campaign_health.dashboard</span>
        </div>

        <div className="p-5 space-y-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "OK rate", value: "94.2%", tone: "text-ok" },
              { label: "Active alerts", value: "3", tone: "text-warn" },
              { label: "Runs", value: "184K", tone: "text-foreground" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl bg-surface-2 p-3">
                <p className="text-[11px] text-muted mb-1">{stat.label}</p>
                <p className={`font-mono text-lg font-semibold ${stat.tone}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-surface-2 p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] text-muted">OK rate — last 10 runs</p>
              <span className="font-mono text-[10px] text-ok">▲ trending up</span>
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: "easeOut" }}
                  className="flex-1 rounded-sm bg-accent/70"
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ok opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ok" />
            </span>
            Local AI Copilot — online, no cloud calls
          </div>
        </div>
      </div>
    </div>
  );
}
