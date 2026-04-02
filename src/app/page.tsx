import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { ServicesSection } from "@/components/home/services-section";
import { ContactSection } from "@/components/home/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
