import { motion } from "framer-motion";
import { Globe, Palette, Sparkles, Languages } from "lucide-react";

const ProjectBentoGrid = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-5 h-5 text-android" />
            <span className="text-sm font-mono text-android uppercase tracking-widest">Spotlight</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Project Spotlight</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 auto-rows-auto md:auto-rows-[200px]">
          {/* HireAI - Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-kotlin/40 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-kotlin/5 rounded-full blur-[80px] group-hover:bg-kotlin/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-kotlin/15 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-kotlin" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">HireAI</h3>
                  <p className="text-sm text-muted-foreground">AI-Powered Hiring Platform</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-lg">
                An intelligent hiring platform that leverages AI to streamline recruitment.
                Features natural language processing for resume parsing, smart candidate matching,
                and automated interview scheduling.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-kotlin/10 border border-kotlin/20">
                <Languages className="w-4 h-4 text-kotlin" />
                <span className="text-sm font-semibold text-kotlin">Bilingual: Amharic / English</span>
              </div>
              <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-android/15 text-android">AI-Powered</span>
            </div>
          </motion.div>

          {/* Abroid Recall - Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl border border-border p-8 flex flex-col justify-between hover:border-android/40 transition-colors group relative overflow-hidden"
            style={{ background: 'hsl(0 0% 4%)' }}
          >
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-android/5 rounded-full blur-[60px] group-hover:bg-android/10 transition-colors" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-android/15 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-android" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Abroid Recall</h3>
                  <p className="text-sm text-muted-foreground">Memory & Recall App</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A beautifully crafted memory recall application built with True-Black Material 3 design.
                Optimized for OLED displays with deep blacks and vibrant accent colors.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-foreground/10 text-foreground border border-foreground/10">
                True-Black M3
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-android/15 text-android">
                Jetpack Compose
              </span>
              <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-kotlin/15 text-kotlin">
                Kotlin
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBentoGrid;
