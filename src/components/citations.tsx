import { Reveal, Section } from "@/components/article-kit";

/* ---------------------------------------------------------------
   Inline citation footnotes.

   Every fee or outcome claim on this page carries a superscript
   footnote that links to the References section, where the source
   and the exact date it was verified on are listed.
---------------------------------------------------------------- */

export type SourceKind = "official" | "listings" | "provider" | "independent" | "editorial";

export interface Source {
  /** Short label shown in the References list */
  label: string;
  /** Where the claim can be re-checked */
  url?: string;
  /** Human date the claim was last checked against the source */
  verifiedOn: string;
  kind: SourceKind;
  /** What exactly was checked at this source */
  note: string;
}

export const KIND_LABEL: Record<SourceKind, string> = {
  official: "Official provider page",
  listings: "Public listings / aggregated pricing",
  provider: "Provider-reported (unverified)",
  independent: "Independent / third-party",
  editorial: "Author's editorial estimate",
};

/** Ordered registry — footnote numbers follow this order. */
export const SOURCES = {
  "logicmojo-fee": {
    label: "LogicMojo — AI & ML Course, official course & pricing page",
    url: "https://logicmojo.com",
    verifiedOn: "27 August 2026",
    kind: "official",
    note: "Fee band, EMI availability, duration and cohort format. Fees are quoted per intake — re-confirm on the official page before paying.",
  },
  "logicmojo-outcomes": {
    label: "LogicMojo — learner success stories",
    url: "https://logicmojo.com/success-story",
    verifiedOn: "27 August 2026",
    kind: "provider",
    note: "Named learner outcomes published by the provider. Treated as provider-reported: individual stories are checkable, aggregate placement rates are not published and are therefore not quoted anywhere on this page.",
  },
  "coursera-fee": {
    label: "Coursera — DeepLearning.AI specializations and India subscription pricing",
    url: "https://www.coursera.org/",
    verifiedOn: "27 August 2026",
    kind: "official",
    note: "Audit-free access, monthly India pricing band and annual Coursera Plus offer range. Subscription pricing is regional and promotional; re-check at checkout.",
  },
  "ibm-fee": {
    label: "Coursera — IBM AI Engineering Professional Certificate",
    url: "https://www.coursera.org/professional-certificates/ai-engineer",
    verifiedOn: "27 August 2026",
    kind: "official",
    note: "Course list, capstone structure and the fact that access runs on the same Coursera subscription as source [3].",
  },
  "pwskills-fee": {
    label: "PW Skills — Data Science with Generative AI course page",
    url: "https://pwskills.com/",
    verifiedOn: "27 August 2026",
    kind: "official",
    note: "Entry-tier pricing and higher-tier range. Project counts quoted by the provider are labelled as provider claims in the review.",
  },
  "guvi-fee": {
    label: "GUVI — programme catalogue and pricing",
    url: "https://www.guvi.in/",
    verifiedOn: "27 August 2026",
    kind: "official",
    note: "Fee spread varies widely by programme and language track; the band quoted here covers the AI/ML-relevant catalogue only.",
  },
  "intellipaat-fee": {
    label: "Intellipaat — Advanced Certification in AI & ML",
    url: "https://intellipaat.com/",
    verifiedOn: "27 August 2026",
    kind: "listings",
    note: "Fee band and university/institute association. Discounting on counselling calls is common, so the effective price is frequently below the listed one.",
  },
  "scaler-fee": {
    label: "Scaler — Data Science & Machine Learning programme, public listings",
    url: "https://www.scaler.com/data-science-course/",
    verifiedOn: "27 August 2026",
    kind: "listings",
    note: "Fee band widely reported across public listings; exact fees are quoted on counselling calls and scholarships are advertised, so individual quotes vary.",
  },
  "greatlearning-fee": {
    label: "Great Learning — PGP-AIML (UT Austin) public listings",
    url: "https://www.mygreatlearning.com/",
    verifiedOn: "27 August 2026",
    kind: "listings",
    note: "Flagship 12-month variant pricing plus GST. Shorter business-application variants are priced lower and are a different product.",
  },
  "upgrad-fee": {
    label: "upGrad — ML & AI with IIIT-Bangalore, public listings",
    url: "https://www.upgrad.com/",
    verifiedOn: "27 August 2026",
    kind: "listings",
    note: "Fee spread across variants (PG certificate through master's-linked tracks). No-cost-EMI offers are frequent and change the effective price.",
  },
  "simplilearn-fee": {
    label: "Simplilearn — PGP in AI & ML (Purdue / IBM), public listings",
    url: "https://www.simplilearn.com/",
    verifiedOn: "27 August 2026",
    kind: "listings",
    note: "Fee band with EMI and frequent promotional pricing. Corporate/employer-funded pricing differs materially from the retail listing.",
  },
  "gst-emi": {
    label: "Cost-of-credit and GST assumptions used in this guide",
    verifiedOn: "27 August 2026",
    kind: "editorial",
    note: "Total-cost figures add 18% GST where the provider lists fees exclusive of tax, and treat EMI interest as part of the price. Where a provider's tax treatment could not be confirmed, the review says so instead of assuming.",
  },
  "outcome-caution": {
    label: "Outcome and salary claims — evidence standard",
    verifiedOn: "27 August 2026",
    kind: "editorial",
    note: "No placement percentage, average-salary figure, hike multiple or hiring-partner count is stated on this page unless a named source publishes it. Where providers advertise such numbers without a verifiable methodology, the claim is described, not repeated as fact.",
  },
} satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

