import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "./components/hero-section";
import { ProjectsSection } from "./components/projects-section";
import { ServicesSection } from "./components/services-section";
import { SkillsSection } from "./components/skills-section";
import { TimelineSection } from "./components/timeline-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
