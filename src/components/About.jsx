import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-gray-600 dark:text-gray-300"
        >
          I am Sanketh, pursuing Master of Computer Applications (MCA) at RNS Institute of Technology (RNSIT), Bangalore. Passionate about building meaningful tech with Java, Python, SQL, and the modern web. I enjoy data analysis, IoT tinkering, and crafting delightful experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 grid sm:grid-cols-3 gap-4"
        >
          {[
            { k: 'Course', v: 'Master of Computer Applications (MCA)' },
            { k: 'College', v: 'RNS Institute of Technology (RNSIT), Bangalore' },
            { k: 'Focus', v: 'Data, IoT, and Web Development' },
          ].map((i) => (
            <div key={i.k} className="rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{i.k}</p>
              <p className="mt-1 font-medium">{i.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
