import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FileId } from "./IDESidebar";

/* ── Syntax helper components ── */
const K = ({ children }: { children: React.ReactNode }) => <span className="text-syn-keyword">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-syn-string">{children}</span>;
const T = ({ children }: { children: React.ReactNode }) => <span className="text-syn-type">{children}</span>;
const N = ({ children }: { children: React.ReactNode }) => <span className="text-syn-number">{children}</span>;
const C = ({ children }: { children: React.ReactNode }) => <span className="text-syn-comment">{children}</span>;
const A = ({ children }: { children: React.ReactNode }) => <span className="text-syn-annotation">{children}</span>;
const F = ({ children }: { children: React.ReactNode }) => <span className="text-syn-function">{children}</span>;
const P = ({ children }: { children: React.ReactNode }) => <span className="text-foreground">{children}</span>;

/* ── Interactive Contact Form ── */
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (name && email && message) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="flex text-xs leading-6">
      <div className="pr-4 text-right select-none shrink-0">
        {Array.from({ length: 28 }, (_, i) => (
          <div key={i} className="text-ide-gutter">{i + 1}</div>
        ))}
      </div>
      <div className="flex-1 overflow-x-auto">
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <C>{"// Contact Information"}</C>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4" />
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> email = <S>"abrahamaddisu217@gmail.com"</S>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> phone = <S>"+251-963048258"</S>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> location = <S>"Addis Ababa, Ethiopia"</S>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4" />
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <C>{"// Online Presence"}</C>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> github = <S>"github.com/Minas-27"</S>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> linkedin = <S>"linkedin.com/in/abraham-addisu"</S>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4" />
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <C>{"// ─── Send a message directly ───"}</C>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4" />
        <div className="hover:bg-secondary/40 transition-colors pr-4">
          <K>fun</K> <F>sendInquiry</F>() {"{"} 
        </div>
        <div className="hover:bg-secondary/40 transition-colors pr-4 flex items-center gap-2">
          <span className="whitespace-nowrap">&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> name = </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='"Your Name"'
            className="bg-secondary/60 border border-border/60 rounded px-2 py-0.5 text-syn-string w-28 sm:w-40 outline-none focus:border-primary/60 placeholder:text-muted-foreground/40"
          />
        </div>
        <div className="hover:bg-secondary/40 transition-colors pr-4 flex items-center gap-2">
          <span className="whitespace-nowrap">&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> email = </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='"your@email.com"'
            className="bg-secondary/60 border border-border/60 rounded px-2 py-0.5 text-syn-string w-28 sm:w-40 outline-none focus:border-primary/60 placeholder:text-muted-foreground/40"
          />
        </div>
        <div className="hover:bg-secondary/40 transition-colors pr-4 flex items-center gap-2">
          <span className="whitespace-nowrap">&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> message = </span>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='"Your message here..."'
            className="bg-secondary/60 border border-border/60 rounded px-2 py-0.5 text-syn-string w-28 sm:w-48 outline-none focus:border-primary/60 placeholder:text-muted-foreground/40"
          />
        </div>
        <div className="hover:bg-secondary/40 transition-colors pr-4" />
        <div className="hover:bg-secondary/40 transition-colors pr-4 flex items-center gap-2">
          <span className="whitespace-nowrap">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <button
            onClick={handleSend}
            disabled={!name || !email || !message}
            className="bg-syn-success/20 hover:bg-syn-success/30 text-syn-success px-3 py-0.5 rounded border border-syn-success/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            deploy(inquiry)  ▶
          </button>
          {sent && <span className="text-syn-success ml-2">✅ Inquiry deployed successfully!</span>}
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          {"}"}
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4" />
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <C>{"// Status"}</C>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> availability = <S>"Open to opportunities"</S>
        </div>
        <div className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          <K>val</K> status = <A>"🟢 Online"</A>
        </div>
        <span className="inline-block w-1.5 h-4 bg-primary cursor-blink ml-0.5" />
      </div>
    </div>
  );
};