const ORDER = Object.keys(SOURCES) as SourceId[];
export const citeNumber = (id: SourceId) => ORDER.indexOf(id) + 1;

/* ---------- inline footnote marker ---------- */

export function Cite({ id }: { id: SourceId }) {
  const n = citeNumber(id);
  const s = SOURCES[id];
  return (
    <a
      href={`#ref-${n}`}
      id={`cite-${n}`}
      title={`${s.label} — verified on ${s.verifiedOn}`}
      aria-label={`Footnote ${n}: ${s.label}, verified on ${s.verifiedOn}`}
      className="cite-ref"
    >
      [{n}]
    </a>
  );
}

/** Compact "verified on" stamp for use beside a fee or outcome figure. */
export function VerifiedOn({ id }: { id: SourceId }) {
  const s = SOURCES[id];
  return (
    <span className="verified-stamp">
      Verified on {s.verifiedOn}
      <Cite id={id} />
    </span>
  );
}

/* ---------- references list ---------- */

export function ReferencesSection() {
  return (
    <Section id="references" title="References & Verification Log">
      <div className="article-body">
        <p>
          Every fee and outcome claim on this page is footnoted. Each footnote below names the source, the
          kind of evidence it is, and <strong>the exact date the claim was last checked against it</strong>.
          Course fees in India change with intakes, festival offers and counselling-call discounts, so treat
          any figure older than the verification date as indicative and re-confirm it on the official page
          the day you enrol.
        </p>
      </div>

      <Reveal>
        <ol className="my-6 space-y-4">
          {ORDER.map((id, i) => {
            const s = SOURCES[id];
            return (
              <li
                key={id}
                id={`ref-${i + 1}`}
                className="scroll-mt-28 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="flex gap-3">
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-lg font-display text-xs font-extrabold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="font-sans text-sm font-bold leading-snug">{s.label}</p>
                    <p className="mt-1.5 flex flex-wrap items-center gap-2">
                      <span className="fact-chip fact-chip-verified">Verified on {s.verifiedOn}</span>
                      <span
                        className={`fact-chip ${
                          s.kind === "provider"
                            ? "fact-chip-claim"
                            : s.kind === "editorial"
                              ? "fact-chip-editorial"
                              : "fact-chip-verified"
                        }`}
                      >
                        {KIND_LABEL[s.kind]}
                      </span>
                    </p>
                    {s.url && (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="mt-2 block break-all font-sans text-[0.85rem] font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {s.url}
                      </a>
                    )}
                    <p className="mt-2 text-[0.93rem] leading-relaxed text-muted-foreground">{s.note}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-claim/40 bg-claim/5 p-5">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-claim">
            Verification cadence
          </p>
          <p className="mt-2 text-[0.98rem] leading-relaxed">
            All fee bands on this page were re-checked in a single pass on <strong>27 August 2026</strong>.
            The next scheduled re-verification is <strong>February 2027</strong>, and any figure corrected in
            between will be re-dated in this log rather than quietly edited. Spotted a stale number? Tell us
            and we will re-verify it.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
