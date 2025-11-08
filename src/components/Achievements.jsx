import { motion } from 'framer-motion';
import { Award, Medal, Target } from 'lucide-react';

const achievements = [
  {
    title: 'Git Training Certification',
    org: 'IIT Bombay',
    icon: <Award className="text-amber-500" />,
    desc: 'Completed official Git training with certification.'
  },
  {
    title: 'NCC Camps & Republic Day Walk',
    org: 'NCC',
    icon: <Medal className="text-indigo-500" />,
    desc: 'Active participation in multiple camps and parade events.'
  },
  {
    title: 'A Grade in Shooting and NCC activities',
    org: 'NCC',
    icon: <Target className="text-rose-500" />,
    desc: 'Achieved top grades in marksmanship and leadership activities.'
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Achievements
        </motion.h2>
        <div className="mt-10 relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400/60 via-fuchsia-400/60 to-rose-400/60" />
          <div className="space-y-8">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-2 sm:left-4 top-1.5 h-8 w-8 rounded-full bg-white/80 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10 grid place-items-center">
                  {a.icon}
                </div>
                <div className="rounded-xl p-5 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-black/40 backdrop-blur hover:shadow-xl transition-all">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{a.org}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
