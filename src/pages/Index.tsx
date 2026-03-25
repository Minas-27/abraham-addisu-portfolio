import HeroSection from "@/components/HeroSection";
import AchievementGallery from "@/components/AchievementGallery";
import WorkTimeline from "@/components/WorkTimeline";
import ProjectBentoGrid from "@/components/ProjectBentoGrid";
import TechStackGradle from "@/components/TechStackGradle";
import ContactCLI from "@/components/ContactCLI";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AchievementGallery />
      <WorkTimeline />
      <ProjectBentoGrid />
      <TechStackGradle />
      <ContactCLI />

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-sm text-muted-foreground">
            © 2026 Abraham Addisu. Built with conviction.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-android animate-pulse-green" />
            <span>All systems operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
