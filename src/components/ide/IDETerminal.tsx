import { useState, useEffect, useRef } from "react";
import { Terminal, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface IDETerminalProps {
  runTriggered: number;
}

const initialLines = [
  { text: "> Initializing system...", color: "text-muted-foreground" },
  { text: "> Loading developer profile...", color: "text-muted-foreground" },
  { text: "> Connecting to services...", color: "text-muted-foreground" },
  { text: "> STATUS: READY ✅", color: "text-syn-success" },
];

const buildLines = [
  { text: "> ./gradlew build", color: "text-foreground" },
  { text: "> Compiling Kotlin...", color: "text-syn-keyword" },
  { text: "> Deploying Daga Ride...", color: "text-muted-foreground" },
  { text: "> STATUS: SUCCESS ✅", color: "text-syn-success" },
  { text: "> Running HireAI AI models...", color: "text-muted-foreground" },
  { text: "> STATUS: OPTIMIZED ⚡", color: "text-syn-annotation" },
  { text: "> BUILD SUCCESSFUL in 3s", color: "text-syn-success font-semibold" },
];

const IDETerminal = ({ runTriggered }: IDETerminalProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [lines, setLines] = useState(initialLines);
  const [animatingIdx, setAnimatingIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (runTriggered === 0) return;
    setLines([...initialLines]);
    let i = 0;
    setAnimatingIdx(0);
    const interval = setInterval(() => {
      if (i >= buildLines.length) {
        clearInterval(interval);
        setAnimatingIdx(-1);
        return;
      }
      const line = buildLines[i];
      setLines((prev) => [...prev, line]);
      i++;
      setAnimatingIdx(i);
    }, 400);
    return () => clearInterval(interval);
  }, [runTriggered]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  return (
    <div className={cn("bg-ide-terminal border-t border-border flex flex-col shrink-0 transition-all", collapsed ? "h-8" : "h-28 sm:h-36 lg:h-44")}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="h-8 px-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold hover:bg-secondary/30 transition-colors shrink-0"
      >
        <Terminal className="w-3 h-3" />
        <span>Logcat</span>
        {collapsed ? <ChevronUp className="w-3 h-3 ml-auto" /> : <ChevronDown className="w-3 h-3 ml-auto" />}
      </button>
      {!collapsed && (
        <div ref={scrollRef} className="flex-1 overflow-y-auto ide-scrollbar px-3 pb-2 text-xs leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className={cn(line.color, "transition-opacity duration-300")}>
              {line.text}
            </div>
          ))}
          <span className="inline-block w-1.5 h-3.5 bg-syn-success cursor-blink" />
        </div>
      )}
    </div>
  );
};

export default IDETerminal;
