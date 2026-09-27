"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Arrow from "./Arrow";
const links = [
  { id: "home", label: "Home" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Work" },
  { id: "speaking", label: "Speaking" },
  { id: "certifications", label: "Certifications" },
];

export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Match the anchor offset, including the taller mobile header.
      const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 112;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id], #certifications"));
      let current = "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset + 8) current = section.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Carmelo Jules home">
          cjmarilag<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} aria-current={active === id ? "location" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="button button-dark nav-contact" href="#contact">
            Let’s talk <Arrow />
          </a>
        </div>
      </nav>
    </header>
  );
}
