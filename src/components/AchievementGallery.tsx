import { motion } from "framer-motion";
import { Trophy, Brain, MapPin, ExternalLink, Star } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hult Prize Winner 2026",
    subtitle: "Nova Tech & FaydaHealth",
    description: "Global entrepreneurship competition winner — building innovative healthcare technology solutions for underserved communities.",
    tag: "1st Place",
    tagColor: "bg-android/15 text-android",
    accentColor: "from-android/20 to-transparent",
    borderColor: "hover:border-android/40",
  },
  {
    icon: Brain,
    title: "CoBuild AI Hackathon",
    subtitle: "2nd Place Winner",
    description: "Developed AI-powered health solutions leveraging machine learning for diagnostic assistance and patient care optimization.",
    tag: "2nd Place",
    tagColor: "bg-kotlin/15 text-kotlin",
    accentColor: "from-kotlin/20 to-transparent",
    borderColor: "hover:border-kotlin/40",
  },
  {
    icon: MapPin,
    title: "Daga Ride",
    subtitle: "Live on Play Store",
    description: "Ride-hailing platform serving Bahir Dar — successfully deployed and serving real users with seamless Android experience.",
    tag: "Production",
    tagColor: "bg-android/15 text-android",
    accentColor: "from-android/10 to-transparent",
    borderColor: "hover:border-android/40",
    stats: [
      { label: "Users", value: "Active" },
      { label: "Platform", value: "Android" },
      { label: "City", value: "Bahir Dar" },
    ],
  },
];

const AchievementGallery = () => {
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
            <Star className="w-5 h-5 text-android" />
            <span className="text-sm font-mono text-android uppercase tracking-widest">Featured</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Achievement Gallery</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg ${a.borderColor}`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${a.accentColor}`} />

              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${a.tagColor}`}>
                  <a.icon className="w-6 h-6" />
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full ${a.tagColor}`}>
                  {a.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">{a.title}</h3>
              <p className="text-sm text-kotlin font-medium mb-3">{a.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.description}</p>

              {a.stats && (
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  {a.stats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className="text-sm font-semibold text-android">{s.value}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground group-hover:text-kotlin transition-colors">
                <span>View Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementGallery;
