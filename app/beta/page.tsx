export default function Beta() {
  return (
    <main className="bg-[#F7F9F6] text-[#1F3D2B]">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Join the Let's Go Bird Beta
        </h1>

        <p className="mt-6 text-lg text-[#1F3D2B]/80">
          We're inviting early birders and families to help shape the future of
          nature learning and citizen science.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/survey"
            className="rounded-2xl bg-[#1F3D2B] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Take the Survey
          </a>

          <a
            href="/"
            className="rounded-2xl border border-[#1F3D2B]/20 bg-white px-6 py-3 text-sm font-medium hover:bg-[#1F3D2B]/5"
          >
            Back Home
          </a>
        </div>
      </section>
    </main>
  );
}
