import type { ReactNode } from "react";
import { Cite, VerifiedOn } from "./citations";
import { H3, Note, NumberCard, Pull, Reveal, Section, StatTile } from "./article-kit";

/* ---------- small local blocks ---------- */

function CardGrid({ children }: { children: ReactNode }) {
  return <div className="my-6 grid gap-4 sm:grid-cols-2">{children}</div>;
}

function MiniCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
        <p className="font-display text-[1.02rem] font-bold leading-snug tracking-tight text-primary">
          {title}
        </p>
        <p className="mt-2 text-[0.99rem] leading-relaxed">{children}</p>
      </div>
    </Reveal>
  );
}

function Faq({ q, children }: { q: string; children: ReactNode }) {
  return (
    <Reveal>
      <details className="group card-lift rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-[1.03rem] font-bold leading-snug tracking-tight">
          {q}
          <span
            aria-hidden
            className="mt-0.5 shrink-0 font-sans text-lg font-bold text-primary transition-transform duration-300 group-open:rotate-45"
          >
            +
          </span>
        </summary>
        <div className="mt-3 text-[1rem] leading-relaxed text-muted-foreground">{children}</div>
      </details>
    </Reveal>
  );
}

const priceBands = [
  {
    band: "₹0",
    lives: "Coursera audits, Fast.ai, Hugging Face, Kaggle Learn, NPTEL",
    buys: "World-class content",
    not: "Structure, feedback, completion, conversion",
  },
  {
    band: "₹500–₹15K",
    lives: "Udemy, PW Skills base, GUVI entry, Coursera India subscriptions",
    buys: "Structured content, community, entry projects",
    not: "Mentorship, code review, career machinery",
  },
  {
    band: "₹15K–₹1.2L",
    lives: "LogicMojo, GUVI/PW higher tiers, Intellipaat lower variants, mid-tier bootcamps",
    buys: "Live delivery, mentorship, code review, real project depth — the capability band [Editorial]",
    not: "University credentials, big placement operations",
  },
  {
    band: "₹1.2L–₹2.5L",
    lives: "upGrad, Great Learning, Simplilearn, Intellipaat premium",
    buys: "Academic/corporate credentials, career services, operational polish",
    not: "Frontier 2026 technical depth per rupee",
  },
  {
    band: "₹2.5L+",
    lives: "Scaler, IIT/IIM executive programs",
    buys: "Placement infrastructure, elite branding, alumni networks",
    not: "A higher capability ceiling than the band below it",
  },
];

/* ---------- sections ---------- */

