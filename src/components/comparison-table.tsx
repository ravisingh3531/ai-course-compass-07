import { Reveal, Section, StatTile } from "./article-kit";

interface Row {
  rank: number;
  course: string;
  fee: string;
  duration: string;
  format: string;
  genai: string;
  projects: string;
  mentorship: string;
  career: string;
  vfm: string;
}

const rows: Row[] = [
  {
    rank: 1,
    course: "LogicMojo — AI & ML Course",
    fee: "₹XX,XXX [VERIFY] (mid-band, EMI available)",
    duration: "~6–8 months [VERIFY]",
    format: "Live IST cohort + recordings",
    genai: "Deep — production RAG, fine-tuning, agents, MCP [Editorial]",
    projects: "10+ incl. deployed capstone",
    mentorship: "High — live doubt-solving, 1:1 mentors, human code review",
    career: "Portfolio review + AI interview prep (no guarantees)",
    vfm: "9.1",
  },
  {
    rank: 2,
    course: "DeepLearning.AI (Coursera)",
    fee: "Free to audit; India plans ~₹1,500–₹2,000/mo or ~₹7K–₹14K/yr on offers [Verified — Aug 2026]",
    duration: "3–6 months",
    format: "Fully self-paced",
    genai: "Moderate — spread across short courses",
    projects: "Guided labs",
    mentorship: "None",
    career: "None",
    vfm: "8.8",
  },
  {
    rank: 3,
    course: "PW Skills — Data Science with GenAI",
    fee: "From ~₹4,999; higher tiers to ~₹30K [Verified/VERIFY]",
    duration: "6–8 months",
    format: "Recorded + live sessions (hybrid)",
    genai: "Basic–moderate — LLM basics, LangChain, intro RAG",
    projects: "20+ [Provider claim], entry-level",
    mentorship: "Community-heavy; limited 1:1",
    career: "Entry-level assistance",
    vfm: "8.4",
  },
  {
    rank: 4,
    course: "IBM AI Engineering (Coursera)",
    fee: "Free to audit; via Coursera subscription (see #2)",
    duration: "3–6 months",
    format: "Fully self-paced",
    genai: "Basic–moderate — GenAI/RAG modules [VERIFY list]",
    projects: "6–10 guided labs + capstone",
    mentorship: "None",
    career: "None",
    vfm: "8.2",
  },
  {
    rank: 5,
    course: "GUVI (IIT-M incubated)",
    fee: "~₹10K–₹80K by program [VERIFY]",
    duration: "3–9 months",
    format: "Live + recorded; vernacular",
    genai: "Basic–moderate",
    projects: "4–8 entry–intermediate",
    mentorship: "Partial",
    career: "Regional, entry-role focused",
    vfm: "7.9",
  },
  {
    rank: 6,
    course: "Intellipaat — Adv. Cert. in AI & ML",
    fee: "~₹80K–₹2L [VERIFY affiliation & fee]",
    duration: "6–12 months",
    format: "Hybrid live + self-paced",
    genai: "Moderate — LLMs, intro RAG",
    projects: "6–12 + capstone",
    mentorship: "Partial; varies by batch",
    career: "Job assistance",
    vfm: "7.4",
  },
  {
    rank: 7,
    course: "Scaler — DS & ML Program",
    fee: "~₹3L–₹3.7L widely reported [Verified — public listings, Aug 2026]",
    duration: "12–15 months",
    format: "Fully live cohort",
    genai: "Moderate, growing — RAG now included",
    projects: "5–10+ (CS-flavoured)",
    mentorship: "High — TAs + 1:1 mentors",
    career: "Strongest placement infrastructure",
    vfm: "7.1",
  },
  {
    rank: 8,
    course: "Great Learning — PGP-AIML (UT Austin)",
    fee: "~₹2.4L + GST for the 12-mo variant [Verified — public listings]; variants differ",
    duration: "6–12 months",
    format: "Recorded core + weekend live mentoring",
    genai: "Moderate — applied GenAI module",
    projects: "8–12 mentored + capstone",
    mentorship: "Good — weekend mentor sessions",
    career: "Resume, mocks, e-portfolio review",
    vfm: "6.9",
  },
  {
    rank: 9,
    course: "upGrad — ML & AI (IIIT-Bangalore)",
    fee: "~₹1.5L–₹3.35L by variant [Verified — public listings]",
    duration: "8–13 months",
    format: "Academic online cadence",
    genai: "Basic–moderate — GenAI/MLOps tracks added",
    projects: "8–12 academic + capstone",
    mentorship: "Good — mentors + ticketed doubt support",
    career: "Career services + job board",
    vfm: "6.7",
  },
  {
    rank: 10,
    course: "Simplilearn — PGP AI & ML (Purdue/IBM)",
    fee: "~₹1.5L–₹2.5L [VERIFY]",
    duration: "~11 months",
    format: "Self-paced core + live masterclasses",
    genai: "Basic–moderate",
    projects: "5–10 guided + capstone",
    mentorship: "Limited",
    career: "Career services, job board",
    vfm: "6.4 (≈8 if employer-funded)",
  },
];

