import { useState } from "react";
import { Play, Bug, Hammer, ChevronRight, Menu } from "lucide-react";

interface IDETopBarProps {
  onRun: () => void;
  onToggleSidebar?: () => void;
}

const IDETopBar = ({ onRun, onToggleSidebar }: IDETopBarProps) => {
  const [building, setBuilding] = useState(false);

  const handleRun = () => {
    setBuilding(true);
    onRun();
    setTimeout(() => setBuilding(false), 3000);
  };

  return (
    <div className="h-10 bg-ide-toolbar border-b border-border flex items-center justify-between px-2 sm:px-3 select-none shrink-0">
      {/* Left side */}
      <div className="flex items-center gap-1 text-xs text-muted-foreground overflow-hidden min-w-0">
        <button
          onClick={onToggleSidebar}
          className="md:hidden p-1 hover:bg-secondary rounded transition-colors shrink-0"
        >
          <Menu className="w-4 h-4 text-foreground" />
        </button>
        <span className="text-foreground font-semibold truncate">AbrahamAddisuPortfolio</span>
        <ChevronRight className="w-3 h-3 shrink-0 hidden sm:block" />
        <span className="hidden sm:inline">app</span>
        <ChevronRight className="w-3 h-3 shrink-0 hidden sm:block" />
        <span className="hidden sm:inline">src</span>
      </div>

      {/* IDE Controls */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={handleRun}
          disabled={building}
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded text-xs bg-syn-success/15 text-syn-success hover:bg-syn-success/25 transition-colors disabled:opacity-50"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span className="hidden xs:inline">{building ? "Running..." : "Run"}</span>
        </button>
        <button className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded text-xs text-muted-foreground hover:bg-secondary transition-colors">
          <Bug className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Debug</span>
        </button>
        <button className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded text-xs text-muted-foreground hover:bg-secondary transition-colors">
          <Hammer className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Build</span>
        </button>
      </div>
    </div>
  );
};

export default IDETopBar;
