import { SiteShell } from "@/components/SiteShell";
import { Card } from "@/components/UI";

const BETA_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdMj4oAW_WCCdfeWMx6P44IJ3RQdywmtILqZT_XPoAyKEm7TA/viewform?embedded=true";

export default function BetaPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Join the LGB Beta</h1>
          <p className="text-sm text-muted-fg">
            Early testers help shape the experience—especially streaks, badges, and “what feels fun.”
          </p>
        </div>

        <Card title="🎖 Founding Birder Status" footer={<FooterNote />}>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-fg">
            <li>
              Beta testers get a permanent <span className="font-medium text-fg">Founding Birder</span> badge
            </li>
            <li>
              Plus <span className="font-medium text-fg">30 days of Premium free</span> at public launch
            </li>
            <li>Priority input on roadmap decisions</li>
          </ul>
        </Card>

        <Card title="Beta signup form">
          <div className="rounded-xl2 border border-border bg-bg p-2">
            <iframe
              title="LGB Beta Signup Form"
              src={BETA_FORM_URL}
              className="h-[1100px] w-full rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="mt-3 text-xs text-muted-fg">
            If the form doesn’t load (rare), open it in a new tab:{" "}
            <a
              className="underline hover:text-fg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdMj4oAW_WCCdfeWMx6P44IJ3RQdywmtILqZT_XPoAyKEm7TA/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Beta Signup Form
            </a>
          </div>
        </Card>
      </div>
    </SiteShell>
  );
}

function FooterNote() {
  return (
    <div className="text-xs text-muted-fg">
      Founding Birder perks activate at public launch (so you don’t “use up” the free month before Premium exists).
    </div>
  );
}