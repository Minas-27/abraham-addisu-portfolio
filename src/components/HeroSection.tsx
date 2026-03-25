import { motion } from "framer-motion";
import { Smartphone, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--kotlin-purple) / 0.5) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--kotlin-purple) / 0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-kotlin/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-android/5 blur-[100px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow surface-glass mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-android animate-pulse-green" />
          <span className="text-sm font-mono text-android">Status: Online</span>
          <span className="text-muted-foreground text-sm font-mono">•</span>
          <span className="text-sm font-mono text-muted-foreground">Available for hire</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">Abraham Addisu</span>
          <br />
          <span className="text-gradient">Delivering High-Quality</span>
          <br />
          <span className="text-gradient">Android Solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Senior Android Developer & Software Engineer crafting performant,
          beautiful mobile experiences with Kotlin and Jetpack Compose.
        </motion.p>

        {/* FAB-style button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-kotlin/25 hover:shadow-xl hover:shadow-kotlin/30 transition-all duration-300 hover:scale-105"
          >
            <Smartphone className="w-5 h-5" />
            Hire Me
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-kotlin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
