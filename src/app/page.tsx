import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Credentials from "@/components/sections/Credentials";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

/**
 * Page structure, in the order a reader needs it:
 *
 *   Hero        who and what
 *   Profile     the longer story
 *   Work        the evidence they came for
 *   Credentials proof — hackathon results and certificates, one destination
 *   Capabilities what he can do
 *   Experience  where he has done it
 *   Contact     how to reach him
 *
 * Section ids, labels and numbering all come from src/lib/site.ts so the
 * navigation and the headings cannot drift apart.
 */
export default function Home() {
  return (
    <>
      <NavBar />

      <main id="main" className="site-main">
        <Hero />
        <About />
        <Work />
        <Credentials />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
