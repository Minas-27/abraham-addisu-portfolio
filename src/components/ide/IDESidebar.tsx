import { useState } from "react";
import { ChevronRight, ChevronDown, FileText, FolderOpen, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

export type FileId = "AboutMe.kt" | "DagaRide.kt" | "InventoryScanner.kt" | "HireAI.kt" | "Experience.kt" | "Skills.gradle" | "Education.md" | "Contact.info";

interface IDESidebarProps {
  activeFile: FileId;
  onFileSelect: (file: FileId) => void;
}

const fileIcons: Record<string, string> = {
  ".kt": "text-syn-keyword",
  ".gradle": "text-syn-success",
  ".md": "text-syn-type",
  ".info": "text-syn-annotation",
};

const getIconColor = (name: string) => {
  const ext = name.substring(name.lastIndexOf("."));
  return fileIcons[ext] || "text-muted-foreground";
};

interface TreeNode {
  name: string;
  fileId?: FileId;
  children?: TreeNode[];
}

const fileTree: TreeNode[] = [
  {
    name: "src",
    children: [
      {
        name: "main",
        children: [
          { name: "AboutMe.kt", fileId: "AboutMe.kt" },
          {
            name: "projects",
            children: [
              { name: "DagaRide.kt", fileId: "DagaRide.kt" },
              { name: "InventoryScanner.kt", fileId: "InventoryScanner.kt" },
              { name: "HireAI.kt", fileId: "HireAI.kt" },
            ],
          },
          { name: "Experience.kt", fileId: "Experience.kt" },
          { name: "Skills.gradle", fileId: "Skills.gradle" },
          { name: "Education.md", fileId: "Education.md" },
          { name: "Contact.info", fileId: "Contact.info" },
        ],
      },
    ],
  },
];

const TreeItem = ({
  node,
  depth,
  activeFile,
  onFileSelect,
}: {
  node: TreeNode;
  depth: number;
  activeFile: FileId;
  onFileSelect: (f: FileId) => void;
}) => {
  const [open, setOpen] = useState(true);
  const isFolder = !!node.children;
  const isActive = node.fileId === activeFile;

  if (isFolder) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-1 py-0.5 px-1 text-xs hover:bg-secondary/60 rounded transition-colors"
          style={{ paddingLeft: `${depth * 12 + 4}px` }}
        >
          {open ? (
            <ChevronDown className="w-3 h-3 text-muted-foreground shrink-0" />
          ) : (
            <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0" />
          )}
          {open ? (
            <FolderOpen className="w-3.5 h-3.5 text-syn-annotation shrink-0" />
          ) : (
            <Folder className="w-3.5 h-3.5 text-syn-annotation shrink-0" />
          )}
          <span className="text-foreground truncate">{node.name}</span>
        </button>
        {open && node.children?.map((child) => (
          <TreeItem key={child.name} node={child} depth={depth + 1} activeFile={activeFile} onFileSelect={onFileSelect} />
        ))}
      </div>
    );
  }

  return (
    <button
      onClick={() => node.fileId && onFileSelect(node.fileId)}
      className={cn(
        "w-full flex items-center gap-1 py-0.5 px-1 text-xs rounded transition-colors",
        isActive ? "bg-primary/15 text-primary" : "text-foreground hover:bg-secondary/60"
      )}
      style={{ paddingLeft: `${depth * 12 + 16}px` }}
    >
      <FileText className={cn("w-3.5 h-3.5 shrink-0", getIconColor(node.name))} />
      <span className="truncate">{node.name}</span>
    </button>
  );
};

const IDESidebar = ({ activeFile, onFileSelect }: IDESidebarProps) => {
  return (
    <div className="w-52 lg:w-60 bg-ide-sidebar border-r border-border flex flex-col shrink-0 overflow-hidden">
      <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold border-b border-border">
        Project
      </div>
      <div className="flex-1 overflow-y-auto ide-scrollbar py-1 px-1">
        {fileTree.map((node) => (
          <TreeItem key={node.name} node={node} depth={0} activeFile={activeFile} onFileSelect={onFileSelect} />
        ))}
      </div>
    </div>
  );
};

export default IDESidebar;
