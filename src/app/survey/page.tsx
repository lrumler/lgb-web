import { SiteShell } from "@/components/SiteShell";
import { Card } from "@/components/UI";

const SURVEY_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSemztUdsdzkZ1wo34RQwbkjPMuGHzDim5gKHGM1jSV7xb7RBQ/viewform?embedded=true";

export default function SurveyPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">LGB Survey</h1>
          <p className="text-sm text-muted-fg">
            Help us build the most fun, most useful birding game—without annoying noise.
          </p>
        </div>

        <Card
          title="What matters most to you?"
          footer={
            <div className="text-xs text-muted-fg">
              Your answers directly influence beta priorities (streaks, badges, ID help, challenges, and monetization).
            </div>
          }
        >
          <div className="rounded-xl2 border border-border bg-bg p-2">
            <iframe
              title="LGB Survey Form"
              src={SURVEY_FORM_URL}
              className="h-[1100px] w-full rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="mt-3 text-xs text-muted-fg">
            If the form doesn’t load (rare), open it in a new tab:{" "}
            <a
              className="underline hover:text-fg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSemztUdsdzkZ1wo34RQwbkjPMuGHzDim5gKHGM1jSV7xb7RBQ/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Survey Form
            </a>
          </div>
        </Card>
      </div>
    </SiteShell>
  );
}