import type { ReactNode } from "react";
import { Cite, VerifiedOn } from "./citations";
import { Chip, H3, Note, NumberCard, Reveal, Section, StatTile } from "@/components/article-kit";

/* ------------------------------------------------------------------ */
/*  Small local primitives                                             */
/* ------------------------------------------------------------------ */

function Card({ title, chip, children }: { title: string; chip?: ReactNode; children: ReactNode }) {
  return (
    <Reveal>
      <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-[1.05rem] font-bold leading-snug tracking-tight">{title}</p>
          {chip}
        </div>
        <div className="mt-2 text-[0.99rem] leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}

function EvidenceRow({
  claim,
  status,
  detail,
}: {
  claim: string;
  status: "verified" | "claim" | "editorial" | "verify";
  detail: string;
}) {
  return (
    <tr className="border-t border-border align-top">
      <td className="p-3 font-semibold">{claim}</td>
      <td className="p-3 whitespace-nowrap">
        <Chip kind={status} />
      </td>
      <td className="p-3 text-muted-foreground">{detail}</td>
    </tr>
  );
}

/* ------------------------------------------------------------------ */
/*  1. Experience-based solution / recommendations                      */
/* ------------------------------------------------------------------ */

export function RecommendationSection() {
  return (
    <Section
      id="my-recommendation"
      title="My Experience-Based Solution: My Research-Backed Recommendations"
    >
      <div className="article-body">
        <p>
          After scoring ten programs on the same six pillars, one pattern repeats often enough to be the
          headline finding of this page: <strong>brand premium and learning value are only loosely
          correlated in the Indian AI market in 2026.</strong> The two most expensive programs here do not
          teach materially more than the mid-band specialist ones; what they sell is credential signal and
          placement infrastructure. That is a real product — but it is not the same product as capability,
          and paying ₹3L for the former when you needed the latter is the most common expensive mistake
          readers of this page make.
        </p>
        <p>
          So the recommendation is deliberately narrow. For <strong>beginners and career switchers</strong>{" "}
          who need a foundation before they touch Generative AI, my research-backed pick is the{" "}
          <strong>LogicMojo AI &amp; Machine Learning course</strong> — not because it is the cheapest or
          the most famous, but because it is the option where fee, sequence, live support and job assistance
          line up most tightly with what actually determines outcomes: finishing, building, and being able
          to defend what you built.
        </p>
      </div>

      <Note tone="info" label="Disclosure, stated plainly">
        LogicMojo publishes this page. That is exactly why every claim below is labelled by evidence type,
        why no salary or placement number is invented, and why the limitations section is not decorative.
        Verify curriculum, fee and job-assistance scope directly on the official course page and read the
        learner stories yourself at{" "}
        <a
          className="font-semibold underline underline-offset-4"
          href="https://logicmojo.com/success-story"
          target="_blank"
          rel="noopener noreferrer"
        >
          logicmojo.com/success-story
        </a>{" "}
        <VerifiedOn id="logicmojo-outcomes" />.
      </Note>

      <H3>Why LogicMojo stands out on value for money</H3>
      <div className="my-6 grid gap-4 md:grid-cols-2">
        <Card title="Placement-first learning design">
          The program is sequenced backwards from hiring: every module ends in something that can appear on
          a resume or be defended in an interview, rather than a quiz score. Structured job assistance,
          resume and portfolio review, referral guidance and mock interviews are part of the track, not an
          upsell. <em>Job assistance is not a job guarantee</em> — insist on the current written scope
          before paying, from any provider including this one.
        </Card>
        <Card title="Foundations before Generative AI">
          Beginners and non-tech switchers are taught Python, SQL, statistics and classical ML properly
          before LLMs appear. This ordering matters more than any other curriculum decision: learners who
          skip straight to prompt engineering can demo an app but collapse in the first technical round,
          because they cannot explain evaluation, overfitting, or why their retrieval is returning noise.
        </Card>
        <Card title="A genuinely 2026 GenAI layer">
          Prompt Engineering, LLM fundamentals, embeddings and vector databases, production{" "}
          <strong>RAG</strong>, <strong>LangChain</strong>, <strong>fine-tuning (LoRA/QLoRA)</strong> and{" "}
          <strong>AI Agents</strong> with tool use — the exact stack Indian job descriptions started asking
          for through 2025–2026. Confirm the current module list on the official syllabus page before
          enrolling; curricula in this market are revised frequently.
        </Card>
        <Card title="Live mentorship and doubt-clearing">
          Human feedback on your code is the single hardest thing to source free at quality. Live classes,
          mentor access and scheduled doubt-clearing convert "I watched a video" into "I can defend this
          design decision" — which is what an interviewer is actually testing.
        </Card>
        <Card title="Hands-on projects that become a portfolio">
          Capstones are built to be shown: end-to-end ML pipelines, an NLP system, and a deployed
          RAG/agent application. Two defensible projects beat six tutorial clones every single time in
          screening.
        </Card>
        <Card title="Interview preparation and career guidance">
          Mock interviews, ML/DL question drills, project-defence practice and role-targeting guidance —
          the conversion layer that most mid-band and budget courses simply do not include at the price.
        </Card>
      </div>

      <H3>Evidence table: what is verified vs what is provider-reported</H3>
      <Reveal>
        <div className="my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <table className="w-full min-w-[680px] border-collapse font-sans text-sm">
            <thead>
              <tr className="bg-primary/5 text-left">
                <th className="p-3 font-bold">Claim about LogicMojo</th>
                <th className="p-3 font-bold">Evidence status</th>
                <th className="p-3 font-bold">How to check it yourself</th>
              </tr>
            </thead>
            <tbody>
              <EvidenceRow
                claim="Live, instructor-led cohort format with recordings"
                status="verified"
                detail="Stated on the official course page; checked during our August 2026 review pass. Ask for a sample class recording."
              />
              <EvidenceRow
                claim="Curriculum covers Python/ML foundations through LLMs, RAG, LangChain, fine-tuning and agents"
                status="verified"
                detail="Cross-checked against the published syllabus in August 2026. Request the current module PDF — syllabi are revised often."
              />
              <EvidenceRow
                claim="Structured job assistance, mock interviews and career guidance"
                status="claim"
                detail="Provider-reported programme feature. Ask for the written scope: how many mock interviews, over what period, and what 'assistance' includes."
              />
              <EvidenceRow
                claim="Individual learner transitions and success stories"
                status="claim"
                detail={
                  <>
                    Self-published testimonials at logicmojo.com/success-story{" "}
                    <VerifiedOn id="logicmojo-outcomes" />. Treat as provider-reported; validate
                    independently by searching named alumni on LinkedIn.
                  </>
                }
              />
              <EvidenceRow
                claim="Specific placement percentages, average salary or hiring-partner counts"
                status="verify"
                detail={
                  <>
                    We publish no such figure — for any provider on this page — because none of them are
                    independently audited <Cite id="outcome-caution" />. Ask for a cohort-level, date-stamped
                    report before believing one.
                  </>
                }
              />
              <EvidenceRow
                claim="Best overall value for beginners and career switchers"
                status="editorial"
                detail="Our judgement under the scoring framework in section 2. Re-weight the pillars for your own situation and you may reasonably rank differently."
              />
            </tbody>
          </table>
        </div>
      </Reveal>

      <H3>Mini case pattern (composite, not a real individual)</H3>
      <div className="article-body">
        <p>
          The most common successful path we see described in learner stories across this market is not
          dramatic: a non-tech professional with 8–12 protected hours a week, who completes the foundation
          modules before touching GenAI, ships two defensible projects, and spends the three months after
          the course applying deliberately. The course supplies roughly 40% of that outcome. The portfolio
          and the post-course application effort supply the rest. Any provider — including us — that
          implies otherwise is selling, not teaching.
        </p>
      </div>

      <div className="my-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile big="10" small="Courses scored on identical pillars" />
        <StatTile big="6" small="Weighted value pillars" />
        <StatTile big="0" small="Fabricated salary or placement stats" />
        <StatTile big="Aug 2026" small="Last full verification pass" />
      </div>

      <Note tone="warn" label="Where LogicMojo is not the right buy">
        If you already have strong Python and ML fundamentals and your only bottleneck is interview volume,
        a premium placement-infrastructure program may serve you better. If you want an institute-linked
        academic credential for HR screening, buy the university-linked option instead. And if your budget
        is genuinely under ₹25,000 today, start with a budget or free track, prove you enjoy the work, then
        upgrade. Recommending a course to someone it does not fit destroys value for both sides.
      </Note>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. How I researched & ranked                                        */
/* ------------------------------------------------------------------ */

export function ResearchMethodSection() {
  const criteria: [string, string, string][] = [
    ["Curriculum quality", "15%", "Coherent sequence, current tooling, no 2019 syllabus wearing a 2026 label."],
    ["AI/ML depth", "12%", "Maths intuition, classical ML, deep learning — not just API wrappers."],
    ["GenAI coverage", "12%", "LLMs, prompt engineering, embeddings, RAG, LangChain, fine-tuning, agents."],
    ["Practical projects", "12%", "End-to-end, deployable, defensible in an interview."],
    ["Beginner support", "8%", "Real onboarding for non-tech learners, not a prerequisites disclaimer."],
    ["Mentorship & doubt-clearing", "10%", "Human feedback on your code, at a stated cadence."],
    ["Placement & career assistance", "12%", "Scope in writing; assistance clearly separated from guarantee."],
    ["Affordability & ROI", "12%", "All-in cost including GST, EMI interest and hidden costs, per unit of capability."],
    ["Industry relevance", "7%", "Match to what Indian JDs actually asked for in 2025–2026."],
  ];

  return (
    <Section id="research-method" title="How I Researched & Ranked These 10 AI Courses">
      <div className="article-body">
        <p>
          Every score on this page comes from the same repeatable process, applied identically to all ten
          programs — including our own, which is why our own limitations appear in our own review. If you
          disagree with a weight, change it: the criteria are published precisely so the ranking can be
          audited rather than trusted.
        </p>
      </div>

      <H3>The weighted criteria</H3>
      <Reveal>
        <div className="my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <table className="w-full min-w-[600px] border-collapse font-sans text-sm">
            <thead>
              <tr className="bg-primary/5 text-left">
                <th className="p-3 font-bold">Criterion</th>
                <th className="p-3 font-bold">Weight</th>
                <th className="p-3 font-bold">What earns a high score</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map(([name, weight, why]) => (
                <tr key={name} className="border-t border-border align-top">
                  <td className="p-3 font-semibold">{name}</td>
                  <td className="p-3 whitespace-nowrap font-bold text-primary">{weight}</td>
                  <td className="p-3 text-muted-foreground">{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <H3>Sources we cross-checked</H3>
      <div className="my-6 grid gap-4 md:grid-cols-2">
        <NumberCard n={1} title="Official course pages">
          Fees, GST treatment, EMI terms, duration, syllabus and refund windows, re-checked in August 2026.
          Anything quoted only on a sales call was excluded.
        </NumberCard>
        <NumberCard n={2} title="LinkedIn alumni signals">
          Public profiles listing the program, and whether role changes are visible over time. Directional
          evidence only — never converted into a placement percentage.
        </NumberCard>
        <NumberCard n={3} title="Learner reviews and forums">
          Review aggregators plus Reddit and Quora threads, read for repeated specific complaints (support
          latency, outdated modules, aggressive sales) rather than star averages.
        </NumberCard>
        <NumberCard n={4} title="Independent write-ups">
          Third-party comparisons and reporting, used to corroborate or contradict provider claims — and
          discounted when they were clearly affiliate-driven.
        </NumberCard>
      </div>

      <H3>How every fact on this page is labelled</H3>
      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <Card title="Verified" chip={<Chip kind="verified" />}>
          Confirmed on an official, dated source during our August 2026 pass.
        </Card>
        <Card title="Provider-reported" chip={<Chip kind="claim" />}>
          Stated by the company and not independently auditable — including all testimonials, ours included.
        </Card>
        <Card title="Independently reported" chip={<Chip kind="editorial" />}>
          Sourced from third-party reporting or aggregated learner reviews rather than the provider.
        </Card>
        <Card title="Unavailable" chip={<Chip kind="verify" />}>
          No credible source exists. We leave the gap visible instead of filling it with a plausible number.
        </Card>
      </div>

      <Note tone="good" label="What we refused to publish">
        No placement percentages, no average-salary figures, no hiring-partner counts, no invented learner
        quotes — for any provider on this page. Those four numbers are the most commonly fabricated in
        Indian EdTech marketing, and none of them are independently audited anywhere in this market.
      </Note>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. How to choose + beyond marketing                                 */
/* ------------------------------------------------------------------ */

export function ChoosingSections() {
  const personas: [string, string, string][] = [
    [
      "Complete beginners",
      "Python, SQL, statistics, first ML models",
      "Buy structure and live support above everything. A cheaper course you finish beats a premium one you abandon in week five. Expect 6–9 months at 8–12 hrs/week before you are interview-ready.",
    ],
    [
      "Freshers & final-year students",
      "ML depth + two defensible projects + internships",
      "Your competition is other freshers with identical certificates. The differentiator is a project you can whiteboard end to end. Prioritise mentorship and project review over brand.",
    ],
    [
      "Working software professionals",
      "DL, NLP, LLMs, RAG, agents, deployment",
      "Skip beginner bundles. Buy the GenAI and production layer, and pick the format that survives your work calendar — recordings plus live doubt sessions, not fixed-only classes.",
    ],
    [
      "Analysts & BI professionals",
      "Statistics → ML → automation → LLM tooling",
      "You already have data intuition and SQL. The gap is modelling rigour and engineering. A mid-band structured course usually clears it in 5–7 months.",
    ],
    [
      "Finance professionals",
      "Time-series, risk modelling, LLM document workflows",
      "Domain plus AI is a genuinely scarce combination. Insist on projects using your own domain data; a generic churn-prediction capstone wastes your biggest advantage.",
    ],
    [
      "Career switchers from non-tech",
      "Foundations first, GenAI second, portfolio always",
      "The highest-risk group and the one where completion support pays for itself. Never buy a program that assumes 'intermediate Python' unless you already have it.",
    ],
  ];

  const checks: [string, string][] = [
    [
      "Verify placement claims before you believe them",
      "Ask for a cohort-level, date-stamped report: cohort size, how many were job-seeking, how many were placed, median package, and how 'placed' is defined. A provider that cannot answer in writing does not have the data.",
    ],
    [
      "Separate placement assistance from placement guarantee",
      "Assistance means resume help, mock interviews and referrals. A guarantee is a contractual refund obligation with eligibility conditions — attendance thresholds, assessment scores, application quotas. Read those conditions; most refunds fail on them, not on hiring.",
    ],
    [
      "Detect an outdated curriculum in five minutes",
      "Search the syllabus for RAG, vector databases, LangChain or an equivalent framework, LoRA/QLoRA, evaluation of LLM outputs and agentic tool use. If the GenAI section is one module bolted onto a 2021 data-science course, you are buying the old thing at the new price.",
    ],
    [
      "Spot exaggerated salary claims",
      "'Up to ₹XX LPA' describes an outlier. 'Average CTC' without cohort size, date and job-seeking denominator is unusable. Highest-package marketing tells you nothing about the median learner — which is the only number relevant to you.",
    ],
    [
      "Validate alumni outcomes independently",
      "Search the program name on LinkedIn and look at real profiles: did roles actually change after the listed completion date? Testimonials on a provider's own site — including ours — are marketing until you corroborate them.",
    ],
    [
      "Judge project quality, not project count",
      "'15+ projects' usually means fifteen notebooks. One deployed application with data ingestion, evaluation, monitoring and a README beats all fifteen in an interview. Ask to see a past learner's actual capstone repository.",
    ],
    [
      "Compute the hidden costs",
      "18% GST, EMI interest over 24 months, cloud and API credits, the paid-tool subscriptions the syllabus assumes, and 300–500 hours of your own time. The sticker price is usually 60–75% of the true cost.",
    ],
    [
      "Decide whether the premium is actually buying you something",
      "A ₹3L program is worth it only if you specifically need its placement infrastructure or its university credential. If you need capability, the mid-band specialist courses deliver comparable teaching at a fraction of the all-in cost — and completion probability, not price, dominates your return.",
    ],
  ];

  return (
    <>
      <Section id="how-to-choose" title="How to Choose an AI Course That Is Actually Worth the Money">
        <div className="article-body">
          <p>
            "Worth it" is not a property of a course; it is a relationship between a course and a specific
            learner's starting point, hours, budget and goal. Find your row below, then read the reviews
            with that lens rather than the ranking order.
          </p>
        </div>

        <Reveal>
          <div className="my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <table className="w-full min-w-[720px] border-collapse font-sans text-sm">
              <thead>
                <tr className="bg-primary/5 text-left">
                  <th className="p-3 font-bold">If you are…</th>
                  <th className="p-3 font-bold">What your money should buy</th>
                  <th className="p-3 font-bold">What to prioritise</th>
                </tr>
              </thead>
              <tbody>
                {personas.map(([who, buy, priority]) => (
                  <tr key={who} className="border-t border-border align-top">
                    <td className="p-3 font-semibold">{who}</td>
                    <td className="p-3 text-primary">{buy}</td>
                    <td className="p-3 text-muted-foreground">{priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <H3>The skill stack you should end up owning</H3>
        <div className="my-6 flex flex-wrap gap-2">
          {[
            "Python",
            "SQL",
            "Statistics",
            "Machine Learning",
            "Deep Learning",
            "NLP",
            "LLMs",
            "Prompt Engineering",
            "RAG",
            "Vector databases",
            "LangChain",
            "Fine-tuning (LoRA/QLoRA)",
            "AI Agents",
            "Automation",
            "MLOps basics",
            "Portfolio projects",
            "Interview preparation",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 font-sans text-[0.82rem] font-semibold text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="article-body">
          <p>
            If a program's outcome list does not plausibly cover most of that stack by the end — with
            projects proving it, not modules listing it — then whatever it costs is too much for the
            2026 market.
          </p>
        </div>
      </Section>

      <Section id="beyond-marketing" title="What to Look For Beyond Marketing">
        <div className="article-body">
          <p>
            Every claim in an EdTech brochure is designed to survive a skim and fail a question. Here are
            the eight questions that separate a genuine program from a well-produced funnel — use them on
            every provider on this page, including this one.
          </p>
        </div>
        <div className="my-6 grid gap-4 md:grid-cols-2">
          {checks.map(([title, body], i) => (
            <NumberCard key={title} n={i + 1} title={title}>
              {body}
            </NumberCard>
          ))}
        </div>
        <Note tone="info" label="The one-line test">
          Ask any counsellor: "What exactly do I get, in writing, if I complete everything and still don't
          get interviews?" The quality of that answer predicts the quality of the program better than any
          brochure, ranking or review — including this one.
        </Note>
      </Section>
    </>
  );
}
