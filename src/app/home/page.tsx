import { ContactSection } from "./_components/contact-section";
import { HeroSection } from "./_components/hero-section";
import { ProjectsSection } from "./_components/projects-section";
import { ServicesSection } from "./_components/services-section";
import { SkillsSection } from "./_components/skills-section";
import { TimelineSection } from "./_components/timeline-section";

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
