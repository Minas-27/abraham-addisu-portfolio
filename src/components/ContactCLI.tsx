import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send } from "lucide-react";

const presetCommands: Record<string, string> = {
  help: "Available commands: ping, email, github, linkedin, deploy <message>",
  ping: "🏓 Pong! Abraham is online and ready to connect.",
  email: "📧 abrahamaddisu@email.com — Drop me a line!",
  github: "🔗 github.com/abrahamaddisu",
  linkedin: "🔗 linkedin.com/in/abrahamaddisu",
};

const ContactCLI = () => {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Array<{ cmd: string; out: string }>>([
    { cmd: "whoami", out: "abraham-addisu — Senior Android Developer @ Addis Ababa" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let output = '❌ Command not found. Type "help" for available commands.';

    if (presetCommands[trimmed]) {
      output = presetCommands[trimmed];
    } else if (trimmed.startsWith("deploy ")) {
      const msg = input.trim().slice(7);
      output = `🚀 Inquiry deployed successfully!\n   Message: "${msg}"\n   Status: Abraham will review shortly.`;
    }

    setLines((prev) => [...prev, { cmd: input.trim(), out: output }]);
    setInput("");
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <Terminal className="w-5 h-5 text-android" />
            <span className="text-sm font-mono text-android uppercase tracking-widest">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-4 px-6 py-3 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-android/40" />
              <div className="w-3 h-3 rounded-full bg-android/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">abraham@portfolio ~ contact</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm max-h-[400px] overflow-y-auto space-y-4">
            {lines.map((line, i) => (
              <div key={i}>
                <p className="text-android">
                  <span className="text-muted-foreground">$ </span>
                  {line.cmd}
                </p>
                <p className="text-foreground whitespace-pre-line pl-2 mt-1">{line.out}</p>
              </div>
            ))}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-muted-foreground">$ </span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type "help" or "ping"...'
                className="flex-1 bg-transparent text-android outline-none placeholder:text-muted-foreground/40 caret-android"
              />
              <button type="submit" className="text-kotlin hover:text-android transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Try: <code className="text-kotlin">ping</code> · <code className="text-kotlin">email</code> · <code className="text-kotlin">deploy &lt;your message&gt;</code>
        </p>
      </div>
    </section>
  );
};

export default ContactCLI;