function ScoreBadge({ value }: { value: string }) {
  const num = parseFloat(value);
  return (
    <span
      className="inline-flex min-w-[3.1rem] items-center justify-center rounded-full px-2.5 py-1 font-display text-sm font-extrabold text-primary-foreground"
      style={{
        background: num >= 8 ? "var(--gradient-primary)" : "color-mix(in oklab, var(--primary) 72%, white)",
      }}
    >
      {num.toFixed(1)}
    </span>
  );
}

export function ComparisonTable() {
  return (
    <Section
      id="comparison-table"
      title="The 10 AI Courses Compared: Value-for-Money Table (2026)"
    >
      <div className="article-body">
        <p>
          Courses are ordered by <strong>value-for-money score</strong> — not by depth alone, brand alone,
          or price alone. Read the “Fee” column as indicative: most of these are negotiable, several vary by
          variant, and all should be re-confirmed on the official page.
        </p>
      </div>

      <Reveal>
        <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile big="9.1" small="top VFM score" />
          <StatTile big="₹0 – ₹3.7L" small="fee spread across the table" />
          <StatTile big="3–15" small="months of commitment" />
          <StatTile big="6" small="weighted pillars behind each score" />
        </div>
      </Reveal>

      {/* desktop table */}
      <Reveal>
        <div className="my-7 hidden overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] lg:block">
          <table className="w-full min-w-[1080px] border-collapse font-sans text-[0.82rem]">
            <thead>
              <tr className="border-b border-border bg-secondary text-left">
                {[
                  "#",
                  "Course",
                  "Indicative fee (₹)*",
                  "Duration",
                  "Format",
                  "GenAI & agents depth",
                  "Projects",
                  "Mentorship & code review",
                  "Career support",
                  "VFM /10",
                ].map((h) => (
                  <th key={h} className="px-3 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-3.5 [&_td]:align-top [&_td]:leading-relaxed [&_tr]:border-b [&_tr]:border-border last:[&_tr]:border-0">
              {rows.map((r) => (
                <tr key={r.rank} className={r.rank === 1 ? "bg-primary/5" : undefined}>
                  <td className="font-display font-extrabold text-primary">{r.rank}</td>
                  <td className="font-semibold">{r.course}</td>
                  <td>{r.fee}</td>
                  <td className="whitespace-nowrap">{r.duration}</td>
                  <td>{r.format}</td>
                  <td>{r.genai}</td>
                  <td>{r.projects}</td>
                  <td>{r.mentorship}</td>
                  <td>{r.career}</td>
                  <td>
                    <ScoreBadge value={r.vfm} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* mobile cards */}
      <div className="my-7 space-y-4 lg:hidden">
        {rows.map((r) => (
          <Reveal key={r.rank}>
            <div className="card-lift overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-start justify-between gap-3 border-b border-border pb-3">
                <div>
                  <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Rank #{r.rank}
                  </span>
                  <p className="mt-1 font-display text-base font-bold leading-snug tracking-tight">
                    {r.course}
                  </p>
                </div>
                <ScoreBadge value={r.vfm} />
              </div>
              <dl className="mt-3 space-y-2 font-sans text-[0.85rem] leading-relaxed">
                {[
                  ["Fee", r.fee],
                  ["Duration", r.duration],
                  ["Format", r.format],
                  ["GenAI depth", r.genai],
                  ["Projects", r.projects],
                  ["Mentorship", r.mentorship],
                  ["Career support", r.career],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-2">
                    <dt className="font-semibold text-muted-foreground">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="font-sans text-xs italic leading-relaxed text-muted-foreground">
        *Indicative as of August 2026. Fees change frequently, are often negotiable, and may exclude GST.
        [EDITOR: re-verify each fee and record check dates before publishing.]
      </p>

      <div className="article-body">
        <p>
          <strong>How to read this table honestly:</strong> the top of the list is not “the best course” in
          the abstract — it is where a rupee and an hour convert into demonstrable capability most
          efficiently <em>for a typical working Indian learner</em>. Scaler at #7 and upGrad at #9 are not
          weak programs; they are premium purchases of placement infrastructure and academic credentials
          respectively, and they score exactly as well as those purchases deserve under a value-for-money
          lens. If one of those is precisely what you need, your personal ranking will differ — and the
          reviews below tell you when it should.
        </p>
      </div>
    </Section>
  );
}
