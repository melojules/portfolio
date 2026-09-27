export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a href="#home" className="footer-brand">
              cjmarilag<span>.</span>
            </a>
            <p>
              Careful testing.
              <br />
              Confident releases.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#projects">Projects</a>
            <a href="#speaking">Speaking</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills & certifications</a>
          </div>
          <div>
            <h3>Find me online</h3>
            <a
              href="https://github.com/melojules"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://ph.linkedin.com/in/cjmarilag"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
          <div>
            <h3>Say hello</h3>
            <a href="mailto:carmelomarilag39@gmail.com">Email me ↗</a>
            <a href="tel:+639065173878">+63 906 517 3878</a>
            <p>Davao City, Philippines</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Carmelo Jules Marilag</p>
          <p>Built with care. Tested with purpose.</p>
        </div>
      </div>
    </footer>
  );
}
