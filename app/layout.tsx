import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Let's Go Bird! | Real-time bird ID from audio and video",
  description:
    "LetsGoBird listens while you walk — identifying species, building your life list, rewarding every sighting. 846 species, 84% audio accuracy.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F7F9F6] text-[#1F3D2B]`}
      >
        <div className="flex min-h-screen flex-col">

          {/* HEADER */}
          <header className="border-b border-[#E5E7EB] bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/logo-mark-v2.png"
                  alt="Let's Go Bird logo"
                  className="h-10 w-10"
                  draggable="false"
                />
                <span className="text-lg font-semibold tracking-wide">
                  LET&apos;S GO BIRD!
                </span>
              </a>

              <nav className="flex items-center gap-4 text-sm">
                <a href="/" className="hover:opacity-70 transition">
                  Home
                </a>
                <a
                  href="/survey"
                  className="rounded-2xl bg-[#1F3D2B] px-5 py-2.5 font-medium text-white hover:opacity-90 transition"
                >
                  Join the Waitlist
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
          <footer className="border-t border-[#E5E7EB] bg-white">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#1F3D2B]">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                <div>© {year} Let’s Go Bird</div>

                <div className="flex items-center gap-4">
                  <a href="/survey" className="hover:opacity-70 transition">
                    Survey
                  </a>

                  <a href="/eula" className="hover:opacity-70 transition">
                    EULA
                  </a>

                  <a href="/privacy" className="hover:opacity-70 transition">
                    Privacy
                  </a>

                  <a href="/terms" className="hover:opacity-70 transition">
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
