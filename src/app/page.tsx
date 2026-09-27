import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Speaking from "@/components/Speaking";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Expertise />
        <Projects />
        <div className="facts wrap" aria-label="Portfolio at a glance">
          <div>
            <strong>QA</strong>
            <span>Manual & automated</span>
          </div>
          <div>
            <strong>5</strong>
            <span>Featured projects</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Certifications</span>
          </div>
          <div>
            <strong>BS IT</strong>
            <span>University of Mindanao</span>
          </div>
        </div>
        <Speaking />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
