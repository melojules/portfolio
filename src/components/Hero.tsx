import Image from "next/image";
import Arrow from "./Arrow";
export default function Hero() {
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <p className="availability">
          <span /> Open to opportunities
        </p>
        <p className="hero-name">Hi, I’m Carmelo Jules Marilag</p>
        <h1>
          Quality that
          <br />
          <em>builds</em> trust<span className="accent-dot">.</span>
        </h1>
        <p className="hero-description">
          I break things on purpose, so users never have to. Software QA
          engineer turning careful testing into confident releases.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-orange">
            View my work <Arrow />
          </a>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            My résumé <Arrow diagonal />
          </a>
        </div>
        <p className="location">Based in Davao City, Philippines</p>
      </div>
      <div className="hero-visual">
        <div className="portrait-disc" />
        <div className="portrait-frame">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/profile.jpg`}
            alt="Carmelo Jules Marilag"
            width={880}
            height={880}
            preload
          />
        </div>
        <div className="portrait-note">
          <span className="checkmark" aria-hidden="true">
            ✓
          </span>
          <div>
            <strong>Details matter.</strong>
            <span>That’s where I come in.</span>
          </div>
        </div>
        <span className="portrait-label">MANUAL + AUTOMATED TESTING</span>
      </div>
    </section>
  );
}
