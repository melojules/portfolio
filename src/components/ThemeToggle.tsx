"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const DARK_QUERY = "(prefers-color-scheme: dark)";
const CHANGE_EVENT = "themechange";

// The theme lives in the DOM (set pre-paint by the layout script) and in the
// OS preference — both external systems, so read them through a store rather
// than mirroring them into React state.
function subscribe(onChange: () => void) {
  const media = window.matchMedia(DARK_QUERY);
  media.addEventListener("change", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    media.removeEventListener("change", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function getSnapshot(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "dark" || chosen === "light") return chosen;
  return "light";
}

// The server can't know the visitor's theme; null renders a neutral button
// that fills in once hydrated.
function getServerSnapshot(): null {
  return null;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing can reject writes; the theme still applies for now.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme ? `Switch to ${next} mode` : "Switch colour mode"}
      className="theme-toggle"
    >
      {/* Fixed widths keep the nav from shifting once the theme resolves. */}
      <span aria-hidden="true" className="w-3 text-center">
        {theme === "dark" ? "☀" : theme === "light" ? "☾" : ""}
      </span>
      <span className="w-8 text-left">{theme ? next : ""}</span>
    </button>
  );
}
