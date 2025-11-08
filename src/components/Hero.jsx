import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white dark:from-black/60 dark:via-black/40 dark:to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
        <div className="w-full lg:w-1/2 py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            <span className="block">👋 Hi, I’m Sanketh</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent mt-2">
              MCA Student • Developer • NCC Cadet
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 text-base sm:text-lg text-gray-600 dark:text-gray-300"
          >
            RNS Institute of Technology (RNSIT), Bangalore
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-shadow"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border border-indigo-200 dark:border-indigo-900 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/30 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 shadow-xl">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
