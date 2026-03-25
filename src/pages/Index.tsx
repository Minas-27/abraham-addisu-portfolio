import { useState, useCallback } from "react";
import IDETopBar from "@/components/ide/IDETopBar";
import IDESidebar, { type FileId } from "@/components/ide/IDESidebar";
import IDEEditor from "@/components/ide/IDEEditor";
import IDETerminal from "@/components/ide/IDETerminal";
import IDEStatusBar from "@/components/ide/IDEStatusBar";

const Index = () => {
  const [activeFile, setActiveFile] = useState<FileId>("AboutMe.kt");
  const [openFiles, setOpenFiles] = useState<FileId[]>(["AboutMe.kt"]);
  const [runCount, setRunCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleFileSelect = useCallback((file: FileId) => {
    setActiveFile(file);
    setOpenFiles((prev) => (prev.includes(file) ? prev : [...prev, file]));
  }, []);

  const handleTabClose = useCallback((file: FileId) => {
    setOpenFiles((prev) => {
      const next = prev.filter((f) => f !== file);
      if (next.length === 0) return ["AboutMe.kt"];
      return next;
    });
    if (activeFile === file) {
      setActiveFile((prev) => {
        const remaining = openFiles.filter((f) => f !== file);
        return remaining.length > 0 ? remaining[remaining.length - 1] : "AboutMe.kt";
      });
    }
  }, [activeFile, openFiles]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      <IDETopBar onRun={() => setRunCount((c) => c + 1)} />

      <div className="flex-1 flex overflow-hidden">
        {/* Toggle sidebar on mobile */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden absolute top-11 left-1 z-50 text-[10px] px-1.5 py-0.5 bg-secondary rounded text-muted-foreground"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>

        {sidebarOpen && <IDESidebar activeFile={activeFile} onFileSelect={handleFileSelect} />}
        <IDEEditor activeFile={activeFile} openFiles={openFiles} onTabClick={setActiveFile} onTabClose={handleTabClose} />
      </div>

      <IDETerminal runTriggered={runCount} />
      <IDEStatusBar />
    </div>
  );
};

export default Index;
