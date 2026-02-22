export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pb-12 pt-6 sm:pb-20 sm:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm">
              Citizen science • Gamified learning • Conservation impact
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Rediscover nature,
              <br className="hidden sm:block" /> one bird at a time.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1F3D2B]/80 sm:text-lg">
              Let’s Go Bird turns everyday sightings into streaks, badges, and
              real-world conservation impact—built for birders, families, and
              curious beginners.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/beta"
                className="inline-flex items-center justify-center rounded-2xl bg-[#1F3D2B] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Join the Beta
              </a>

              <a
                href="/survey"
                className="inline-flex items-center justify-center rounded-2xl border border-[#1F3D2B]/20 bg-white px-6 py-3 text-sm font-medium hover:bg-[#1F3D2B]/5 transition"
              >
                Take the Birder Survey
              </a>
            </div>

            <p className="mt-4 text-sm text-[#1F3D2B]/60">
              Early access is limited. We’re prioritizing active birders and
              families who want to learn together.
            </p>
          </div>

          {/* LOGO / VISUAL */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
              <img
                src="/logo-lockup-v2.png"
                alt="Let's Go Bird!"
                className="w-full"
                draggable="false"
              />
              <div className="mt-6 space-y-3 text-sm text-[#1F3D2B]/75">
                <div className="flex gap-3">
                  <span className="font-medium text-[#1F3D2B]">Streaks</span>
                  <span>Build a daily nature habit that sticks.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#1F3D2B]">Badges</span>
                  <span>Earn progress, unlock perks, refer friends.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#1F3D2B]">Impact</span>
                  <span>Turn sightings into conservation momentum.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">
              Identify & Learn
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D2B]/75">
              Log sightings, learn species, and build confidence over time with
              simple, friendly feedback.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">
              Gamified Progress
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D2B]/75">
              Streaks, badges, and small perks keep the experience fun—without
              turning nature into noise.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold tracking-tight">
              Real Conservation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D2B]/75">
              We’re building toward privacy-safe data sharing and community
              initiatives that support habitat and education.
            </p>
          </div>
        </div>

        {/* CTA STRIP */}
        <div className="mt-10 rounded-3xl border border-[#1F3D2B]/15 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Help shape the beta.
              </h2>
              <p className="mt-2 text-sm text-[#1F3D2B]/75">
                Tell us what matters most—ID accuracy, streaks, badges,
                community, or conservation impact.
              </p>
            </div>
            <a
              href="/survey"
              className="inline-flex items-center justify-center rounded-2xl bg-[#1F3D2B] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Take the Survey
            </a>
          </div>
        </div>
      </section>
    </>
  );
}