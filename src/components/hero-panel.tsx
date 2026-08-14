"use client";

import { useEffect, useState } from "react";

const codeLines = [
  "const hanane = {",
  '  role: "Data, AI & BI Engineer",',
  '  stack: ["Python", "SQL", "Power BI", "RAG"],',
  '  currently: "Scalian × Alstom",',
  '  status: "open to work",',
  "};",
  "",
  "console.log(`Hi, I'm ${hanane.role}`);",
];

const TOKEN_REGEX =
  /(".*?"|'.*?'|`.*?`)|\b(const|console|log)\b|([A-Za-z_$][\w$]*)(?=\s*:)|([{}[\]():,])/g;

function highlightLine(line: string) {
  const tokens: { text: string; cls: string }[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  TOKEN_REGEX.lastIndex = 0;
  while ((m = TOKEN_REGEX.exec(line))) {
    if (m.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, m.index), cls: "text-foreground/80" });
    }
    if (m[1]) tokens.push({ text: m[1], cls: "text-ok" });
    else if (m[2]) tokens.push({ text: m[2], cls: "text-accent" });
    else if (m[3]) tokens.push({ text: m[3], cls: "text-foreground" });
    else if (m[4]) tokens.push({ text: m[4], cls: "text-muted" });
    lastIndex = TOKEN_REGEX.lastIndex;
  }
  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), cls: "text-foreground/80" });
  }
  return tokens.map((t, i) => (
    <span key={i} className={t.cls}>
      {t.text}
    </span>
  ));
}

export function HeroPanel() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentLine = codeLines[lineIndex] ?? "";

    if (lineIndex >= codeLines.length) {
      const resetTimer = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 2200);
      return () => clearTimeout(resetTimer);
    }

    if (charIndex < currentLine.length) {
      const typeTimer = setTimeout(() => setCharIndex((c) => c + 1), 24 + Math.random() * 22);
      return () => clearTimeout(typeTimer);
    }

    const lineTimer = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 220);
    return () => clearTimeout(lineTimer);
  }, [lineIndex, charIndex]);

  const isDone = lineIndex >= codeLines.length;

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
          <span className="font-mono text-[11px] text-muted">hello.ts</span>
        </div>

        <div className="p-6 font-mono text-[13px] sm:text-sm leading-relaxed">
          {codeLines.map((line, i) => {
            const isCurrent = i === lineIndex && !isDone;
            const text = i < lineIndex || isDone ? line : isCurrent ? line.slice(0, charIndex) : "";
            return (
              <div key={i} className="whitespace-pre">
                {text ? highlightLine(text) : " "}
                {isCurrent ? <span className="inline-block w-[7px] h-[1em] -mb-0.5 bg-accent animate-pulse" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
