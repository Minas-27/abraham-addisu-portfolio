import { useState } from "react";
import { Smartphone, Wifi, Battery, Signal, ChevronLeft, Send, User, Briefcase, Code2, GraduationCap, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const screens = ["home", "about", "projects", "experience", "contact"] as const;
type Screen = typeof screens[number];

const AVDEmulator = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [isPowered, setIsPowered] = useState(true);

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
      {/* Device label */}
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
            <button onClick={() => setCurrentScreen("home")} className="text-foreground/80 hover:text-foreground">
              <ChevronLeft className="w-3 h-3" />
            </button>
          )}
          <span className="text-[9px] font-semibold text-foreground/90">
            {currentScreen === "home" ? "Abraham Portfolio" : currentScreen.charAt(0).toUpperCase() + currentScreen.slice(1)}
          </span>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto bg-background ide-scrollbar">
          {currentScreen === "home" && <HomeScreen onNavigate={setCurrentScreen} />}
          {currentScreen === "about" && <AboutScreen />}
          {currentScreen === "projects" && <ProjectsScreen />}
          {currentScreen === "experience" && <ExperienceScreen />}
          {currentScreen === "contact" && <ContactScreen />}
        </div>

        {/* Bottom nav */}
        <div className="h-9 bg-card/80 border-t border-border/50 flex items-center justify-around shrink-0">
          {[
            { id: "home" as Screen, icon: Smartphone, label: "Home" },
            { id: "projects" as Screen, icon: Code2, label: "Projects" },
            { id: "experience" as Screen, icon: Briefcase, label: "Work" },
            { id: "contact" as Screen, icon: Mail, label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className={cn(
                "flex flex-col items-center gap-0.5 transition-colors",
                currentScreen === item.id ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className="w-3 h-3" />
              <span className="text-[6px]">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Navigation gesture bar */}
        <div className="h-3 bg-black/90 flex items-center justify-center shrink-0">
          <div className="w-10 h-0.5 rounded-full bg-foreground/30" />
        </div>
      </PhoneFrame>

      <button
        onClick={() => setIsPowered(false)}
        className="text-[9px] text-muted-foreground hover:text-destructive transition-colors"
      >
        Power Off
      </button>
    </div>
  );
};

/* ── Phone Frame ── */
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[200px] h-[420px] rounded-[20px] border-2 border-border bg-black overflow-hidden flex flex-col shadow-xl shadow-black/40 relative">
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-b-lg z-10" />
    {children}
  </div>
);

/* ── Screens ── */
const HomeScreen = ({ onNavigate }: { onNavigate: (s: Screen) => void }) => (
  <div className="p-3 space-y-3">
    {/* Profile card */}
    <div className="bg-card rounded-lg p-3 border border-border/50">
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mb-2">
        <User className="w-4 h-4 text-primary" />
      </div>
      <p className="text-[9px] font-bold text-foreground">Abraham Addisu</p>
      <p className="text-[7px] text-muted-foreground">Android Developer</p>
      <p className="text-[7px] text-syn-success mt-1">● Available for hire</p>
    </div>

    {/* Quick actions */}
    {[
      { label: "About Me", screen: "about" as Screen, icon: "👤" },
      { label: "Projects", screen: "projects" as Screen, icon: "🚀" },
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

const ProjectsScreen = () => (
  <div className="p-3 space-y-2">
    {[
      { name: "Daga Ride", desc: "Ride-hailing app on Play Store", tag: "Kotlin", color: "text-syn-keyword" },
      { name: "HireAI", desc: "Bilingual AI recruitment", tag: "AI", color: "text-syn-type" },
      { name: "Inventory Scanner", desc: "Enterprise ERP integration", tag: "Flutter", color: "text-syn-success" },
    ].map((p) => (
      <div key={p.name} className="bg-card rounded-lg p-2 border border-border/30">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[8px] font-semibold text-foreground">{p.name}</p>
          <span className={cn("text-[6px] px-1 py-0.5 rounded", p.color, "bg-secondary")}>{p.tag}</span>
        </div>
        <p className="text-[6px] text-muted-foreground">{p.desc}</p>
      </div>
    ))}
  </div>
);

const ExperienceScreen = () => (
  <div className="p-3 space-y-2">
    {[
      { co: "Medco Tech", role: "Software Engineer", time: "2026 - Present" },
      { co: "Self-Employed", role: "Android Developer", time: "2024 - Present" },
      { co: "BrainBite", role: "Flutter Intern", time: "2025 - 2026" },
      { co: "BiTec", role: "Embedded Dev", time: "2024 - 2025" },
    ].map((e) => (
      <div key={e.co} className="bg-card rounded-lg p-2 border border-border/30 flex gap-2">
        <div className="w-0.5 bg-primary rounded-full shrink-0" />
        <div>
          <p className="text-[8px] font-semibold text-foreground">{e.co}</p>
          <p className="text-[6px] text-primary">{e.role}</p>
          <p className="text-[6px] text-muted-foreground">{e.time}</p>
        </div>
      </div>
    ))}
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
        <p className="text-[7px] text-foreground">📍 Addis Ababa, Ethiopia</p>
      </div>
    </div>
  );
};

export default AVDEmulator;
