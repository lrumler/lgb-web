import Image from "next/image";

interface BrandWordmarkProps {
  /** Optional small line below the wordmark (e.g. tagline). */
  subtitle?: string | null;
  /** Center-align (used in hero contexts). Defaults to left-aligned. */
  centered?: boolean;
  /** Visual size. Defaults to "md" (header-appropriate). */
  size?: "sm" | "md" | "lg";
}

/**
 * BrandWordmark — the canonical Let's Go Bird lockup.
 *
 * Mirrors apps/mobile/src/components/BrandWordmark.tsx so web and app share
 * the same two-color treatment: "Let's Go" in brand-dark, "Bird!" in
 * brand-orange, set in Unbounded ExtraBold paired with the hex logo mark.
 *
 * Use anywhere the brand needs to appear (header, hero, footer, share cards).
 */
export function BrandWordmark({
  subtitle = null,
  centered = false,
  size = "md",
}: BrandWordmarkProps) {
  const logoSize = size === "sm" ? 32 : size === "lg" ? 56 : 40;
  const titleSize =
    size === "sm" ? "text-base" : size === "lg" ? "text-3xl" : "text-lg";
  const subtitleSize = size === "lg" ? "text-sm" : "text-xs";

  return (
    <div
      className={`flex items-center gap-3 ${
        centered ? "justify-center text-center" : ""
      }`}
    >
      <Image
        src="/logo-mark.png"
        alt="Let's Go Bird"
        width={logoSize}
        height={logoSize}
        className="shrink-0"
        priority={size !== "sm"}
        draggable={false}
      />
      <div className="leading-tight">
        <div
          className={`font-display font-extrabold tracking-tight ${titleSize}`}
        >
          <span className="text-brand-dark">Let&rsquo;s Go</span>{" "}
          <span className="text-brand-orange">Bird!</span>
        </div>
        {subtitle ? (
          <div
            className={`mt-0.5 font-medium text-muted-fg ${subtitleSize}`}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}
