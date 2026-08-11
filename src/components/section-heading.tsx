interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="flex items-center gap-3 mb-4" style={align === "center" ? { justifyContent: "center" } : undefined}>
        <span className="h-px w-8 bg-accent" />
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent">{eyebrow}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">{title}</h2>
      {description ? (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed text-balance">{description}</p>
      ) : null}
    </div>
  );
}
