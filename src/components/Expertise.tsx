import Arrow from "./Arrow";
const services = [
  {
    title: "Manual testing",
    text: "Regression, exploratory checks, and UAT that put the user experience first.",
    path: "M9 11l2 2 4-4M7 3h10v3H7zM6 5H4v16h16V5h-2",
  },
  {
    title: "Test automation",
    text: "Repeatable browser tests with Playwright, Selenium, and GitHub Actions.",
    path: "m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18",
  },
  {
    title: "API & integration",
    text: "Postman and integration testing to check how the pieces work together.",
    path: "M8 3H3v5h5V3zm13 13h-5v5h5v-5zM6 12v6h6M12 6h6v6",
  },
  {
    title: "Data validation",
    text: "Careful data checks, clear bug reports, and practical documentation.",
    path: "M4 4h16v16H4zM4 9h16M9 9v11m3-6 2 2 4-4",
  },
];
export default function Expertise() {
  return (
    <section id="expertise" className="expertise wrap">
      <div className="section-top">
        <div>
          <p className="eyebrow">How I help</p>
          <h2>
            What I do<span>.</span>
          </h2>
        </div>
        <p>
          From the first test case
          <br />
          to the next release.
        </p>
      </div>
      <div className="expertise-grid">
        {services.map((s) => (
          <article className="expertise-card" key={s.title}>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={s.path} />
            </svg>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href="#skills" aria-label={`Explore ${s.title} skills`}>
              <Arrow diagonal />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
