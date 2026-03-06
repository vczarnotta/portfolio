import AboutSection from "../sections/AboutSection/AboutSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection";
import SkillsSection from "../sections/SkillsSection/SkillsSection";

export default function Home() {
  return(
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}