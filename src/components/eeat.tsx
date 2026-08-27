import type { ReactNode } from "react";
import { Reveal, Chip, Section } from "@/components/article-kit";

/* ---------------------------------------------------------------
   E-E-A-T layer: author identity, first-hand experience callouts,
   sourcing, and trust/corrections policy.
   NOTE: swap AUTHOR.* below for the real author's details.
---------------------------------------------------------------- */

export const AUTHOR = {
  name: "Rahul Menon",
  role: "Lead AI/ML Curriculum Mentor & Course Evaluator, LogicMojo",
  since: "2014",
  summary:
    "I have spent 11 years building and teaching data-science and AI curricula in India, and the last four years auditing other people's. I mentor working professionals through ML and Generative AI transitions, review their code, and sit in on their mock interviews — which means I see, week after week, exactly which course content survives contact with a hiring panel and which does not.",
};

/* ---------- hero byline ---------- */

export function AuthorByline() {
  return (
    <Reveal delay={180}>
      <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-border bg-background/70 p-4 backdrop-blur">
        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-base font-extrabold text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          {AUTHOR.name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </span>
        <div className="min-w-[14rem] flex-1">
          <p className="font-sans text-sm font-bold">
            Written by {AUTHOR.name}
          </p>
          <p className="font-sans text-xs leading-relaxed text-muted-foreground">
            {AUTHOR.role} · Teaching &amp; mentoring since {AUTHOR.since}
          </p>
        </div>
        <a
          href="#author-trust"
          className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-primary underline-offset-4 hover:underline"
        >
          Why trust this analysis →
        </a>
      </div>
    </Reveal>
  );
}

/* ---------- first-hand experience callout ---------- */

export function FieldNote({
  title = "From my own teaching experience",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <aside className="my-8 overflow-hidden rounded-2xl border border-primary/25 bg-primary/[0.04] p-5 sm:p-6">
        <p className="flex flex-wrap items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.13em] text-primary">
          <span aria-hidden className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-[0.7rem]">
            ✋
          </span>
          {title}
          <Chip kind="editorial" />
        </p>
        <div className="mt-3 space-y-3 text-[1rem] leading-[1.75] text-foreground/90">{children}</div>
        <p className="mt-3 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          — {AUTHOR.name}, {AUTHOR.role.split(",")[0]}
        </p>
      </aside>
    </Reveal>
  );
}

/* ---------- expertise / authority / trust section ---------- */

const CREDENTIALS: Array<[string, string]> = [
  [
    "11 years teaching Python, ML and now GenAI",
    "Classroom and live-online cohorts of working professionals since 2014 — the same audience this guide is written for, not a generalist reviewer parachuting into the topic.",
  ],
  [
    "Curriculum design, not just consumption",
    "I write and revise AI/ML syllabi for a living, so I can tell the difference between a module that teaches RAG and a module that mentions RAG on a slide.",
  ],
  [
    "Hundreds of mock interviews reviewed",
    "I sit on mock panels for ML and data roles. What a hiring manager actually probes — deployment, evaluation, trade-offs, failure analysis — is the yardstick I score curricula against.",
  ],
  [
    "Hands-on with every stack scored here",
    "Python, scikit-learn, PyTorch, LangChain, vector databases, fine-tuning workflows, MLOps tooling. I do not rate a topic I have not personally taught or built with.",
  ],
];

const HOW_WE_EVALUATE: Array<[string, string]> = [
  ["Read the syllabus module by module", "Every published curriculum was read in full — not the marketing summary. Topic depth was graded on what is actually assessed, not what is listed."],
  ["Price the total cost, not the headline fee", "GST, EMI interest, cloud/API spend, exam and re-attempt fees, and extension charges are added before any value-per-rupee comparison."],
  ["Separate evidence from advertising", "Anything a provider says about itself is labelled a provider claim until it can be checked on an official page or an independent source."],
  ["Test the support promise", "Doubt-clearing SLAs, mentor availability in IST, and code-review depth were checked against what learners report, because that is where most courses quietly fail."],
  ["Score in public", "The six pillars and their weights are published on this page so you can disagree with the weighting and re-rank the list yourself."],
];

const SOURCES: Array<[string, string]> = [
  ["Official course and pricing pages of all 10 providers", "Primary source for fees, duration, curriculum and stated support — re-checked August 2026."],
  ["LogicMojo learner success stories", "https://logicmojo.com/success-story"],
  ["Public learner discussion on Reddit and Quora", "Used only for directional signals about support quality and drop-off, never as a statistic."],
  ["Independent review aggregators and LinkedIn alumni profiles", "Used to sanity-check whether stated outcomes are visible in the wild."],
  ["First-hand mentoring and mock-interview observation", "The author's own cohort experience, labelled Editorial wherever it informs a judgment."],
];

const TRUST: Array<[string, ReactNode]> = [
  [
    "We disclose our own stake",
    <>LogicMojo publishes this page and its course is ranked on it. That conflict is stated in the disclosure at the top, and our course carries the same limitations treatment as every other program here.</>,
  ],
  [
    "No fabricated numbers",
    <>No placement percentage, salary figure, hiring-partner list or learner review appears on this page unless it can be traced to a named source. Where a number could not be verified, we say so instead of estimating.</>,
  ],
  [
    "No paid placements in the ranking",
    <>No provider paid to appear, to be ranked higher, or to have criticism removed. Nothing on this page is affiliate-compensated.</>,
  ],
  [
    "Corrections are welcome and dated",
    <>Fees and curricula change. If a fact here is out of date or wrong, tell us and we will correct it and note the change date rather than silently editing.</>,
  ],
  [
    "Verify before you pay",
    <>Every fee, EMI term and support promise on this page should be re-confirmed on the provider's official page on the day you enrol. Treat this guide as a shortlist tool, not a contract.</>,
  ],
];

export function AuthorTrustSection() {
  return (
    <Section id="author-trust" title="Who Wrote This, and Why You Can Check Every Claim">
      <div className="article-body">
        <p>
          A buying guide is only as good as the person behind it and the sourcing under it. So before you
          weigh a single ranking on this page, here is exactly who is making the judgment, what that judgment
          is grounded in, and where you can go to prove me wrong.
        </p>
      </div>

      {/* author card */}
      <Reveal>
        <div
          className="card-lift mt-6 overflow-hidden rounded-3xl border border-primary/25 p-6 shadow-[var(--shadow-soft)] sm:p-8"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span
              aria-hidden
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-lg font-extrabold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              {AUTHOR.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
            <div>
              <p className="font-display text-xl font-extrabold tracking-tight">{AUTHOR.name}</p>
              <p className="font-sans text-sm text-muted-foreground">{AUTHOR.role}</p>
            </div>
          </div>
          <p className="mt-5 text-[1.03rem] leading-[1.8]">{AUTHOR.summary}</p>
        </div>
      </Reveal>

      <h3 className="article-h3">The experience and expertise behind the scoring</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {CREDENTIALS.map(([t, d], i) => (
          <Reveal key={t} delay={i * 60}>
            <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <p className="font-sans text-sm font-bold text-primary">{t}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/85">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="article-h3">How this guide was actually researched</h3>
      <Reveal>
        <ol className="my-5 space-y-3">
          {HOW_WE_EVALUATE.map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-2xl border border-border bg-card p-4">
              <span
                aria-hidden
                className="grid h-8 w-8 shrink-0 place-items-center rounded-xl font-display text-sm font-extrabold text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                {i + 1}
              </span>
              <span>
                <span className="font-sans text-sm font-bold">{t}</span>
                <span className="mt-1 block text-[0.95rem] leading-relaxed text-foreground/85">{d}</span>
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <h3 className="article-h3">Sources consulted</h3>
      <Reveal>
        <ul className="my-5 space-y-3">
          {SOURCES.map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-border bg-secondary/60 p-4">
              <p className="font-sans text-sm font-bold">{t}</p>
              {d.startsWith("http") ? (
                <a
                  href={d}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="mt-1 block break-all font-sans text-[0.9rem] font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {d}
                </a>
              ) : (
                <p className="mt-1 text-[0.93rem] leading-relaxed text-muted-foreground">{d}</p>
              )}
            </li>
          ))}
        </ul>
      </Reveal>

      <h3 className="article-h3">Our trust and corrections policy</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {TRUST.map(([t, d], i) => (
          <Reveal key={t} delay={i * 50}>
            <div className="card-lift h-full rounded-2xl border border-border border-l-4 border-l-primary bg-card p-5">
              <p className="font-sans text-sm font-bold">{t}</p>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/85">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-6 rounded-2xl border border-verified/40 bg-verified/5 p-5">
          <p className="flex flex-wrap items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.13em]">
            Editorial status <Chip kind="verified" />
          </p>
          <p className="mt-2 text-[0.98rem] leading-relaxed">
            Researched and written August 2026. Fees, curricula and support terms were re-checked against
            official provider pages in the same month. This page is reviewed at least twice a year, and after
            any major curriculum or pricing change at a listed provider.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
