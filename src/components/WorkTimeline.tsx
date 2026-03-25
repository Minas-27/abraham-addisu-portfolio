import { motion } from "framer-motion";
import { Briefcase, Stethoscope, Cpu, Smartphone } from "lucide-react";

const experiences = [
  {
    icon: Stethoscope,
    role: "Software Engineer",
    company: "Medco Tech",
    period: "Current",
    description: "Building medical and insurance solutions — full-stack development with a focus on robust, compliant healthcare platforms.",
    tags: ["Medical", "Insurance", "Full-Stack"],
    active: true,
  },
  {
    icon: Smartphone,
    role: "iOS / Flutter Intern",
    company: "BrainBite",
    period: "2024",
    description: "Cross-platform mobile development — shipping polished iOS and Flutter applications with clean architecture patterns.",
    tags: ["iOS", "Flutter", "Mobile"],
    active: false,
  },
  {
    icon: Cpu,
    role: "Embedded Systems Developer",
    company: "BITEC",
    period: "2023",
    description: "Low-level hardware programming and embedded systems — IoT solutions and firmware development for specialized hardware.",
    tags: ["Embedded", "IoT", "C/C++"],
    active: false,
  },
];

const WorkTimeline = () => {
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
            <Briefcase className="w-5 h-5 text-kotlin" />
            <span className="text-sm font-mono text-kotlin uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-kotlin via-android to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Step circle */}
              <div className={`absolute left-3 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                exp.active
                  ? "border-android bg-android/20"
                  : "border-muted-foreground/30 bg-card"
              }`}>
                {exp.active && <span className="w-2.5 h-2.5 rounded-full bg-android animate-pulse-green" />}
                {!exp.active && <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />}
              </div>

              <div className="rounded-xl border border-border bg-card p-6 hover:border-kotlin/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <p className="text-kotlin font-medium">{exp.company}</p>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                    exp.active ? "bg-android/15 text-android" : "bg-muted text-muted-foreground"
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkTimeline;
