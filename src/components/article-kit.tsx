import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- scroll reveal ---------- */

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? " is-visible" : ""}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ---------- fact labels ---------- */

export function Chip({ kind }: { kind: "verified" | "claim" | "editorial" | "verify" }) {
  const label = {
    verified: "Verified — Aug 2026",
    claim: "Provider claim",
    editorial: "Editorial",
    verify: "VERIFY",
  }[kind];
  return <span className={`fact-chip fact-chip-${kind}`}>{label}</span>;
}

/* ---------- layout primitives ---------- */

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section>
      <Reveal>
        <h2 id={id} className="article-h2">
          <span
            aria-hidden
            className="mb-3 block h-1 w-12 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}

export function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="article-h3">
      {children}
    </h3>
  );
}

export function Pull({ children }: { children: ReactNode }) {
  return <blockquote className="pull-quote">{children}</blockquote>;
}

/* ---------- shared visual blocks ---------- */

export function Note({
  tone = "info",
  label,
  children,
}: {
  tone?: "info" | "warn" | "good";
  label: string;
  children: ReactNode;
}) {
  const tones = {
    info: "border-primary/25 bg-primary/5 text-primary",
    warn: "border-claim/40 bg-claim/5 text-claim",
    good: "border-verified/40 bg-verified/5 text-verified",
  } as const;
  return (
    <Reveal>
      <div className={`my-7 rounded-2xl border border-l-4 p-5 ${tones[tone]}`}>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.14em]">{label}</p>
        <div className="mt-2 text-[1.01rem] leading-relaxed text-foreground">{children}</div>
      </div>
    </Reveal>
  );
}

export function NumberCard({
  n,
  title,
  children,
}: {
  n: number | string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <div className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-sm font-extrabold text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          {n}
        </span>
        <div>
          <p className="font-display text-[1.05rem] font-bold leading-snug tracking-tight">{title}</p>
          <p className="mt-1.5 text-[0.99rem] leading-relaxed text-muted-foreground">{children}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function StatTile({ big, small }: { big: string; small: string }) {
  return (
    <div className="card-lift rounded-2xl border border-border bg-card p-4 text-center shadow-[var(--shadow-soft)]">
      <p className="font-display text-xl font-extrabold tracking-tight text-primary">{big}</p>
      <p className="mt-1 font-sans text-[0.7rem] font-semibold uppercase leading-snug tracking-[0.1em] text-muted-foreground">
        {small}
      </p>
    </div>
  );
}
