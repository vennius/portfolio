import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkilllsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
