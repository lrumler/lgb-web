import Link from "next/link";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
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
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-fg">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Let’s Go Bird</div>
            <div className="flex gap-4">
              <Link className="hover:text-fg" href="/survey">Survey</Link>
              <Link className="hover:text-fg" href="/beta">Beta Signup</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
