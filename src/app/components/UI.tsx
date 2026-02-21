import Link from "next/link";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

export function Card({
  title,
  eyebrow,
  children,
  footer,
}: {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <section className="rounded-xl2 border border-border bg-card text-card-fg shadow-soft">
      {(eyebrow || title) ? (
        <div className="border-b border-border px-6 py-4">
          {eyebrow ? <div className="text-xs font-semibold text-muted-fg">{eyebrow}</div> : null}
          {title ? <h2 className="mt-1 text-base font-semibold">{title}</h2> : null}
        </div>
      ) : null}
      <div className="px-6 py-5">{children}</div>
      {footer ? <div className="border-t border-border px-6 py-4">{footer}</div> : null}
    </section>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-fg shadow-soft">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}) {
  const cls =
    variant === "primary"
      ? "bg-primary text-primary-fg hover:opacity-95"
      : variant === "secondary"
      ? "bg-secondary text-secondary-fg hover:opacity-95"
      : "bg-transparent hover:bg-muted";

  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-soft",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-bg",
        cls,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export function Button({
  type = "button",
  disabled,
  variant = "primary",
  children,
}: {
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const cls =
    variant === "primary"
      ? "bg-primary text-primary-fg hover:opacity-95"
      : "bg-accent text-accent-fg hover:opacity-95";

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        "w-full rounded-xl px-4 py-3 text-sm font-semibold shadow-soft",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-bg",
        "disabled:opacity-60",
        cls,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-ring",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none",
        "focus:ring-2 focus:ring-ring",
        props.className ?? "",
      ].join(" ")}
    />
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium">{children}</label>;
}