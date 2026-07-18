import SectionHeading from "@/components/SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: "carmelomarilag39@gmail.com",
    href: "mailto:carmelomarilag39@gmail.com",
  },
  {
    label: "Phone",
    value: "+63 906 517 3878",
    href: "tel:+639065173878",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading index="04." title="Contact" />
      <p className="mb-8 max-w-xl text-muted">
        Have a question or want to work together? Reach out directly.
      </p>
      <div className="flex max-w-xl flex-col gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center justify-between rounded border border-surface-border bg-surface px-5 py-4 transition-colors hover:border-accent"
          >
            <span className="font-mono text-sm text-muted">{link.label}</span>
            <span className="text-foreground">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
