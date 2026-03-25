import { useState } from "react";
import { Smartphone, Wifi, Battery, Signal, ChevronLeft, Send, User, Briefcase, Code2, Mail, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

type Screen = "home" | "about" | "projects" | "experience" | "contact" | "project-detail" | "experience-detail";

interface ProjectData {
  name: string;
  tag: string;
  color: string;
  stack: string[];
  desc: string;
  achievement: string;
  features: string[];
}

interface ExperienceData {
  co: string;
  role: string;
  time: string;
  location: string;
  responsibilities: string[];
}

const projects: ProjectData[] = [
  {
    name: "Daga Ride",
    tag: "Kotlin",
    color: "text-syn-keyword",
    stack: ["Kotlin", "Google Maps API", "Firebase"],
    desc: "Production ride-hailing app live on Google Play Store, serving riders in Bahir Dar.",
    achievement: "Successfully deployed on Google Play",
    features: ["Real-time ride matching", "Live GPS tracking", "Driver-passenger interaction", "In-app payments"],
  },
  {
    name: "HireAI",
    tag: "AI",
    color: "text-syn-type",
    stack: ["Kotlin", "AI/ML", "Amharic NLP"],
    desc: "AI-powered recruitment platform built for African job markets with bilingual support.",
    achievement: "Voice-based AI candidate evaluation",
    features: ["Bilingual voice processing (Amharic/English)", "AI scoring system", "Transparent evaluation audit trail", "African market focus"],
  },
  {
    name: "Inventory Scanner",
    tag: "Flutter",
    color: "text-syn-success",
    stack: ["Flutter", "Odoo", "JSON-RPC"],
    desc: "Enterprise ERP integration for warehouse and inventory management.",
    achievement: "Optimized warehouse workflows",
    features: ["Real-time barcode scanning", "ERP synchronization", "Logistics automation", "Inventory tracking"],
  },
];

const experiences: ExperienceData[] = [
  {
    co: "Medco Technology Solutions",
    role: "Software Engineer Intern",
    time: "Feb 2026 - Present",
    location: "Addis Ababa (On-site)",
    responsibilities: [
      "Requirement analysis, development, testing & deployment",
      "Cross-functional team collaboration for medical software",
      "Best practices in engineering & system design",
      "Real-world systems focused on performance",
    ],
  },
  {
    co: "Self-Employed",
    role: "Android Developer",
    time: "Jul 2024 - Present",
    location: "Bahir Dar (Hybrid)",
    responsibilities: [
      "Built Android apps with Kotlin & Jetpack Compose",
      "Real-time features with Firebase & REST APIs",
      "Scalable local storage using RoomDB",
      "Modern UI/UX, navigation & localization",
    ],
  },
  {
    co: "BrainBite",
    role: "iOS Flutter Developer Intern",
    time: "Oct 2025 - Jan 2026",
    location: "Remote (Netherlands)",
    responsibilities: [
      "Cross-platform mobile features using Flutter",
      "Educational platform for personalized learning",
      "International remote team collaboration",
      "APIs and AI-based integrations",
    ],
  },
  {
    co: "BiTec",
    role: "Embedded Systems Developer",
    time: "Dec 2024 - Oct 2025",
    location: "Bahir Dar (On-site)",
    responsibilities: [
      "Real-time power monitoring with embedded sensors",
      "ZMPT101B, ACS712 & AHT20 sensor integration",
      "Live metrics on TFT screen with SD logging",
      "Hardware-software MVP delivery",
    ],
  },
];

const AVDEmulator = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [isPowered, setIsPowered] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedExp, setSelectedExp] = useState<ExperienceData | null>(null);

  const navigate = (screen: Screen) => setCurrentScreen(screen);

  const goBack = () => {
    if (currentScreen === "project-detail") setCurrentScreen("projects");
    else if (currentScreen === "experience-detail") setCurrentScreen("experience");
    else setCurrentScreen("home");
  };

  const screenTitle = () => {
    if (currentScreen === "project-detail") return selectedProject?.name || "Project";
    if (currentScreen === "experience-detail") return selectedExp?.co || "Experience";
    return currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1);
  };

  if (!isPowered) {
    return (
      <div className="flex flex-col items-center gap-3">
        <PhoneFrame>
          <div className="flex-1 flex items-center justify-center bg-black">
            <button onClick={() => setIsPowered(true)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Smartphone className="w-8 h-8" />
              <p className="text-[8px] mt-1">Power On</p>
            </button>
          </div>
        </PhoneFrame>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2 shrink-0">
      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
        <span className="w-1.5 h-1.5 rounded-full bg-syn-success animate-pulse" />
        <span>Pixel 8 Pro — API 34</span>
      </div>

      <PhoneFrame>
        {/* Status bar */}
        <div className="h-5 bg-black/90 flex items-center justify-between px-3 text-[7px] text-foreground/70 shrink-0">
          <span>12:34</span>
          <div className="flex items-center gap-1">
            <Signal className="w-2 h-2" />
            <Wifi className="w-2 h-2" />
            <Battery className="w-2 h-2" />
          </div>
        </div>

        {/* App bar */}
        <div className="h-8 bg-primary/20 flex items-center px-2 gap-2 shrink-0 border-b border-border/50">
          {currentScreen !== "home" && (
            <button onClick={goBack} className="text-foreground/80 hover:text-foreground">
              <ChevronLeft className="w-3 h-3" />
            </button>
          )}
          <span className="text-[9px] font-semibold text-foreground/90 truncate">
            {currentScreen === "home" ? "Abraham Portfolio" : screenTitle()}
          </span>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto bg-background ide-scrollbar">
          {currentScreen === "home" && <HomeScreen onNavigate={navigate} />}
          {currentScreen === "about" && <AboutScreen />}
          {currentScreen === "projects" && (
            <ProjectsScreen onSelect={(p) => { setSelectedProject(p); setCurrentScreen("project-detail"); }} />
          )}
          {currentScreen === "project-detail" && selectedProject && <ProjectDetailScreen project={selectedProject} />}
          {currentScreen === "experience" && (
            <ExperienceScreen onSelect={(e) => { setSelectedExp(e); setCurrentScreen("experience-detail"); }} />
          )}
          {currentScreen === "experience-detail" && selectedExp && <ExperienceDetailScreen exp={selectedExp} />}
          {currentScreen === "contact" && <ContactScreen />}
        </div>

        {/* Bottom nav */}
        <div className="h-9 bg-card/80 border-t border-border/50 flex items-center justify-around shrink-0">
          {[
            { id: "home" as Screen, icon: Smartphone, label: "Home" },
            { id: "projects" as Screen, icon: Layers, label: "Projects" },
            { id: "experience" as Screen, icon: Briefcase, label: "Work" },
            { id: "contact" as Screen, icon: Mail, label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 transition-colors",
                (currentScreen === item.id || (item.id === "projects" && currentScreen === "project-detail") || (item.id === "experience" && currentScreen === "experience-detail"))
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="w-3 h-3" />
              <span className="text-[6px]">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Gesture bar */}
        <div className="h-3 bg-black/90 flex items-center justify-center shrink-0">
          <div className="w-10 h-0.5 rounded-full bg-foreground/30" />
        </div>
      </PhoneFrame>

      <button onClick={() => setIsPowered(false)} className="text-[9px] text-muted-foreground hover:text-destructive transition-colors">
        Power Off
      </button>
    </div>
  );
};

/* ── Phone Frame ── */
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[200px] h-[420px] rounded-[20px] border-2 border-border bg-black overflow-hidden flex flex-col shadow-xl shadow-black/40 relative">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-b-lg z-10" />
    {children}
  </div>
);

/* ── Screens ── */
const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="p-3 space-y-3">
    <div className="bg-card rounded-lg p-3 border border-border/50">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-2">
        <User className="w-4 h-4 text-primary" />
      </div>
      <p className="text-[9px] font-bold text-foreground">Abraham Addisu</p>
      <p className="text-[7px] text-muted-foreground">Android Developer</p>
      <p className="text-[7px] text-syn-success mt-1">● Available for hire</p>
    </div>
    {[
      { label: "About Me", screen: "about" as Screen, icon: "👤" },
      { label: "Projects", screen: "projects" as Screen, icon: "📱" },
      { label: "Experience", screen: "experience" as Screen, icon: "💼" },
      { label: "Contact", screen: "contact" as Screen, icon: "📧" },
    ].map((item) => (
      <button
        key={item.screen}
        onClick={() => onNavigate(item.screen)}
        className="w-full bg-card hover:bg-secondary/60 rounded-lg p-2 flex items-center gap-2 border border-border/30 transition-colors text-left"
      >
        <span className="text-xs">{item.icon}</span>
        <span className="text-[8px] text-foreground">{item.label}</span>
      </button>
    ))}
  </div>
);

const AboutScreen = () => (
  <div className="p-3 space-y-2">
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[8px] font-semibold text-primary mb-1">Kotlin Specialist</p>
      <p className="text-[7px] text-muted-foreground leading-relaxed">
        I build scalable, production-ready mobile apps focused on clean architecture and real-world impact.
      </p>
    </div>
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[7px] font-semibold text-foreground mb-1">Skills</p>
      <div className="flex flex-wrap gap-1">
        {["Kotlin", "Compose", "Firebase", "Flutter", "Odoo", "REST"].map((s) => (
          <span key={s} className="text-[6px] px-1.5 py-0.5 bg-primary/15 text-primary rounded-full">{s}</span>
        ))}
      </div>
    </div>
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[7px] font-semibold text-foreground mb-1">Education</p>
      <p className="text-[7px] text-muted-foreground">BSc Software Engineering</p>
      <p className="text-[6px] text-muted-foreground">Bahir Dar University</p>
    </div>
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[7px] font-semibold text-syn-annotation mb-1">🏆 Achievements</p>
      <p className="text-[6px] text-muted-foreground">CoBuild AI Hackathon — 2nd Place</p>
      <p className="text-[6px] text-muted-foreground">Hult Prize 2026 — Finalist</p>
    </div>
  </div>
);

const ProjectsScreen = ({ onSelect }: { onSelect: (p: ProjectData) => void }) => (
  <div className="p-3 space-y-2">
    {projects.map((p) => (
      <button
        key={p.name}
        onClick={() => onSelect(p)}
        className="w-full bg-card rounded-lg p-2 border border-border/30 text-left hover:bg-secondary/40 transition-colors"
      >
        <div className="flex items-center justify-between mb-1">
          <p className="text-[8px] font-semibold text-foreground">{p.name}</p>
          <span className={cn("text-[6px] px-1 py-0.5 rounded", p.color, "bg-secondary")}>{p.tag}</span>
        </div>
        <p className="text-[6px] text-muted-foreground">{p.desc.slice(0, 50)}...</p>
        <p className="text-[5px] text-primary mt-1">Tap for details →</p>
      </button>
    ))}
  </div>
);

const ProjectDetailScreen = ({ project }: { project: ProjectData }) => (
  <div className="p-3 space-y-2">
    {/* Header */}
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <div className="flex items-center justify-between mb-1">
        <p className="text-[9px] font-bold text-foreground">{project.name}</p>
        <span className={cn("text-[6px] px-1.5 py-0.5 rounded", project.color, "bg-secondary")}>{project.tag}</span>
      </div>
      <p className="text-[7px] text-muted-foreground leading-relaxed">{project.desc}</p>
    </div>

    {/* Achievement */}
    <div className="bg-syn-success/10 rounded-lg p-2 border border-syn-success/20">
      <p className="text-[6px] text-syn-success font-semibold mb-0.5">✅ Achievement</p>
      <p className="text-[7px] text-foreground">{project.achievement}</p>
    </div>

    {/* Tech Stack */}
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[7px] font-semibold text-foreground mb-1">Tech Stack</p>
      <div className="flex flex-wrap gap-1">
        {project.stack.map((t) => (
          <span key={t} className="text-[6px] px-1.5 py-0.5 bg-primary/15 text-primary rounded-full">{t}</span>
        ))}
      </div>
    </div>

    {/* Features */}
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[7px] font-semibold text-foreground mb-1">Features</p>
      {project.features.map((f, i) => (
        <div key={i} className="flex items-start gap-1 mb-0.5">
          <span className="text-[6px] text-primary mt-0.5">▸</span>
          <p className="text-[6px] text-muted-foreground">{f}</p>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceScreen = ({ onSelect }: { onSelect: (e: ExperienceData) => void }) => (
  <div className="p-3 space-y-2">
    {experiences.map((e) => (
      <button
        key={e.co}
        onClick={() => onSelect(e)}
        className="w-full bg-card rounded-lg p-2 border border-border/30 flex gap-2 text-left hover:bg-secondary/40 transition-colors"
      >
        <div className="w-0.5 bg-primary rounded-full shrink-0" />
        <div className="flex-1">
          <p className="text-[8px] font-semibold text-foreground">{e.co}</p>
          <p className="text-[6px] text-primary">{e.role}</p>
          <p className="text-[6px] text-muted-foreground">{e.time}</p>
          <p className="text-[5px] text-primary mt-0.5">Tap for details →</p>
        </div>
      </button>
    ))}
  </div>
);

const ExperienceDetailScreen = ({ exp }: { exp: ExperienceData }) => (
  <div className="p-3 space-y-2">
    {/* Header */}
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[9px] font-bold text-foreground">{exp.co}</p>
      <p className="text-[7px] text-primary font-semibold">{exp.role}</p>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-[6px] text-muted-foreground">📅 {exp.time}</span>
      </div>
      <div className="flex items-center gap-1 mt-0.5">
        <span className="text-[6px] text-muted-foreground">📍 {exp.location}</span>
      </div>
    </div>

    {/* Responsibilities */}
    <div className="bg-card rounded-lg p-2 border border-border/30">
      <p className="text-[7px] font-semibold text-foreground mb-1">Key Responsibilities</p>
      {exp.responsibilities.map((r, i) => (
        <div key={i} className="flex items-start gap-1 mb-1">
          <span className="text-[6px] text-syn-success mt-0.5">●</span>
          <p className="text-[6px] text-muted-foreground leading-relaxed">{r}</p>
        </div>
      ))}
    </div>
  </div>
);

const ContactScreen = () => {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="p-3 flex flex-col items-center justify-center gap-2 h-full">
        <div className="w-8 h-8 rounded-full bg-syn-success/20 flex items-center justify-center">
          <span className="text-sm">✅</span>
        </div>
        <p className="text-[8px] text-syn-success font-semibold">Message Sent!</p>
        <p className="text-[6px] text-muted-foreground">Abraham will respond shortly</p>
        <button onClick={() => setSent(false)} className="text-[7px] text-primary mt-1">Send another</button>
      </div>
    );
  }

  return (
    <div className="p-3 space-y-2">
      <div className="bg-card rounded-lg p-2 border border-border/30 space-y-1.5">
        <input placeholder="Your name" className="w-full bg-secondary/50 text-[7px] px-2 py-1 rounded border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50" />
        <input placeholder="Your email" className="w-full bg-secondary/50 text-[7px] px-2 py-1 rounded border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50" />
        <textarea placeholder="Message..." rows={3} className="w-full bg-secondary/50 text-[7px] px-2 py-1 rounded border border-border/30 text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 resize-none" />
        <button
          onClick={() => setSent(true)}
          className="w-full bg-primary text-primary-foreground text-[7px] py-1.5 rounded flex items-center justify-center gap-1 hover:bg-primary/80 transition-colors"
        >
          <Send className="w-2.5 h-2.5" />
          Send Message
        </button>
      </div>
      <div className="bg-card rounded-lg p-2 border border-border/30 space-y-1">
        <p className="text-[7px] text-foreground">📧 abrahamaddisu217@gmail.com</p>
        <p className="text-[7px] text-foreground">📱 +251-963048258</p>
        <p className="text-[7px] text-foreground">🔗 github.com/Minas-27</p>
        <p className="text-[7px] text-foreground">🔗 linkedin.com/in/abraham-addisu</p>
      </div>
    </div>
  );
};

export default AVDEmulator;
