import Link from "next/link";
import { Container } from "@/components/UI";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Background wash */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-40 left-10 h-[420px] w-[420px] rounded-full bg-secondary/15 blur-3xl" />
      </div>

      <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary shadow-soft" />
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">Let’s Go Bird</div>
                <div className="text-xs text-muted-fg">Play • Learn • Contribute</div>
              </div>
            </Link>

            <nav className="flex items-center gap-2">
              <Link className="rounded-xl px-3 py-2 text-sm hover:bg-muted" href="/survey">
                Survey
              </Link>
              <Link className="rounded-xl px-3 py-2 text-sm hover:bg-muted" href="/beta">
                Beta
              </Link>
              <Link
                className="rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-accent-fg shadow-soft hover:opacity-95"
                href="/beta"
              >
                Join Beta
              </Link>
            </nav>
          </div>
        </Container>
      </header>

      <main className="py-10">
        <Container>{children}</Container>
      </main>

      <footer className="border-t border-border">
        <Container>
          <div className="py-10 text-sm text-muted-fg">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} Let’s Go Bird</div>
              <div className="flex gap-4">
                <Link className="hover:text-fg" href="/survey">
                  Survey
                </Link>
                <Link className="hover:text-fg" href="/beta">
                  Beta Signup
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}