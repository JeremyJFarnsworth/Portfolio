import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Skills from "@/components/Skills";
import { profile } from "@/lib/resume";

export default function Home() {
  return (
    <>
      <SiteHeader name={profile.name} />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <SiteFooter />
      </main>
    </>
  );
}
