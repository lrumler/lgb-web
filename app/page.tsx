export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pb-12 pt-6 sm:pb-20 sm:pt-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm">
              Real-time bird ID · Audio &amp; video · 846 species
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Pocket your phone.
              <br className="hidden sm:block" /> We&apos;ll find the birds.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1F3D2B]/80 sm:text-lg">
              LetsGoBird listens while you walk — identifying species, building
              your life list, rewarding every sighting.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/survey"
                className="inline-flex items-center justify-center rounded-2xl bg-[#1F3D2B] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Join the Waitlist
              </a>
            </div>
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
                  <span className="font-medium text-[#1F3D2B]">Hands-free ID</span>
                  <span>Audio and photo recognition — no screen time required.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#1F3D2B]">Earn as you go</span>
                  <span>XP, streaks, badges, and tier progression.</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-medium text-[#1F3D2B]">Built for everyone</span>
                  <span>Birders, families, and curious beginners.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="pb-10">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-4 text-sm font-semibold text-[#1F3D2B] shadow-sm">
          <span>846 species</span>
          <span className="text-[#1F3D2B]/30">·</span>
          <span>84% audio accuracy</span>
          <span className="text-[#1F3D2B]/30">·</span>
          <span>87% photo accuracy</span>
          <span className="text-[#1F3D2B]/30">·</span>
          <span>beta launching April 2026</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#E7F3EB] px-3 py-2 text-sm font-bold text-[#1F3D2B]">
              FS
            </div>
            <h3 className="text-lg font-semibold tracking-tight">
              Field Session Mode
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D2B]/75">
              Hit record, pocket your phone. A gentle haptic buzz tells you when
              a bird is identified. Review your full session summary after your walk.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#E7F3EB] px-3 py-2 text-sm font-bold text-[#1F3D2B]">
              XP
            </div>
            <h3 className="text-lg font-semibold tracking-tight">
              Earn as You Explore
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D2B]/75">
              XP, streaks, badges, and tier progression from Egg to Soaring.
              Rare birds score bigger. Identify the same bird by sound AND sight
              for a 2× bonus.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#E7F3EB] px-3 py-2 text-sm font-bold text-[#1F3D2B]">
              84%
            </div>
            <h3 className="text-lg font-semibold tracking-tight">
              84% Audio Accuracy
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#1F3D2B]/75">
              Our custom-trained model covers 846 North American species. Built
              from scratch — no licensed weights, no third-party APIs. Yours
              alone in the field.
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
                Early access is limited. We&apos;re prioritizing active birders
                and anyone who wants to make this the birding app they always wanted.
              </p>
            </div>
            <a
              href="/survey"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-[#1F3D2B] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
