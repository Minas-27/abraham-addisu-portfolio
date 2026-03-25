import { useState, useCallback } from "react";
import IDETopBar from "@/components/ide/IDETopBar";
import IDESidebar, { type FileId } from "@/components/ide/IDESidebar";
import IDEEditor from "@/components/ide/IDEEditor";
import IDETerminal from "@/components/ide/IDETerminal";
import IDEStatusBar from "@/components/ide/IDEStatusBar";
import AVDEmulator from "@/components/ide/AVDEmulator";

const Index = () => {
  const [activeFile, setActiveFile] = useState<FileId>("AboutMe.kt");
  const [openFiles, setOpenFiles] = useState<FileId[]>(["AboutMe.kt"]);
  const [runCount, setRunCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emulatorOpen, setEmulatorOpen] = useState(true);

  const handleFileSelect = useCallback((file: FileId) => {
    setActiveFile(file);
    setOpenFiles((prev) => (prev.includes(file) ? prev : [...prev, file]));
    setSidebarOpen(false); // auto-close sidebar on mobile after selecting
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
    <div className="h-[100dvh] w-screen flex flex-col overflow-hidden bg-background">
      <IDETopBar onRun={() => setRunCount((c) => c + 1)} onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar - overlay on mobile, inline on desktop */}
        <div className={`
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative
          fixed top-10 bottom-0 left-0 z-50
          transition-transform duration-200 ease-in-out
        `}>
          <IDESidebar activeFile={activeFile} onFileSelect={handleFileSelect} />
        </div>

        <IDEEditor activeFile={activeFile} openFiles={openFiles} onTabClick={setActiveFile} onTabClose={handleTabClose} />

        {/* AVD Emulator Panel - hidden on mobile/tablet */}
        <div className="hidden lg:flex flex-col border-l border-border bg-ide-sidebar shrink-0">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-border">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Running Devices</span>
            <button
              onClick={() => setEmulatorOpen(!emulatorOpen)}
              className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {emulatorOpen ? "−" : "+"}
            </button>
          </div>
          {emulatorOpen && (
            <div className="flex-1 overflow-y-auto ide-scrollbar p-3">
              <AVDEmulator />
            </div>
          )}
        </div>
      </div>

      <IDETerminal runTriggered={runCount} />
      <IDEStatusBar />
    </div>
  );
};

export default Index;
