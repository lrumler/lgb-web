import Link from "next/link";

export function Card({
  title,
  children,
  footer,
}: {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <section className="rounded-xl2 border border-border bg-card text-card-fg shadow-soft">
      {title ? (
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-base font-semibold">{title}</h2>
        </div>
      ) : null}
      <div className="px-6 py-5">{children}</div>
      {footer ? <div className="border-t border-border px-6 py-4">{footer}</div> : null}
    </section>
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
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-soft ${cls}`}
    >
      {children}
    </Link>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring ${props.className ?? ""}`}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring ${props.className ?? ""}`}
    />
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-medium">{children}</label>;
}
