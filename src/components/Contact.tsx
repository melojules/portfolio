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
    <section id="contact" className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading eyebrow="Escalate" title="Contact" />
      <p className="mb-8 max-w-xl text-muted">
        Found something worth discussing? Reach out directly — no ticketing
        system required.
      </p>
      <div className="flex max-w-xl flex-col gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center justify-between border border-surface-border bg-surface px-5 py-4 transition-colors hover:border-accent"
          >
            <span className="font-mono text-xs uppercase tracking-wide text-muted">
              {link.label}
            </span>
            <span className="text-foreground">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