export function ClosingSections() {
  return (
    <>
      {/* ---------------- who should NOT ---------------- */}
      <Section id="who-should-not" title="Who Should NOT Buy an Expensive AI Course">
        <div className="article-body">
          <p>
            Just as honestly — several kinds of readers should keep their money, at least for now:
          </p>
        </div>

        <CardGrid>
          <MiniCard title="The genuinely self-directed">
            If you’ve finished self-paced courses before, ship side projects without deadlines, and can
            debug alone at midnight without spiralling — the 2026 free stack (DeepLearning.AI audits →
            Fast.ai → Hugging Face courses → Kaggle) plus self-built portfolio projects is a legitimate,
            complete path. For you, a ₹1L+ fee buys convenience, not capability.
          </MiniCard>
          <MiniCard title="Anyone still testing whether AI is for them">
            Curiosity does not need a ₹1,50,000 answer. Spend ₹0–₹10,000 first — a Coursera audit, PW
            Skills’ base tier, GUVI’s entry track — and let three months of actual behaviour tell you
            whether to invest seriously. The most expensive course is the one that proves you weren’t
            interested.
          </MiniCard>
          <MiniCard title="People whose employer will fund a program">
            If your company reimburses L&amp;D, exhaust that route before self-funding. An employer-funded
            Simplilearn or vendor certification at ₹0-to-you can precede a self-funded capability program
            later — sequencing matters.
          </MiniCard>
          <MiniCard title="Anyone who can’t say what the extra ₹1L–₹2L buys">
            If you cannot complete the sentence “I’m paying the premium specifically for ___” with{" "}
            <em>placement infrastructure</em>, <em>a university credential</em> or{" "}
            <em>a named delivery feature I need</em> — you’re paying it for reassurance. Reassurance is the
            most overpriced product in EdTech.
          </MiniCard>
          <MiniCard title="Anyone for whom the EMI would cause real stress">
            A 24-month EMI on an abandoned course is the most common financial regret in Indian EdTech, and
            financial stress is itself a leading cause of abandonment — a vicious loop. If ₹1.5L is 3–6
            months of your take-home pay, start cheaper, finish something, and upgrade from strength.
          </MiniCard>
          <MiniCard title="Students with more time than money">
            Your time is the one resource that outcompetes fees. Free foundations + a budget structured
            program + relentless self-built projects beats a premium program you strained to afford.
          </MiniCard>
          <MiniCard title="People wanting AI literacy, not AI engineering">
            Managers, PMs and domain professionals who need to scope and lead AI work — not build it — are
            over-served by deep engineering programs. A short applied track and disciplined tool use gets
            you there for under ₹15,000.
          </MiniCard>
        </CardGrid>
      </Section>

      {/* ---------------- online vs offline ---------------- */}
      <Section
        id="online-vs-offline"
        title="Online vs Offline AI Courses: Where Does Your Money Go Further in 2026?"
      >
        <div className="article-body">
          <p>
            This one has quietly resolved itself.{" "}
            <strong>
              In 2026, online-first is not the budget option in Indian AI education — it is the default,
            </strong>{" "}
            and for most learners the better-value one.
          </p>
          <p>
            <strong>What offline used to buy</strong> — enforced attendance, peers in the room, a teacher
            who notices you’re lost — good online cohorts now replicate deliberately: live IST classes,
            cohort accountability, mentor channels, human code review, attendance tracking. Meanwhile
            offline retains its old costs: commute hours (often 5–10 a week in metro traffic — hours that
            could be project time), city-bound access, batch rigidity, and classroom infrastructure you’re
            paying for whether or not it helps you learn. Classroom AI programs at general IT institutes
            still run roughly ₹40,000–₹1,00,000 and advanced offline institutes ₹85,000–₹2,00,000{" "}
            <VerifiedOn id="offline-fees" />, frequently without GPU-enabled machines — you end up on Colab
            anyway, sitting in a rented room.
          </p>
        </div>

        <Reveal>
          <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatTile big="5–10 hrs" small="weekly commute lost to offline batches" />
            <StatTile big="₹40K–₹2L" small="typical offline classroom fee band" />
            <StatTile big="30–50%" small="usual online price advantage" />
            <StatTile big="0" small="geography constraints online" />
          </div>
        </Reveal>

        <div className="article-body">
          <p>
            <strong>Where offline (or hybrid) still genuinely wins:</strong> executive programs whose campus
            immersions exist for <em>networking</em> (IIM/IISc-style cohorts, where the peer group is the
            product); learners who know from experience that physical routine is the only structure that
            works for them; and lab-heavy niches like robotics. Those are real, and narrow.
          </p>
        </div>

        <Note tone="good" label="Value-for-money verdict">
          For the AI/ML/GenAI skill stack specifically, a well-run live <em>online</em> cohort delivers
          everything pedagogically important about offline — minus the commute, minus the geography, usually
          minus 30–50% of the price. Every rupee of the difference is better spent on months of cloud
          credits, a better program tier, or simply kept. The one trap to avoid is buying <em>recorded</em>{" "}
          online while believing you bought <em>live</em> online — the delivery-quality questions in the
          checklist below exist for exactly that.
        </Note>
      </Section>

      {/* ---------------- price bands ---------------- */}
      <Section
        id="expensive-vs-affordable"
        title="Expensive vs Affordable AI Courses: What the Extra Money Actually Buys"
      >
        <div className="article-body">
          <p>
            Lay the market out by price band and the pattern becomes unmistakable — each band below is
            built from the footnoted provider fees in the table above, mapped against what that money
            reliably delivers <VerifiedOn id="price-bands" />:
          </p>
        </div>

        <div className="my-7 space-y-4">
          {priceBands.map((b, i) => (
            <Reveal key={b.band} delay={i * 60}>
              <div className="card-lift overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <div
                  aria-hidden
                  className="h-1 w-full"
                  style={{
                    background: "var(--gradient-primary)",
                    opacity: 0.35 + i * 0.16,
                  }}
                />
                <div className="grid gap-4 p-5 sm:grid-cols-[9rem_1fr]">
                  <div>
                    <p className="font-display text-xl font-extrabold tracking-tight text-primary">
                      {b.band}
                    </p>
                    <p className="mt-1 font-sans text-[0.8rem] leading-snug text-muted-foreground">
                      {b.lives}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-verified/30 bg-verified/5 p-3">
                      <p className="font-sans text-[0.66rem] font-bold uppercase tracking-[0.12em] text-verified">
                        What the money buys
                      </p>
                      <p className="mt-1 text-[0.94rem] leading-relaxed">{b.buys}</p>
                    </div>
                    <div className="rounded-xl border border-claim/30 bg-claim/5 p-3">
                      <p className="font-sans text-[0.66rem] font-bold uppercase tracking-[0.12em] text-claim">
                        What it usually doesn’t
                      </p>
                      <p className="mt-1 text-[0.94rem] leading-relaxed">{b.not}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="article-body">
          <p>Three conclusions worth internalising:</p>
        </div>
        <div className="my-6 space-y-4">
          <NumberCard n={1} title="Capability plateaus around the mid-band. [Editorial]">
            Past roughly ₹1–1.2L, additional rupees stop buying additional technical depth and start buying
            brand, credentials or placement operations. Those are legitimate purchases — but they are{" "}
            <em>different products</em>, and the market’s core trick is letting you believe a higher price
            means “more of everything.”
          </NumberCard>
          <NumberCard n={2} title="Below the mid-band, you trade money for self-supplied structure.">
            The ₹5K–₹15K tier plus ferocious self-discipline genuinely works — for the minority who have
            ferocious self-discipline. Priced honestly, the mid-band’s premium over the budget tier is mostly
            the cost of humans: instructors who are live, mentors who answer, reviewers who read your code.
          </NumberCard>
          <NumberCard n={3} title="Your scarcest resource is probably not money.">
            For a working professional, it’s the 8–15 weekly hours you’ll spend for months. A course ₹40,000
            cheaper that teaches a 2023 stack doesn’t save you money — it burns the same hours and returns a
            weaker outcome. Price the hours, not just the fee.
          </NumberCard>
        </div>
      </Section>

      {/* ---------------- hidden costs ---------------- */}
      <Section id="hidden-costs" title="Hidden Costs to Check Before You Enroll">
        <div className="article-body">
          <p>
            The headline fee is the beginning of the bill, not the end of it. Before signing anything, price
            these — in writing:
          </p>
        </div>

        <div className="my-6 space-y-3">
          {[
            [
              "GST",
              <>
                Many quoted fees exclude 18% GST; on a ₹2,00,000 program that’s ₹36,000 appearing at
                checkout <Cite id="gst-emi" />. Ask whether every number you’ve been quoted is
                GST-inclusive.
              </>,
            ],
            [
              "EMI interest and processing fees",
              "“EMI available” often means a third-party loan with interest and processing charges. Ask for the total repayable amount, not the monthly figure.",
            ],
            [
              "The “no-cost EMI” fine print",
              "No-cost EMI is rarely free money — the interest is typically absorbed by forfeiting an upfront-payment discount, or built into the sticker price, and processing fees plus GST-on-interest can still apply. Compare the one-shot price against the EMI total before believing the “no-cost.”",
            ],
            [
              "Whether the EMI is a bank loan",
              "The single most important question on this list: if you stop attending, does the EMI stop? With lender-financed EMIs the answer is no — the loan is between you and the bank, and it continues regardless of course status. Get the lender’s name and terms before signing.",
            ],
            [
              "The refund window vs the course’s real start",
              "A 7-day refund window that expires during “orientation week” — before real classes begin — is a refund policy in name only. Get the exact cut-off date and conditions in writing.",
            ],
            [
              "Cloud and API credits",
              "GenAI modules consume LLM API calls and sometimes GPU time. Some programs include credits; others quietly assume ₹500–₹3,000/month from your pocket during those modules. Ask.",
            ],
            [
              "Exam and certification vouchers",
              "University- and vendor-affiliated programs sometimes bill certification exams or “verification” separately.",
            ],
            [
              "Add-on modules and support tiers",
              "The advertised price may be the stripped tier; placement support, extra mentorship or “pro” content can be paid unlocks. Get the inclusion list for your price, itemised.",
            ],
            [
              "Deferral and re-enrollment fees",
              "Life happens across a 6–15 month program. What does pausing cost? What does joining the next batch cost?",
            ],
            [
              "Subscription creep (MOOCs)",
              "A ₹1,700/month plan is cheap for three focused months and expensive across eleven distracted ones. Set an end date before you set a start date.",
            ],
            [
              "Opportunity cost",
              "300–500 hours at even a modest valuation of your time is the largest line item on this list. It’s also the best argument for choosing the course you’ll actually finish.",
            ],
          ].map(([title, body], i) => (
            <NumberCard key={title as string} n={i + 1} title={title as string}>
              {body}
            </NumberCard>
          ))}
        </div>

        <Pull>
          <strong>The one-line defence:</strong> never pay on the sales call itself, get every inclusion and
          the refund policy in writing, and treat manufactured urgency — “price rises tonight” — as
          information about the seller, not the offer.
        </Pull>
      </Section>

      {/* ---------------- ROI ---------------- */}
      <Section
        id="roi"
        title="How to Calculate AI Course ROI (Including the Scenario Nobody Shows You)"
      >
        <div className="article-body">
          <p>
            Most “is it worth it” articles wave at ROI. Here is the actual arithmetic — with placeholders
            where <em>your</em> numbers belong, because publishing invented salary figures is exactly the
            practice this page exists to counter.
          </p>
        </div>

        <Reveal>
          <div
            className="my-6 overflow-hidden rounded-3xl border border-primary/25 p-6 shadow-[var(--shadow-soft)] sm:p-8"
            style={{ background: "var(--gradient-surface)" }}
          >
            <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-primary">
              The formula
            </p>
            <p className="mt-3 font-display text-[1.08rem] font-bold leading-relaxed tracking-tight">
              24-month ROI = (realistic salary delta over 24 months × probability you achieve it) − (fee +
              GST + EMI interest + hidden costs + the value of ~300–500 hours of your time)
            </p>
            <div className="mt-5 border-t border-primary/20 pt-5">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-primary">
                The number nobody computes
              </p>
              <p className="mt-3 font-display text-[1.08rem] font-bold leading-relaxed tracking-tight">
                Expected cost of a course = total fee ÷ probability you finish it
              </p>
              <p className="mt-3 text-[1rem] leading-relaxed">
                A ₹30,000 course you have a 30% chance of finishing has an expected cost of{" "}
                <strong>₹1,00,000</strong>. A ₹80,000 course you have a 90% chance of finishing: about{" "}
                <strong>₹89,000</strong>. Completion probability quietly dominates the entire calculation —
                which is why delivery format matters more than discount size.
              </p>
            </div>
          </div>
        </Reveal>

        <H3>Three scenarios worth running honestly</H3>
        <div className="article-body">
          <p>
            All figures are placeholders — substitute your own before deciding; nothing here is a salary
            claim or promise.
          </p>
        </div>

        <div className="my-6 grid gap-4 sm:grid-cols-3">
          {[
            [
              "Scenario A",
              "The working engineer",
              "Fee ₹XX,XXX all-in; completes in ~7 months; builds a defensible portfolio; moves into an AI-adjacent role within [X] months at a delta of ₹[YOUR ESTIMATE] LPA. Payback = total cost ÷ monthly delta. For most realistic inputs this is measured in months, conditional on completion and portfolio quality — the certificate contributes almost nothing by itself.",
              "good",
            ],
            [
              "Scenario B",
              "The non-tech switcher",
              "Fee ₹X,XX,XXX; longer runway; higher variance; the credential genuinely helps at HR screening even as the portfolio decides technical rounds. Run the numbers with a longer payback horizon and a lower probability than marketing implies — real, but slower and harder than any brochure admits.",
              "info",
            ],
            [
              "Scenario C",
              "The dropout",
              "Enrolls at ₹2,00,000 on a 24-month lender EMI; stops attending in month three. ROI is strongly negative: full fee owed, interest accruing, zero capability delta, and reduced appetite to try again. This is the most common scenario in premium Indian EdTech, and the one no comparison page models.",
              "warn",
            ],
          ].map(([tag, title, body, tone]) => (
            <Reveal key={tag as string}>
              <div
                className={`card-lift h-full rounded-2xl border p-5 shadow-[var(--shadow-soft)] ${
                  tone === "warn"
                    ? "border-claim/40 bg-claim/5"
                    : tone === "good"
                      ? "border-verified/40 bg-verified/5"
                      : "border-border bg-card"
                }`}
              >
                <p className="font-sans text-[0.66rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {tag}
                </p>
                <p className="mt-1 font-display text-[1.02rem] font-bold tracking-tight">{title}</p>
                <p className="mt-2 text-[0.95rem] leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Note tone="info" label="The three variables that actually move ROI">
          In order: <strong>completion</strong> (most of the variance), <strong>portfolio quality</strong>{" "}
          (what you can show and defend), and <strong>application effort after the course</strong> (courses
          don’t get jobs; applications, referrals and interviews do). The course you choose is roughly 40% of
          your outcome. What you build during it, and what you do in the three months after it, is the other
          60%. Any page that tells you otherwise is selling something.
        </Note>
      </Section>

      {/* ---------------- mistakes ---------------- */}
      <Section
        id="mistakes"
        title="8 Common Mistakes When Choosing an AI Course (That Cost Real Money)"
      >
        <div className="my-6 space-y-3">
          {[
            [
              "Using price as a quality signal — in either direction",
              "“₹3L must mean it’s serious” and “₹5K must mean it’s junk” are both wrong in this market, and both expensive.",
            ],
            [
              "Buying the logo instead of the delivery",
              "University and IIT tags describe certification arrangements, not who teaches your Tuesday batch. Ask sales to name your batch’s instructor, then check that person’s LinkedIn. Interviewers, meanwhile, skip the certificate and ask why your model overfits.",
            ],
            [
              "Ignoring format fit",
              "A brilliant self-paced course is worthless to someone who needs cohort accountability, and a rigid live schedule is worthless to someone on rotating shifts. Match the format to your actual life, not your aspirational one.",
            ],
            [
              "Trusting “live” without testing it",
              "The most common misrepresentation in this market is recordings-with-a-chat-moderator sold as live classes. Ask to observe a real scheduled class — not a demo session — before paying.",
            ],
            [
              "Accepting placement claims without denominators",
              "“95% placed” of whom? Ask: what percentage of enrolled (not “eligible”) learners, over what window, at what median outcome, in AI roles specifically — and ask to speak with two recent alumni the provider didn’t hand-pick.",
            ],
            [
              "Not checking the curriculum’s last-updated date",
              "In AI, undated means outdated. A 2026 syllabus without production RAG, fine-tuning, agents or MLOps is a 2023 course wearing a new label — and you’ll discover this in a screening round about chunking and re-ranking.",
            ],
            [
              "Deciding on the sales call",
              "Urgency is a conversion tactic, not a fact about seat availability. Every legitimate discount survives 48 hours of thinking. Get everything in writing; never pay on the same call.",
            ],
            [
              "Enrolling before blocking the hours",
              "The cheapest possible test of whether you’ll finish a 10-hour-a-week course: block 10 hours a week for two weeks before enrolling and spend them on free material. If the hours didn’t happen at ₹0, they won’t happen at ₹1,50,000.",
            ],
          ].map(([title, body], i) => (
            <NumberCard key={title as string} n={i + 1} title={title as string}>
              {body}
            </NumberCard>
          ))}
        </div>
      </Section>

      {/* ---------------- certificates ---------------- */}
      <Section id="certificates" title="Are AI Certificates Actually Worth Paying For in 2026?">
        <div className="article-body">
          <p>
            The uncomfortable, useful answer:{" "}
            <strong>
              the certificate itself is the least valuable thing a good course produces — and occasionally
              the only valuable thing a bad course produces.
            </strong>
          </p>
        </div>

        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="card-lift h-full rounded-2xl border border-verified/40 bg-verified/5 p-5">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-verified">
                Where certificates genuinely matter
              </p>
              <ul className="mt-3 space-y-2 text-[0.98rem] leading-relaxed">
                <li>HR screening filters at large services companies and enterprises</li>
                <li>Internal promotions and L&amp;D frameworks that literally check a box</li>
                <li>Employer-funded upskilling, where the certificate is the deliverable</li>
                <li>Further-study or visa-adjacent paths where formal academic association counts</li>
              </ul>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                If that’s your situation, the credential premium (upGrad, Great Learning, Simplilearn,
                vendor certifications) is a rational purchase — buy it knowingly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="card-lift h-full rounded-2xl border border-claim/40 bg-claim/5 p-5">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-claim">
                Where certificates barely matter
              </p>
              <p className="mt-3 text-[0.98rem] leading-relaxed">
                Technical AI hiring. Product companies, GCC engineering teams and AI-native startups test
                what you can build and defend — your GitHub, your deployed projects, your ability to explain
                why you chose recall over accuracy or how you’d cut RAG latency. In those rooms a
                certificate is, at best, a conversation starter; the portfolio is the conversation.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="article-body">
          <p>
            <strong>The resolution is simpler than the debate:</strong> pay for the <em>learning system</em>{" "}
            — the sequence, mentorship, code review and projects — and treat the certificate as the receipt.
            If a course’s strongest selling point is the paper, that is the tell. If the paper happens to
            come attached to deep capability-building (as it should), you’ve lost nothing by also holding
            it.
          </p>
          <p>
            One caution in each direction: don’t pay a ₹1L+ <em>credential premium</em> believing it buys
            capability — and don’t dismiss credentials entirely if your specific path runs through an HR
            filter that reads them. Know which door you’re trying to open; then pay for that door’s key.
          </p>
        </div>
      </Section>

      {/* ---------------- final verdict ---------------- */}
      <Section
        id="final-verdict"
        title="Final Verdict: Which AI Course Is Actually Worth the Money in 2026?"
      >
        <div className="article-body">
          <p>
            After scoring 10 programs across curriculum depth, projects, mentorship, total cost, career
            support and completion likelihood, the honest summary is that{" "}
            <strong>“worth the money” resolves into four answers, not one:</strong>
          </p>
        </div>

        <div className="my-6 space-y-4">
          {[
            [
              "If you want maximum capability per rupee, in a format you’ll finish",
              "A full 2026 stack (production RAG, fine-tuning, agents, MCP, MLOps), live IST mentorship, human code review and a deployed-portfolio output at mid-band pricing — the LogicMojo AI & ML Course was the strongest value-for-money result in this comparison (9.1/10). That conclusion comes from the framework, not the byline: re-weight the pillars toward credentials or placement operations and a different name wins, which is exactly why the weights are published.",
            ],
            [
              "If your discipline is proven and your budget is ₹0",
              "DeepLearning.AI (audit) plus Hugging Face’s free courses and self-built projects is a legitimate, complete path, and at 2026’s India-market Coursera pricing even the paid certificates are nearly incidental. Free isn’t a compromise for the self-directed; it’s the rational choice.",
            ],
            [
              "If you’re specifically buying placement infrastructure or a credential",
              "Go in with open eyes and the right vendor: Scaler for the placement operation (if you can fund ₹3L+ and 15–20 hours a week for a year-plus), upGrad (IIIT-B) or Great Learning (UT Austin) for the university-linked certificate, Simplilearn if your employer is paying. Each is a fair purchase of a specific thing; none is a shortcut to more capability than the mid-band delivers.",
            ],
            [
              "If money binds hard right now",
              "PW Skills or GUVI is the lowest-risk structured start in the country, with the explicit understanding that a second, deeper investment follows once foundations are real.",
            ],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="card-lift rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] sm:p-6">
                <p className="font-display text-[1.05rem] font-bold leading-snug tracking-tight text-primary">
                  {title}
                </p>
                <p className="mt-2 text-[1rem] leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Pull>
          The finding that outranks every ranking: <strong>completion and portfolio</strong> determine your
          outcome far more than course choice — but <strong>course choice heavily determines completion</strong>.
          That is the entire case for weighting delivery quality and finishing machinery the way this page
          does.
        </Pull>

        <H3>Your concrete next step, whichever direction you lean</H3>
        <div className="my-5 grid gap-3 sm:grid-cols-3">
          {[
            [
              "Mark the syllabus",
              "Take your shortlisted course’s syllabus and mark which 2026 topics it covers hands-on: RAG in production, fine-tuning, agents, MLOps.",
            ],
            [
              "Ask the delivery questions",
              "Real class observation, named instructor, doubt-resolution SLA, code review, refund window — all in writing.",
            ],
            [
              "Block the hours first",
              "Block your weekly hours for two weeks before paying a rupee. If the hours don’t happen free, they won’t happen paid.",
            ],
          ].map(([t, b], i) => (
            <Reveal key={t} delay={i * 60}>
              <div className="card-lift h-full rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl font-display text-sm font-extrabold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {i + 1}
                </span>
                <p className="mt-3 font-display text-[1rem] font-bold tracking-tight">{t}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted-foreground">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="article-body">
          <p>
            Do those three things and you will almost certainly spend your money well — wherever you spend
            it.
          </p>
        </div>

        <Reveal>
          <div
            className="my-8 overflow-hidden rounded-3xl border border-primary/25 p-6 text-center shadow-[var(--shadow-soft)] sm:p-9"
            style={{ background: "var(--gradient-surface)" }}
          >
            <p className="font-display text-[1.25rem] font-extrabold leading-snug tracking-tight">
              Explore LogicMojo’s AI &amp; ML Course
            </p>
            <p className="mx-auto mt-2 max-w-xl text-[1rem] leading-relaxed text-muted-foreground">
              Full curriculum, live batch schedule, project portfolio and current fees.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-bold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)" }}
            >
              View the course details <span aria-hidden>→</span>
            </a>
            <p className="mt-3 font-sans text-xs text-muted-foreground">[INSERT LINK]</p>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- FAQs ---------------- */}
      <Section id="faqs" title="Frequently Asked Questions">
        <div className="mt-6 space-y-3">
          <Faq q="Which AI course is actually worth the money in India in 2026?">
            For most working learners seeking real capability, our comparison scored the{" "}
            <strong>LogicMojo AI &amp; ML Course</strong> highest on value for money — full 2026 curriculum
            depth, live mentorship and code review at mid-band pricing. But “worth it” depends on what you’re
            buying: <strong>DeepLearning.AI</strong> wins at ₹0 for the self-directed,{" "}
            <strong>PW Skills/GUVI</strong> for the tightest budgets, <strong>Scaler</strong> if placement
            infrastructure is the purchase, and <strong>upGrad/Great Learning</strong> if a university
            credential is. The full framework above lets you re-rank for your own weights.
          </Faq>
          <Faq q="How much does a good AI course cost in India in 2026?">
            The market spans ₹0 (audited MOOCs) to ₹4,00,000+. Structured entry programs run ~₹5,000–₹30,000;
            the mid-band where serious capability-building lives (live delivery, mentorship, code review,
            real projects) runs roughly ₹40,000–₹1,20,000; university-credentialed programs
            ~₹1,50,000–₹3,35,000; premium placement-focused bootcamps ~₹3,00,000+. Add GST, EMI interest and
            hidden costs before comparing, and re-verify every figure — fees in this market change monthly
            and are frequently negotiable.
          </Faq>
          <Faq q="Are expensive AI courses better than affordable ones?">
            Not automatically — and past roughly ₹1–1.2L, extra money mostly stops buying technical depth and
            starts buying brand, credentials or placement operations. Those are legitimate but{" "}
            <em>different</em> products. An expensive course is “better” only if the specific thing its
            premium buys is the specific thing you need. Meanwhile some of the deepest AI teaching in
            existence costs nothing, and some ₹2L+ programs still teach a 2023 curriculum. Judge the delivery
            and the syllabus’s 2026 currency, never the sticker.
          </Faq>
          <Faq q="Can I get an AI job with only free courses?">
            Yes — if you are genuinely self-directed. Free foundations (DeepLearning.AI audits, Fast.ai,
            Hugging Face, Kaggle) plus 6–10 self-designed, well-documented portfolio projects is a real path
            people complete. What free cannot supply is structure, code review, doubt resolution and
            interview conversion — and self-paced completion rates are famously low. Honest test: if you’ve
            abandoned two or more self-paced courses before, that pattern is your answer, and a structured
            paid program is the cheaper option in expected terms.
          </Faq>
          <Faq q="How do I calculate the ROI of an AI course before enrolling?">
            Use: <strong>24-month ROI = (realistic salary delta × probability you achieve it) − (fee + GST +
            EMI interest + hidden costs + ~300–500 hours of your time).</strong> Then compute the number most
            people skip: <strong>expected cost = fee ÷ probability you finish</strong> — a ₹30,000 course
            you’re 30% likely to finish effectively costs ₹1,00,000. Use your own salary inputs, not a
            brochure’s, and always model the dropout scenario: fee owed, EMI continuing, zero delta.
            Completion probability dominates everything else in the equation.
          </Faq>
          <Faq q="Do AI course certificates matter to Indian employers in 2026?">
            They matter at HR screening gates, in internal promotion frameworks, and for employer-funded
            L&amp;D — contexts where a recognised university or vendor name literally checks a box. They
            matter very little in technical AI hiring, where product companies, GCCs and startups test what
            you can build and defend: your portfolio, your deployed projects, your reasoning. Pay for the
            learning system and treat the certificate as the receipt. If a course’s main selling point is the
            paper, that’s the tell.
          </Faq>
          <Faq q="Is paying extra for placement assistance worth it?">
            Only if it’s real infrastructure — and only if you’ll finish. Before paying a placement premium,
            ask: what percentage of <em>enrolled</em> (not “eligible”) learners were placed, over what
            window, at what <em>median</em> outcome, in AI roles specifically — and can you speak to two
            recent alumni the provider didn’t select? Scaler’s operation is the most substantial in this
            comparison and prices accordingly. “Placement assistance” that means a resume template and a
            job-board login is worth approximately the template.
          </Faq>
          <Faq q="Are paid AI courses worth it for complete beginners?">
            Often more than for anyone else — beginners benefit most from sequencing, prerequisite onboarding
            and human help — but only in programs genuinely built for them. Check for a real Python-and-maths
            bridge (not a “prerequisites: intermediate Python” line), live doubt resolution, and pacing that
            survives a full-time job. Budget-conscious beginners can start at ₹5,000–₹15,000 (PW Skills,
            GUVI) to confirm commitment, then step up to a deeper program; switchers on a career timeline are
            usually better served going straight to a structured mid-band course with onboarding.
          </Faq>
          <Faq q="Is a GenAI-only course enough in 2026, or do I need full AI/ML?">
            For most learners, full AI/ML with a serious GenAI-and-agents layer is the higher-value buy: it
            opens data science, ML engineering <em>and</em> GenAI roles simultaneously, and interviews still
            test classical foundations (evaluation, feature engineering, transformer intuition) alongside RAG
            design. A GenAI-only sprint makes sense mainly for people who already hold solid ML foundations.
            Beware the inverse trap too — a “2026 AI course” whose GenAI module is one prompting lecture is a
            2023 course in costume.
          </Faq>
          <Faq q="Is “no-cost EMI” on course fees really free?">
            Rarely in the way it sounds. The interest is typically absorbed by forfeiting an upfront-payment
            discount or padded into the sticker price, and processing fees plus GST-on-interest can still
            apply. Compare the total EMI outflow against the one-shot price, ask whether the financing is a
            third-party bank loan, and get the answer to one question in writing:{" "}
            <em>if I stop attending, does the EMI stop?</em> With lender-financed EMIs it does not.
          </Faq>
          <Faq q="What happens to my EMI if I drop out of the course?">
            If the EMI is a bank or NBFC loan — which most course EMIs are — it continues in full regardless
            of your attendance, because the lender paid the provider upfront and your contract is with the
            lender. Dropping out cancels the learning, not the debt. This single mechanic makes the refund
            window, its exact cut-off date, and the lender’s terms the three most important documents to read
            before enrolling — and it is why our scoring weights completion machinery so heavily.
          </Faq>
          <Faq q="What hidden costs should I budget for beyond the course fee?">
            The recurring ones: 18% GST on “excl. tax” quotes; EMI interest and processing fees; cloud/API
            credits during GenAI modules (₹500–₹3,000/month if not included); certification-exam vouchers;
            paid add-on modules or support tiers; deferral and re-enrollment charges; and, on MOOC
            subscriptions, the months you stay subscribed without progressing. Add roughly 10–25% to the
            headline fee as a planning buffer, and get an itemised, GST-inclusive total in writing before
            paying.
          </Faq>
          <Faq q="Why do fees and rankings for AI courses keep changing?">
            Because the field and the market both move monthly: providers reprice around cohort cycles and
            festival offers, curricula get rebuilt as GenAI expectations shift (RAG and agents went from
            differentiators to baseline within about two years), and affiliations and program names get
            renegotiated. That’s why every figure on this page carries a check date or a visible verification
            placeholder, and why the only durable advice is procedural: verify the current fee, syllabus date
            and refund terms on the official page — in writing — immediately before you pay.
          </Faq>
          <Faq q="Is the LogicMojo AI & ML Course worth the money?">
            By this page’s own framework — capability per rupee per hour in a completable format — it scored
            highest of the ten, on the strength of full 2026 curriculum depth, live IST delivery with code
            review, and a deployed-portfolio output at mid-band pricing. It is <em>not</em> the right buy if
            you need a university credential, can’t attend live sessions, want the cheapest possible start,
            or won’t commit 10–15 hours weekly — we’ve said so plainly in the review above. And the
            disclosure stands: this is our course; check the reasoning, compare the syllabus yourself, and
            decide on evidence.
          </Faq>
        </div>

        <Note tone="warn" label="Editorial standing note">
          Fees, curricula, offers and program structures referenced on this page change frequently. Figures
          were sanity-checked in August 2026 [EDITOR: update to final verification date]; always confirm
          current details on each provider’s official page before making a payment decision. This page
          contains no placement guarantees, salary promises or invented statistics — for any provider,
          including LogicMojo — and is reviewed quarterly.
        </Note>
      </Section>
    </>
  );
}
