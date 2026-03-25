import { Mail, Phone } from "lucide-react";

const IDEStatusBar = () => {
  return (
    <div className="h-6 bg-ide-statusbar flex items-center justify-between px-3 text-[10px] text-primary-foreground select-none shrink-0">
      <div className="flex items-center gap-3">
        <span>Kotlin</span>
        <span className="opacity-60">|</span>
        <span>API 34</span>
        <span className="opacity-60">|</span>
        <span>Build: SUCCESS</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:flex items-center gap-1">
          <Mail className="w-2.5 h-2.5" />
          abrahamaddisu217@gmail.com
        </span>
        <span className="opacity-60 hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <Phone className="w-2.5 h-2.5" />
          +251-963048258
        </span>
      </div>
    </div>
  );
};

export default IDEStatusBar;
