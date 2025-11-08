import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

export default function HeaderIntro() {
  return (
    <div className="mt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300"
      >
        <Typewriter
          words={[
            '👋 Hi, I’m Sanketh | MCA Student | Developer | NCC Cadet',
            'Building AI + IoT projects with a data-driven mindset',
            'Loves Java, Python, SQL, and Web Dev',
          ]}
          speed={60}
          pause={1300}
          className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent font-semibold"
        />
      </motion.div>
    </div>
  );
}
