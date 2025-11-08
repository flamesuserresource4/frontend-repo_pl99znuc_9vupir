import { motion } from 'framer-motion';
import { Code2, Database, GitBranch, Cpu, BarChart3, Globe } from 'lucide-react';

const skills = [
  { name: 'Java', icon: <Code2 /> },
  { name: 'Python', icon: <Code2 /> },
  { name: 'SQL', icon: <Database /> },
  { name: 'Power BI', icon: <BarChart3 /> },
  { name: 'IoT', icon: <Cpu /> },
  { name: 'Git', icon: <GitBranch /> },
  { name: 'Data Analysis', icon: <BarChart3 /> },
  { name: 'Web Development', icon: <Globe /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-xl p-5 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-black/40 backdrop-blur shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 group-hover:scale-105 transition-transform">
                  {s.icon}
                </div>
                <span className="font-medium">{s.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
