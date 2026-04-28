import type { Metadata } from "next";
import { Inter, Unbounded, JetBrains_Mono } from "next/font/google";
import { BrandWordmark } from "@/components/BrandWordmark";
import "./globals.css";

/*
 * Font loading mirrors the mobile design system:
 *   - Unbounded: display headings, BrandWordmark
 *   - Inter:     body, UI text
 *   - JetBrains Mono: stats, codes, labels
 *
 * next/font injects each as a CSS variable on <body>; globals.css picks
 * them up via @theme inline { --font-display: var(--font-unbounded) ... }
 */

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const BETA_FORM_URL =
  "https://docs.google.com/forms/d/1HMmlVgNwQaXCXv1a4vzKamCsj_Zcd9MP9ZsAMSGzU3U/viewform";

export const metadata: Metadata = {
  title: "Let's Go Bird! | Real-time bird ID from audio and video",
  description:
    "LetsGoBird listens while you walk — identifying species, building your life list, rewarding every sighting. 600+ birds identified, 84% audio accuracy.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${unbounded.variable} ${jetbrainsMono.variable} antialiased bg-bg text-fg`}
      >
        <div className="flex min-h-screen flex-col">

          {/* HEADER */}
          <header className="border-b border-border bg-card">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a href="/" aria-label="Let's Go Bird home">
                <BrandWordmark size="md" />
              </a>

              <nav className="flex items-center gap-5 text-sm">
                <a
                  href="/"
                  className="font-medium text-fg/80 transition hover:text-fg"
                >
                  Home
                </a>
                <a
                  href={BETA_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-primary px-5 py-2.5 font-semibold text-primary-fg shadow-soft transition hover:opacity-90"
                >
                  Join the Beta
                </a>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <div className="mx-auto w-full max-w-6xl px-6 py-12">
              {children}
            </div>
          </main>

          {/* FOOTER */}
          <footer className="border-t border-border bg-card">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-fg">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <BrandWordmark size="sm" />
                  <span className="text-muted-fg">© {year}</span>
                </div>

                <div className="flex items-center gap-5">
                  <a href="/survey" className="transition hover:text-fg">
                    Survey
                  </a>
                  <a href="/eula" className="transition hover:text-fg">
                    EULA
                  </a>
                  <a href="/privacy" className="transition hover:text-fg">
                    Privacy
                  </a>
                  <a href="/terms" className="transition hover:text-fg">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
