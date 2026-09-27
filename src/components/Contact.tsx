import Arrow from "./Arrow";
export default function Contact() {
  return (
    <section id="contact" className="contact wrap">
      <div>
        <p className="eyebrow">Let’s work together</p>
        <h2>
          Have a release in mind?
          <br />
          Let’s make it <span>better.</span>
        </h2>
      </div>
      <div className="contact-actions">
        <a
          className="button button-dark"
          href="mailto:carmelomarilag39@gmail.com"
        >
          Let’s talk quality <Arrow />
        </a>
        <a className="contact-email" href="mailto:carmelomarilag39@gmail.com">
          carmelomarilag39@gmail.com
        </a>
      </div>
    </section>
  );
}
