import Image from "next/image";

const fields = [
  { label: "Location", value: "Davao City, Philippines" },
  { label: "Discipline", value: "Manual & automated testing" },
  { label: "Status", value: "Open to opportunities" },
];

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-4xl gap-12 px-6 pb-16 pt-16 sm:grid-cols-[1fr_auto] sm:items-start">
      <div className="flex flex-col gap-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Field Report · QA Engineer
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
          Carmelo Jules Marilag
        </h1>
        <p className="max-w-lg text-xl italic text-muted sm:text-2xl">
          &ldquo;I break things on purpose, so users never have to.&rdquo;
        </p>

        <dl className="mt-2 flex flex-col gap-1.5 border-l border-surface-border pl-4 font-mono text-sm text-muted">
          {fields.map((field) => (
            <div key={field.label} className="flex gap-2">
              <dt className="text-foreground">{field.label}:</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex gap-4 font-mono text-sm">
          <a
            href="#experience"
            className="rounded-sm border border-accent bg-accent px-5 py-3 text-background transition-colors hover:bg-transparent hover:text-accent"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-surface-border px-5 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative mx-auto shrink-0 sm:mx-0">
        <div className="relative size-56 border border-surface-border bg-surface p-2 sm:size-64">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`}
            alt="Carmelo Jules Marilag"
            width={320}
            height={320}
            priority
            className="size-full object-cover object-top grayscale-(--photo-grade)"
          />
          <svg
            viewBox="0 0 100 100"
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 text-accent"
          >
            <path
              d="M 12,52 C 9,26 33,5 56,7 C 79,9 95,27 92,53 C 89,81 64,97 41,94 C 19,91 5,75 12,52 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="stamp absolute -bottom-6 -left-6 flex size-20 -rotate-12 flex-col items-center justify-center gap-0.5 rounded-full border-2 border-pass bg-background text-center font-mono text-[0.55rem] font-semibold uppercase leading-tight tracking-wider text-pass">
          <span>Verified</span>
          <span>Tester</span>
        </span>
        <span className="absolute -top-3 -right-3 border border-surface-border bg-background px-2 py-0.5 font-mono text-[0.65rem] text-muted">
          Fig. 1
        </span>
      </div>
    </section>
  );
}
