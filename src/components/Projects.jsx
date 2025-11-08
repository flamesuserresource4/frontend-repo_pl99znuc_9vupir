import { motion } from 'framer-motion';
import { Cpu, MapPin, Leaf, Flame } from 'lucide-react';

const projects = [
  {
    title: 'Crop Prediction and Smart Advisory System',
    tags: ['AI', 'IoT', 'Geo-tagging'],
    icon: <Leaf className="text-green-500" />,
    desc: 'Predicts crop suitability and provides smart advisory using geo-tagged data and IoT signals.'
  },
  {
    title: 'LOG Gas Detection System',
    tags: ['IoT', 'Safety', 'Internship'],
    icon: <Flame className="text-orange-500" />,
    desc: 'Industrial gas monitoring prototype with real-time alerts and dashboard.'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-black/40 backdrop-blur overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-rose-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/60 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-200/60 dark:ring-indigo-900/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
