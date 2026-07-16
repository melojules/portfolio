const socials = [
  { label: "GitHub", href: "https://github.com/melojules" },
  { label: "LinkedIn", href: "https://ph.linkedin.com/in/cjmarilag" },
  { label: "Email", href: "mailto:carmelomarilag39@gmail.com" },
  { label: "Phone", href: "tel:+639065173878" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div className="text-center font-mono sm:text-left">
          <p>© {new Date().getFullYear()} Carmelo Jules Marilag</p>
          <p className="text-xs">Davao City, Philippines</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-5 font-mono">
          {socials.map((social) => {
            const isExternal = social.href.startsWith("http");
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(isExternal
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