/* ── File content renderers ── */
interface IDEEditorProps {
  activeFile: FileId;
  openFiles: FileId[];
  onTabClick: (file: FileId) => void;
  onTabClose: (file: FileId) => void;
}

const fileContents: Record<FileId, () => JSX.Element> = {
  "AboutMe.kt": () => (
    <Code lines={[
      <><K>class</K> <T>Developer</T> {"{"}</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> name = <S>"Abraham Addisu"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> role = <S>"Android Developer (Kotlin Specialist)"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> location = <S>"Addis Ababa, Ethiopia"</S></>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>fun</K> <F>aboutMe</F>(): <T>String</T> {"{"}</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<K>return</K> <S>"I build scalable, production-ready mobile applications "</S> +</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"focused on clean architecture, performance, and real-world impact."</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> expertise = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Kotlin"</S>, <S>"Jetpack Compose"</S>, <S>"Firebase"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"REST API Integration"</S>, <S>"Flutter"</S>, <S>"Odoo"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>{"}"}</>,
    ]} />
  ),

  "DagaRide.kt": () => (
    <Code lines={[
      <><K>object</K> <T>DagaRide</T> {"{"}</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> category = <S>"Production Ride-Hailing App"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> stack = <F>listOf</F>(<S>"Kotlin"</S>, <S>"Google Maps API"</S>, <S>"Firebase"</S>)</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>fun</K> <F>achievement</F>() = <S>"Successfully deployed on Google Play"</S></>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> features = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Real-time ride matching"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Live GPS tracking"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Driver-passenger interaction system"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>{"}"}</>,
    ]} />
  ),

  "InventoryScanner.kt": () => (
    <Code lines={[
      <><K>object</K> <T>InventoryScanner</T> {"{"}</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> category = <S>"Enterprise ERP Integration"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> stack = <F>listOf</F>(<S>"Flutter"</S>, <S>"Odoo"</S>, <S>"JSON-RPC"</S>)</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>fun</K> <F>impact</F>() = <S>"Optimized warehouse and inventory workflows"</S></>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> features = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Real-time scanning"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"ERP synchronization"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Logistics automation"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>{"}"}</>,
    ]} />
  ),

  "HireAI.kt": () => (
    <Code lines={[
      <><C>{"// 🌍 Built for African job markets"}</C></>,
      <><K>object</K> <T>HireAI</T> {"{"}</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> category = <S>"AI Recruitment Platform (African Context)"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> languages = <F>listOf</F>(<S>"Amharic"</S>, <S>"English"</S>)</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>fun</K> <F>innovation</F>() = <S>"Voice-based AI candidate evaluation"</S></>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> highlights = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Bilingual voice processing"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"AI scoring system"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Transparent evaluation audit trail"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>{"}"}</>,
    ]} />
  ),

  "Experience.kt": () => (
    <Code lines={[
      <><K>data class</K> <T>Experience</T>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> company: <T>String</T>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> role: <T>String</T>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> duration: <T>String</T>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> location: <T>String</T>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<K>val</K> responsibilities: <T>List</T>{"<"}<T>String</T>{">"},</>,
      <>)</>,
      <></>,
      <><K>val</K> experiences = <F>listOf</F>(</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<T>Experience</T>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company = <S>"Medco Technology Solutions"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role = <S>"Software Engineer Intern"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration = <S>"Feb 2026 - Present"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location = <S>"Addis Ababa, Ethiopia (On-site)"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsibilities = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Participating in requirement analysis, development, testing, and deployment"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Collaborating with cross-functional teams for medical and insurance software"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Applying best practices in software engineering and system design"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Contributing to real-world systems with focus on performance"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;),</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<T>Experience</T>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company = <S>"Self-Employed"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role = <S>"Android Developer"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration = <S>"Jul 2024 - Present"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location = <S>"Bahir Dar, Ethiopia (Hybrid)"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsibilities = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Designed and built Android apps using Kotlin and Jetpack Compose"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Implemented real-time features with Firebase and REST APIs"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Developed scalable local storage using RoomDB"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Focused on modern UI/UX, navigation, and localization"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;),</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<T>Experience</T>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company = <S>"BrainBite"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role = <S>"iOS Flutter Developer Intern"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration = <S>"Oct 2025 - Jan 2026"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location = <S>"Remote (Netherlands)"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsibilities = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Developed cross-platform mobile features using Flutter"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Contributed to educational platform for personalized learning"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Collaborated with international team remotely"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Worked with APIs and AI-based integrations"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;),</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<T>Experience</T>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;company = <S>"BiTec"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role = <S>"Embedded Systems Developer"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration = <S>"Dec 2024 - Oct 2025"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;location = <S>"Bahir Dar, Ethiopia (On-site)"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsibilities = <F>listOf</F>(</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Built real-time power monitoring with embedded sensors"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Integrated ZMPT101B, ACS712, and AHT20 sensors"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Displayed live metrics on TFT screen with SD logging"</S>,</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S>"Delivered functional hardware-software MVP"</S></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;)</>,
      <>)</>,
    ]} />
  ),

  "Skills.gradle": () => (
    <Code lines={[
      <><C>{"// build.gradle.kts"}</C></>,
      <><K>dependencies</K> {"{"}</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"kotlin"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"androidx.compose"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"firebase"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"rest-api"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"flutter"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"odoo"</S>)</>,
      <></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<C>{"// Embedded Systems Stack"}</C></>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"arduino-core"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"embedded-c"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"rtos-concepts"</S>)</>,
      <>&nbsp;&nbsp;&nbsp;&nbsp;<F>implementation</F>(<S>"sensor-interfaces"</S>)</>,
      <>{"}"}</>,
    ]} />
  ),

  "Education.md": () => (
    <Code lines={[
      <><C>{"# Education"}</C></>,
      <></>,
      <><P>**BSc in Software Engineering**</P></>,
      <><P>Bahir Dar University</P></>,
      <></>,
      <><C>{"## Achievements"}</C></>,
      <><A>🏆</A> <P>CoBuild Ethiopia AI Hackathon 2025 — 2nd Place Winner</P></>,
      <><A>🌍</A> <P>Hult Prize 2026 — National Finalist (Ongoing)</P></>,
    ]} />
  ),

  "Contact.info": () => <ContactForm />,
};

