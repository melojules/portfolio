import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-12 px-6 pb-24 pt-20 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-4">
        <p className="font-mono text-accent">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-foreground sm:text-6xl">
          Carmelo Jules Marilag.
        </h1>
        <h2 className="text-3xl font-bold text-muted sm:text-5xl">
          I break things on purpose, so users never have to.
        </h2>
        <p className="font-mono text-sm text-muted">Davao City, Philippines</p>
        <div className="mt-6 flex gap-4 font-mono text-sm">
          <a
            href="#experience"
            className="rounded border border-accent px-5 py-3 text-accent transition-colors hover:bg-accent-soft"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded border border-surface-border px-5 py-3 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>

      <Image
        src="/profile.png"
        alt="Carmelo Jules Marilag"
        width={384}
        height={384}
        priority
        className="size-64 shrink-0 rounded-full border-4 border-accent object-cover sm:size-80"
      />
    </section>
  );
}
