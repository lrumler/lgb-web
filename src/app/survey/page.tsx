"use client";

import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { Card, Input, Label, Textarea } from "@/components/UI";

type Status = "idle" | "submitting" | "success" | "error";

async function readJsonOrText(res: Response): Promise<{ ok: boolean; data: any; raw: string }> {
  const raw = await res.text(); // ALWAYS safe to read
  let data: any = null;

  // Try JSON parse only if it looks like JSON OR header says JSON
  const ct = res.headers.get("content-type") || "";
  const looksJson = raw.trim().startsWith("{") || raw.trim().startsWith("[");
  if (ct.includes("application/json") || looksJson) {
    try {
      data = JSON.parse(raw);
    } catch {
      // keep data as null
    }
  }

  return { ok: res.ok, data, raw };
}

function summarizeHtml(raw: string) {
  // When Next returns HTML (404/500), show a useful, short message.
  if (!raw) return "No response body returned.";
  const firstLine = raw.split("\n").find((l) => l.trim().length > 0) ?? "";
  if (raw.includes("<!DOCTYPE") || raw.includes("<html")) {
    return "Server returned HTML (likely a 404/500 page). Check that /api/survey exists and the dev server restarted.";
  }
  return firstLine.slice(0, 180);
}

export default function SurveyPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const { ok, data, raw } = await readJsonOrText(res);

      if (!ok) {
        const errMsg =
          (data && (data.error || data.message)) ||
          summarizeHtml(raw) ||
          "Submit failed";
        throw new Error(errMsg);
      }

      setStatus("success");
      setMessage("Thanks — your input will directly shape the beta roadmap.");
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message ?? "Something went wrong");
    }
  }

  return (
    <SiteShell>
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">LGB Survey</h1>
          <p className="mt-2 text-sm text-muted-fg">
            Help us build the most fun, most useful birding game—without annoying noise.
          </p>
        </div>

        <Card title="Tell us what matters most">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label>Name (optional)</Label>
                <Input name="name" placeholder="Lucas" />
              </div>
              <div className="space-y-1">
                <Label>Email (optional)</Label>
                <Input name="email" type="email" placeholder="you@email.com" />
              </div>
            </div>

            <div className="space-y-1">
              <Label>What kind of birder are you?</Label>
              <select
                name="birder_level"
                className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">Select one</option>
                <option value="beginner">Beginner</option>
                <option value="casual">Casual</option>
                <option value="enthusiast">Enthusiast</option>
                <option value="serious">Serious / eBird power user</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label>Top priority for beta</Label>
              <select
                name="top_priority"
                className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">Select one</option>
                <option value="fast_logging">Fast logging</option>
                <option value="streaks_badges">Streaks & badges</option>
                <option value="id_help">ID help (sound/photo later)</option>
                <option value="challenges">Challenges & contests</option>
                <option value="community">Community features</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label>Paid tier interest</Label>
              <select
                name="paid_interest"
                className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                required
              >
                <option value="">Select one</option>
                <option value="no">No thanks</option>
                <option value="maybe">Maybe</option>
                <option value="yes">Yes, for real value</option>
              </select>
            </div>

            <div className="space-y-1">
              <Label>Anything else you want?</Label>
              <Textarea name="notes" rows={4} placeholder="Feature ideas, concerns, pricing thoughts..." />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-fg shadow-soft hover:opacity-95 disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit Survey"}
            </button>

            {message ? (
              <div className="rounded-xl border border-border bg-muted px-3 py-2 text-sm text-fg">
                {message}
              </div>
            ) : null}
          </form>
        </Card>
      </div>
    </SiteShell>
  );
}