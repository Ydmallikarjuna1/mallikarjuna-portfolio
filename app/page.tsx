import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Expertise from "@/components/expertise/Expertise";
import SkillGalaxy from "@/components/skills/SkillGalaxy";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Contact from "@/components/contact/Contact";
import Background from "@/components/three/Background";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <SkillGalaxy />
      <Projects />
      <Certifications />
      <Contact />
      
    </main>
  );
}