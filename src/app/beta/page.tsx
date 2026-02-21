"use client";

import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { Card, Input, Label, Textarea } from "@/components/UI";

type Status = "idle" | "submitting" | "success" | "error";

export default function BetaPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/beta-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Submit failed");
      setStatus("success");
      setMessage("You’re on the list. We’ll email you when the beta opens.");
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
          <h1 className="text-3xl font-semibold tracking-tight">Join the LGB Beta</h1>
          <p className="mt-2 text-sm text-muted-fg">
            Early testers help shape the experience—especially streaks, badges, and “what feels fun.”
          </p>
        </div>

        <Card title="Beta signup">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-1">
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="you@email.com" required />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label>Name (optional)</Label>
                <Input name="name" placeholder="Lucas" />
              </div>
              <div className="space-y-1">
                <Label>Platform</Label>
                <select
                  name="platform"
                  className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
                  required
                >
                  <option value="">Select one</option>
                  <option value="ios">iOS</option>
                  <option value="android">Android</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <Label>Where do you usually bird? (optional)</Label>
              <Input name="location" placeholder="Maine, NYC, Pacific NW..." />
            </div>

            <div className="space-y-1">
              <Label>What would make LGB a “must keep” app for you?</Label>
              <Textarea name="must_keep" rows={4} placeholder="Streak engine, challenges, ID help, clean logging..." />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-fg shadow-soft hover:opacity-95 disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Request Beta Access"}
            </button>

            {message ? (
              <div className="rounded-xl border border-border bg-muted px-3 py-2 text-sm text-fg">
                {message}
              </div>
            ) : null}
          </form>
        </Card>

        <Card title="What happens next?">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-fg">
            <li>You get an email when the beta build is ready.</li>
            <li>You test core flows: sightings, streaks, first badges.</li>
            <li>Your feedback shapes the next sprint.</li>
          </ol>
        </Card>
      </div>
    </SiteShell>
  );
}