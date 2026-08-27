import { useMemo, useState } from "react";
import { Reveal, Section } from "@/components/article-kit";

/* ------------------------------------------------------------------ */
/*  Course Finder Quiz — deterministic, transparent scoring            */
/* ------------------------------------------------------------------ */

type CourseKey =
  | "logicmojo"
  | "scaler"
  | "upgrad"
  | "greatlearning"
  | "pwskills"
  | "guvi"
  | "iitmadras"
  | "deeplearningai";

type Course = {
  key: CourseKey;
  name: string;
  band: string;
  value: string;
  modules: string[];
  support: string;
  cta: { label: string; href: string };
};

const COURSES: Record<CourseKey, Course> = {
  logicmojo: {
    key: "logicmojo",
    name: "LogicMojo — AI & Machine Learning Course",
    band: "Mid-band fee · live cohort · beginner-friendly",
    value:
      "The strongest all-round value pick on this page: a single structured sequence that starts at Python and statistics and ends at production GenAI, taught live, with mentorship and interview preparation bundled rather than sold as add-ons. For beginners and career switchers who want foundations before Generative AI, that ordering is the whole point — most premium programs assume the foundations you do not yet have, and most cheap self-paced tracks never force you to finish.",
    modules: [
      "Python, SQL & maths intuition for ML",
      "Classical ML: regression, trees, ensembles, evaluation",
      "Deep learning, NLP & computer vision foundations",
      "LLMs, Prompt Engineering & embeddings",
      "Production RAG + vector databases",
      "LangChain, AI Agents & tool use",
      "Fine-tuning (LoRA / QLoRA) & model serving",
      "Capstone portfolio projects + mock interviews",
    ],
    support:
      "Placement-first structure: structured job assistance, resume and portfolio review, mock interviews and career guidance, plus live doubt-clearing with mentors. Job assistance — not a job guarantee; ask for the current written scope before paying.",
    cta: { label: "See LogicMojo learner success stories", href: "https://logicmojo.com/success-story" },
  },
  scaler: {
    key: "scaler",
    name: "Scaler — Data Science & ML Program",
    band: "Premium fee · live cohort · placement infrastructure",
    value:
      "You are buying placement machinery and a recruiter network more than unique curriculum. Justifiable if you already have a technical base and your bottleneck is conversion into interviews, not capability.",
    modules: ["DSA + Python refresh", "ML & DL specialisation", "GenAI electives", "Structured interview prep"],
    support: "Dedicated career team and referral pipeline; outcome claims are provider-reported — ask for the cohort-level report.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
  upgrad: {
    key: "upgrad",
    name: "upGrad — AI/ML PG Programs",
    band: "Premium fee · university-linked credential",
    value: "You are largely buying a university-branded credential and its HR-screening signal, not a capability edge.",
    modules: ["Statistics & ML", "Deep learning", "Applied electives", "University certification"],
    support: "Career services vary by program tier; verify the current scope in writing.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
  greatlearning: {
    key: "greatlearning",
    name: "Great Learning — AI & ML PG Program",
    band: "Premium fee · university-linked · mentor sessions",
    value: "Broad coverage plus a recognisable academic partner; strongest when an employer is funding it.",
    modules: ["ML foundations", "Deep learning", "GenAI modules", "Mentor sessions"],
    support: "Career support included; treat outcome figures as provider-reported.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
  pwskills: {
    key: "pwskills",
    name: "PW Skills — Data Science / AI",
    band: "Budget fee · largely self-paced",
    value: "The best way to spend a small budget to test whether you actually enjoy this work before committing real money.",
    modules: ["Python", "ML basics", "Recorded projects"],
    support: "Limited, largely community-driven support; completion depends almost entirely on you.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
  guvi: {
    key: "guvi",
    name: "GUVI — AI/ML Career Programs",
    band: "Budget-to-mid fee · vernacular support",
    value: "Affordable, accessible and useful for foundations, especially with regional-language learning needs.",
    modules: ["Python & ML", "Applied projects", "Certification tracks"],
    support: "Basic placement support; depth is well below premium cohorts.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
  iitmadras: {
    key: "iitmadras",
    name: "IIT / IISc-linked executive AI programs",
    band: "Premium fee · academic depth",
    value: "Excellent when you want rigour and an institute-linked credential, and you can already self-manage the coding load.",
    modules: ["Mathematical foundations", "ML/DL theory", "Research-flavoured projects"],
    support: "Academic support strong; job assistance typically light — do not buy this for placements.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
  deeplearningai: {
    key: "deeplearningai",
    name: "DeepLearning.AI / Coursera specialisations",
    band: "Lowest fee · self-paced · global",
    value: "Unbeatable cost-per-concept for self-directed learners who need knowledge, not accountability or placement help.",
    modules: ["ML specialisation", "Deep learning", "GenAI short courses"],
    support: "None. You supply structure, projects, portfolio and job search yourself.",
    cta: { label: "Compare in the value table above", href: "#comparison-table" },
  },
};

type Option = { label: string; scores: Partial<Record<CourseKey, number>> };
type Question = { id: string; q: string; help?: string; options: Option[] };

const QUESTIONS: Question[] = [
  {
    id: "experience",
    q: "Where are you starting from?",
    help: "Be honest — the wrong entry point is the single biggest cause of dropouts.",
    options: [
      { label: "Complete beginner, non-technical", scores: { logicmojo: 3, guvi: 2, pwskills: 2 } },
      { label: "Fresher / student with some coding", scores: { logicmojo: 3, pwskills: 1, guvi: 1 } },
      { label: "Working professional, non-tech (analyst, finance, ops)", scores: { logicmojo: 3, greatlearning: 2, upgrad: 2 } },
      { label: "Software engineer with 2+ years", scores: { scaler: 3, iitmadras: 2, deeplearningai: 2, logicmojo: 2 } },
    ],
  },
  {
    id: "python",
    q: "Do you need Python, SQL and statistics taught from scratch?",
    options: [
      { label: "Yes — I need foundations first", scores: { logicmojo: 3, guvi: 2, pwskills: 1 } },
      { label: "Some revision would help", scores: { logicmojo: 2, greatlearning: 1, upgrad: 1 } },
      { label: "No — I code daily", scores: { scaler: 2, deeplearningai: 2, iitmadras: 2 } },
    ],
  },
  {
    id: "goal",
    q: "What is the career goal you are paying for?",
    options: [
      { label: "Switch into an AI/ML role", scores: { logicmojo: 3, scaler: 2, upgrad: 1 } },
      { label: "Add AI skills inside my current job", scores: { deeplearningai: 2, logicmojo: 2, greatlearning: 1 } },
      { label: "Build GenAI products / agents", scores: { logicmojo: 3, deeplearningai: 2 } },
      { label: "Academic depth or research direction", scores: { iitmadras: 3, deeplearningai: 1 } },
    ],
  },
  {
    id: "budget",
    q: "What is your realistic all-in budget (fee + GST + EMI interest)?",
    options: [
      { label: "Under ₹25,000", scores: { deeplearningai: 3, pwskills: 3, guvi: 2 } },
      { label: "₹25,000 – ₹75,000", scores: { logicmojo: 3, guvi: 2, pwskills: 1 } },
      { label: "₹75,000 – ₹2,00,000", scores: { logicmojo: 3, greatlearning: 2, iitmadras: 1 } },
      { label: "Above ₹2,00,000", scores: { scaler: 3, upgrad: 3, greatlearning: 2, iitmadras: 2 } },
    ],
  },
  {
    id: "placement",
    q: "How important is structured placement / job assistance?",
    options: [
      { label: "Critical — it is why I am paying", scores: { logicmojo: 3, scaler: 3, upgrad: 1 } },
      { label: "Useful, but capability matters more", scores: { logicmojo: 3, greatlearning: 1 } },
      { label: "Not needed — I can run my own job search", scores: { deeplearningai: 3, iitmadras: 2, pwskills: 1 } },
    ],
  },
  {
    id: "mode",
    q: "Which learning mode do you actually finish?",
    options: [
      { label: "Live classes with real instructors", scores: { logicmojo: 3, scaler: 2, greatlearning: 1 } },
      { label: "Hybrid — live sessions plus recordings", scores: { logicmojo: 3, upgrad: 1, greatlearning: 1 } },
      { label: "Fully self-paced", scores: { deeplearningai: 3, pwskills: 2, guvi: 1 } },
    ],
  },
  {
    id: "hours",
    q: "How many hours per week can you genuinely protect?",
    options: [
      { label: "Under 5 hours", scores: { deeplearningai: 2, pwskills: 2 } },
      { label: "6–12 hours", scores: { logicmojo: 3, greatlearning: 1, upgrad: 1 } },
      { label: "13–20 hours", scores: { logicmojo: 3, scaler: 2 } },
      { label: "20+ hours (full-time)", scores: { scaler: 2, logicmojo: 2, iitmadras: 2 } },
    ],
  },
  {
    id: "genai",
    q: "How much Generative AI depth do you want — LLMs, RAG, LangChain, fine-tuning, agents?",
    options: [
      { label: "Maximum — this is the reason I am enrolling", scores: { logicmojo: 3, deeplearningai: 2 } },
      { label: "A solid working layer on top of ML", scores: { logicmojo: 3, greatlearning: 1, scaler: 1 } },
      { label: "Minimal — core ML matters more to me", scores: { iitmadras: 2, scaler: 2, upgrad: 1 } },
    ],
  },
  {
    id: "mentor",
    q: "How much mentorship and doubt-clearing do you need?",
    options: [
      { label: "Regular 1:1 mentor access and live doubt sessions", scores: { logicmojo: 3, scaler: 2, greatlearning: 1 } },
      { label: "Occasional — mostly when I get stuck", scores: { logicmojo: 2, guvi: 1, upgrad: 1 } },
      { label: "None — forums are enough", scores: { deeplearningai: 3, pwskills: 2 } },
    ],
  },
];

export function CourseFinderQuiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / QUESTIONS.length) * 100);

  const ranked = useMemo(() => {
    const totals = new Map<CourseKey, number>();
    QUESTIONS.forEach((question) => {
      const idx = answers[question.id];
      if (idx === undefined) return;
      const opt = question.options[idx];
      if (!opt) return;
      Object.entries(opt.scores).forEach(([key, pts]) => {
        totals.set(key as CourseKey, (totals.get(key as CourseKey) ?? 0) + (pts ?? 0));
      });
    });
    return [...totals.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([key, score]) => ({ course: COURSES[key], score }));
  }, [answers]);

  const top = ranked[0];
  const runnersUp = ranked.slice(1, 3);
  const maxScore = top?.score || 1;

  return (
    <Section id="course-finder" title="Which AI Course Is Worth the Money for Me? — Interactive Course Finder">
      <div className="article-body">
        <p>
          Nine questions, no email required, no data leaves your browser. The logic is the same weighting
          used in the methodology section — foundations, format-completion fit, GenAI depth, placement need
          and budget — applied to your specific situation instead of an average reader’s.
        </p>
      </div>

      <Reveal>
        <div className="my-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift,var(--shadow-soft))]">
          <div className="border-b border-border p-5" style={{ background: "var(--gradient-subtle, transparent)" }}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-primary">
                AI Course Finder Quiz
              </p>
              <p className="font-sans text-xs font-semibold text-muted-foreground">
                {answered}/{QUESTIONS.length} answered
              </p>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%`, background: "var(--gradient-primary)" }}
              />
            </div>
          </div>

          <div className="divide-y divide-border">
            {QUESTIONS.map((question, qi) => (
              <fieldset key={question.id} className="p-5">
                <legend className="font-display text-[1.05rem] font-bold tracking-tight">
                  <span className="mr-2 text-primary">{qi + 1}.</span>
                  {question.q}
                </legend>
                {question.help ? (
                  <p className="mt-1 text-[0.92rem] text-muted-foreground">{question.help}</p>
                ) : null}
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {question.options.map((opt, oi) => {
                    const active = answers[question.id] === oi;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: oi }))}
                        className={`rounded-xl border p-3 text-left font-sans text-[0.93rem] leading-snug transition-all duration-200 ${
                          active
                            ? "border-primary bg-primary/10 font-semibold text-primary shadow-[var(--shadow-soft)]"
                            : "border-border bg-background hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-border p-5">
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={answered < QUESTIONS.length}
              className="rounded-xl px-5 py-3 font-sans text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 enabled:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
              style={{ background: "var(--gradient-primary)" }}
            >
              Show my best-fit course
            </button>
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
              className="rounded-xl border border-border px-5 py-3 font-sans text-sm font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Reset
            </button>
            {answered < QUESTIONS.length ? (
              <p className="font-sans text-xs text-muted-foreground">
                Answer all {QUESTIONS.length} questions to unlock your recommendation.
              </p>
            ) : null}
          </div>

          {submitted && top ? (
            <div className="border-t border-border p-5 sm:p-7" style={{ background: "var(--gradient-subtle, transparent)" }}>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Your best-fit recommendation
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight">{top.course.name}</h3>
              <p className="mt-1 font-sans text-sm font-semibold text-muted-foreground">{top.course.band}</p>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    Why this fits you
                  </p>
                  <p className="mt-2 text-[1rem] leading-relaxed">{top.course.value}</p>

                  <p className="mt-5 font-sans text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    Placement &amp; support you should expect
                  </p>
                  <p className="mt-2 text-[1rem] leading-relaxed">{top.course.support}</p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-4">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    Modules that matter for your answers
                  </p>
                  <ul className="mt-3 space-y-2">
                    {top.course.modules.map((m) => (
                      <li key={m} className="flex gap-2 font-sans text-[0.92rem] leading-snug">
                        <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={top.course.cta.href}
                target={top.course.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={top.course.cta.href.startsWith("http") ? "noopener noreferrer nofollow" : undefined}
                className="mt-5 inline-flex rounded-xl px-5 py-3 font-sans text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--gradient-primary)" }}
              >
                {top.course.cta.label} →
              </a>

              {runnersUp.length ? (
                <div className="mt-6">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    Also worth shortlisting
                  </p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {runnersUp.map(({ course, score }) => (
                      <div key={course.key} className="rounded-2xl border border-border bg-card p-4">
                        <p className="font-display text-[1rem] font-bold tracking-tight">{course.name}</p>
                        <p className="mt-1 font-sans text-xs text-muted-foreground">{course.band}</p>
                        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${(score / maxScore) * 100}%`, background: "var(--gradient-primary)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <p className="mt-6 font-sans text-xs leading-relaxed text-muted-foreground">
                This quiz is an editorial decision aid, not financial advice or a guarantee of any outcome.
                Fees, curricula and support scopes change — confirm everything in writing on the official
                course page before you pay.
              </p>
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
