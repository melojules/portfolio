const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-mono text-sm text-accent"
        >
          ~/cjmarilag
        </a>
        <ul className="flex gap-6 font-mono text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
