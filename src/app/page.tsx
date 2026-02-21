import { SiteShell } from "@/components/SiteShell";
import { ButtonLink, Card } from "@/components/UI";

export default function HomePage() {
  return (
    <SiteShell>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        {/* Hero */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-fg shadow-soft">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Beta forming now • Founding Birders get 30 days Premium at launch
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Let’s Go Bird
              <span className="block text-muted-fg">
                Birding, but it’s a game — and it powers citizen science.
              </span>
            </h1>

            <p className="text-base text-muted-fg">
              Log sightings fast, learn species over time, and stay motivated with streaks and badges.
              Built to be fun for kids and clean enough for serious birders.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/beta" variant="primary">
              Join the Beta
            </ButtonLink>
            <ButtonLink href="/survey" variant="secondary">
              Take the Survey
            </ButtonLink>
            <ButtonLink href="#palette" variant="ghost">
              Palette
            </ButtonLink>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <MiniStat title="Play" text="Streaks, badges, challenges." />
            <MiniStat title="Learn" text="Better IDs and patterns." />
            <MiniStat title="Contribute" text="Data that can matter." />
          </div>

          <div className="rounded-xl2 border border-border bg-card p-5 shadow-soft">
            <div className="text-sm font-semibold">🎖 Founding Birder Status</div>
            <div className="mt-1 text-sm text-muted-fg">
              Beta testers get a permanent <span className="font-medium text-fg">Founding Birder</span> badge and{" "}
              <span className="font-medium text-fg">30 days of Premium free</span> at public launch.
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <Card title="What you can do in beta (first)" eyebrow="Beta scope">
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-fg">
              <li>Log a sighting (fast + fun)</li>
              <li>Earn streaks and starter badges</li>
              <li>Build your personal “birding story”</li>
              <li>Help shape the roadmap via the survey</li>
            </ul>
          </Card>

          <Card
            title="The LGB Palette"
            eyebrow="Design system"
            footer={
              <div className="text-xs text-muted-fg">
                Nature trust (Forest/Moss), energy (Sky), reward moments (Sun) on warm Sand.
              </div>
            }
          >
            <div id="palette" className="grid gap-3 sm:grid-cols-2">
              <Swatch name="Forest" hex="#0B3D2E" usage="Primary nav + main CTAs" className="bg-primary" />
              <Swatch name="Moss" hex="#2F6F4E" usage="Secondary actions + calm accents" className="bg-secondary" />
              <Swatch name="Sky" hex="#2D7FF9" usage="Links + highlights + flight energy" className="bg-accent" />
              <Swatch name="Sun" hex="#F6C445" usage="Badge moments + reward highlights" className="bg-[#F6C445]" />
              <Swatch name="Sand" hex="#F4F1EA" usage="Background warmth" className="bg-bg border border-border" />
              <Swatch name="Ink" hex="#0F172A" usage="Readable text" className="bg-fg" />
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Card title="For kids & families" eyebrow="Who it’s for">
          <p className="text-sm text-muted-fg">
            Turn nature walks into a game: collect birds, keep streaks, learn together.
          </p>
        </Card>
        <Card title="For birders" eyebrow="Who it’s for">
          <p className="text-sm text-muted-fg">
            Lightweight logging and challenges that don’t feel spammy.
          </p>
        </Card>
        <Card title="For conservation" eyebrow="Who it’s for">
          <p className="text-sm text-muted-fg">
            Structured observations to support partnerships and habitat outcomes over time.
          </p>
        </Card>
      </div>

      <div className="mt-12 rounded-xl2 border border-border bg-card p-6 shadow-soft">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">Ready to become a Founding Birder?</div>
            <div className="text-sm text-muted-fg">Join the beta and help shape the roadmap.</div>
          </div>
          <div className="flex gap-3">
            <ButtonLink href="/beta" variant="primary">
              Join Beta
            </ButtonLink>
            <ButtonLink href="/survey" variant="secondary">
              Survey
            </ButtonLink>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function MiniStat({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl2 border border-border bg-card px-4 py-3 shadow-soft">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-muted-fg">{text}</div>
    </div>
  );
}

function Swatch({
  name,
  hex,
  usage,
  className,
}: {
  name: string;
  hex: string;
  usage: string;
  className: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-bg p-3">
      <div className={`h-10 w-10 rounded-xl ${className}`} />
      <div className="min-w-0">
        <div className="text-sm font-semibold">{name}</div>
        <div className="text-xs text-muted-fg">
          {hex} • {usage}
        </div>
      </div>
    </div>
  );
}