import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Arrow from "./Arrow";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Speaking() {
  return (
    <section id="speaking" className="section wrap">
      <SectionHeading eyebrow="Sharing what I learn" title="Speaking & workshops" />
      <article className="speaking-feature">
        <a className="speaking-photo" href={`${base}/speaking/qa-event.webp`} target="_blank" rel="noreferrer" aria-label="Open QA lecture event photo">
          <Image src={`${base}/speaking/qa-event.webp`} alt="Group on stage beneath the Software Quality Assurance in Modern Practice event title" width={1800} height={1200} sizes="(max-width: 760px) 100vw, 55vw" />
          <span>From the lecture <Arrow diagonal /></span>
        </a>
        <div className="speaking-copy">
          <p className="eyebrow">Resource speaker · Software QA</p>
          <h3>Software Quality Assurance in Modern Practice</h3>
          <p>A full-day talk on software quality assurance in modern practice, delivered to two different batches.</p>
          <div className="speaking-tags"><span>2 batches</span><span>8 AM–5 PM</span></div>
          <dl className="speaking-details">
            <div><dt>Event</dt><dd>Industry Integration Lecture Series 1</dd></div>
            <div><dt>Documented session</dt><dd><time dateTime="2025-09-27">September 27, 2025</time></dd></div>
            <div><dt>Venue</dt><dd>LIC AVR 4, University of Mindanao<br />Matina Campus, Davao City</dd></div>
          </dl>
          <a className="text-link" href={`${base}/speaking/qa-certificate.webp`} target="_blank" rel="noreferrer">View certificate <Arrow diagonal /></a>
        </div>
      </article>
      <details className="speaking-gallery">
        <summary>More from the QA talk <span>Audience & certificate</span></summary>
        <div className="speaking-gallery-grid">
          <figure><a href={`${base}/speaking/qa-audience.webp`} target="_blank" rel="noreferrer" aria-label="Open full audience photo"><Image src={`${base}/speaking/qa-audience.webp`} alt="Participants gathered for a group photo in the lecture venue" width={1800} height={1350} /></a><figcaption>A moment with the participants.</figcaption></figure>
          <figure><a href={`${base}/speaking/qa-certificate.webp`} target="_blank" rel="noreferrer" aria-label="Open full speaker certificate"><Image src={`${base}/speaking/qa-certificate.webp`} alt="Certificate of appreciation for Carmelo Jules B. Marilag as resource speaker on September 27, 2025" width={1800} height={1301} /></a><figcaption>Certificate of appreciation · University of Mindanao</figcaption></figure>
        </div>
      </details>
      <article className="speaking-feature speaking-ai">
        <a className="speaking-photo" href={`${base}/speaking/ai-event.webp`} target="_blank" rel="noreferrer" aria-label="Open full Work Smarter with AI group photo">
          <Image src={`${base}/speaking/ai-event.webp`} alt="Participants gathered for a group photo at the Work Smarter with AI sessions" width={1536} height={2048} sizes="(max-width: 760px) 100vw, 55vw" />
          <span>From the sessions <Arrow diagonal /></span>
        </a>
        <div className="speaking-copy">
          <p className="eyebrow">Speaker · Artificial intelligence</p>
          <h3>Work Smarter with AI</h3>
          <p>A two-part learning series, with the second session continuing and building on the first.</p>
          <div className="speaking-tags"><span>2 connected sessions</span></div>
          <dl className="speaking-details">
            <div><dt>Organization</dt><dd>Go Forward Pest Control</dd></div>
            <div><dt>Session dates</dt><dd><time dateTime="2026-09-12">September 12</time> &amp; <time dateTime="2026-09-19">19, 2026</time></dd></div>
            <div><dt>Venue</dt><dd>CoreSync, 3rd Floor, RL Building<br />Ecoland Drive, Talomo, Davao City</dd></div>
          </dl>
          <a className="text-link" href={`${base}/speaking/ai-certificate.webp`} target="_blank" rel="noreferrer">View AI talk certificate <Arrow diagonal /></a>
        </div>
      </article>
      <details className="speaking-gallery">
        <summary>Recognition for the AI sessions <span>Certificate of appreciation</span></summary>
        <figure className="ai-certificate"><a href={`${base}/speaking/ai-certificate.webp`} target="_blank" rel="noreferrer" aria-label="Open full Work Smarter with AI certificate"><Image src={`${base}/speaking/ai-certificate.webp`} alt="Certificate of appreciation presented to Carmelo Jules Marilag for Work Smarter with AI on September 12 and 19, 2026" width={1800} height={1273} /></a><figcaption>Certificate of appreciation · Go Forward Pest Control</figcaption></figure>
      </details>
      <div className="speaking-invite"><p>Looking for a speaker for your next event?</p><a className="text-link" href="mailto:carmelomarilag39@gmail.com?subject=Speaking%20invitation">Let’s connect <Arrow diagonal /></a></div>
    </section>
  );
}