/* ── Code block with line numbers ── */
const Code = ({ lines }: { lines: JSX.Element[] }) => (
  <div className="flex text-xs leading-6">
    <div className="pr-4 text-right select-none shrink-0">
      {lines.map((_, i) => (
        <div key={i} className="text-ide-gutter">{i + 1}</div>
      ))}
    </div>
    <div className="flex-1 overflow-x-auto">
      {lines.map((line, i) => (
        <div key={i} className="hover:bg-secondary/40 transition-colors whitespace-nowrap pr-4">
          {line}
        </div>
      ))}
      <span className="inline-block w-1.5 h-4 bg-primary cursor-blink ml-0.5" />
    </div>
  </div>
);

const IDEEditor = ({ activeFile, openFiles, onTabClick, onTabClose }: IDEEditorProps) => {
  const FileContent = fileContents[activeFile];

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      {/* Tabs */}
      <div className="h-9 bg-ide-toolbar border-b border-border flex items-end overflow-x-auto ide-scrollbar shrink-0">
        {openFiles.map((file) => (
          <button
            key={file}
            onClick={() => onTabClick(file)}
            className={cn(
              "h-full flex items-center gap-1.5 px-2 sm:px-3 text-[11px] sm:text-xs border-r border-border shrink-0 transition-colors group",
              file === activeFile
                ? "bg-ide-tab-active text-foreground border-t-2 border-t-primary"
                : "bg-ide-tab-inactive text-muted-foreground hover:bg-secondary/40"
            )}
          >
            <span className="truncate max-w-[90px] sm:max-w-[120px]">{file}</span>
            <X
              className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity hover:text-destructive"
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(file);
              }}
            />
          </button>
        ))}
      </div>

      {/* Editor content */}
      <div className="flex-1 bg-ide-editor p-2 sm:p-4 overflow-auto ide-scrollbar">
        <FileContent />
      </div>
    </div>
  );
};

export default IDEEditor;
