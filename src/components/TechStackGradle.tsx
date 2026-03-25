import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skills = [
  { name: "Kotlin", emoji: "🟣" },
  { name: "Jetpack Compose", emoji: "🎨" },
  { name: "Android SDK", emoji: "🤖" },
  { name: "Flutter", emoji: "💙" },
  { name: "Odoo ERP", emoji: "⚙️" },
  { name: "Firebase", emoji: "🔥" },
  { name: "Room DB", emoji: "💾" },
  { name: "Retrofit", emoji: "🌐" },
  { name: "Hilt / Dagger", emoji: "💉" },
  { name: "MVVM / Clean Arch", emoji: "🏗️" },
  { name: "Git & CI/CD", emoji: "🔄" },
  { name: "REST APIs", emoji: "📡" },
];

const TechStackGradle = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-5 h-5 text-kotlin" />
            <span className="text-sm font-mono text-kotlin uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card overflow-hidden"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-4 px-6 py-3 border-b border-border bg-secondary/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-android/40" />
              <div className="w-3 h-3 rounded-full bg-android/60" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">build.gradle.kts</span>
          </div>

          {/* Code block */}
          <div className="p-6 font-mono text-sm leading-loose">
            <p className="text-muted-foreground">
              <span className="text-kotlin">plugins</span> {"{"}
            </p>
            <p className="pl-6 text-muted-foreground">
              <span className="text-android">id</span>(<span className="text-foreground">"com.abraham.portfolio"</span>)
            </p>
            <p className="text-muted-foreground">{"}"}</p>
            <br />
            <p className="text-muted-foreground">
              <span className="text-kotlin">dependencies</span> {"{"}
            </p>
            {skills.map((skill, i) => (
              <motion.p
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="pl-6 text-muted-foreground hover:bg-kotlin/5 rounded px-2 -mx-2 cursor-default transition-colors"
              >
                <span className="text-android">implementation</span>(
                <span className="text-foreground">"{skill.emoji} {skill.name}"</span>)
              </motion.p>
            ))}
            <p className="text-muted-foreground">{"}"}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackGradle;
