import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Github, Linkedin, Instagram, Volume2, VolumeX } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [music, setMusic] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('Sending...');
    try {
      // For EmailJS, users should set their service/template/public key in environment or replace here.
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('Message sent successfully!');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('Failed to send. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Contact
          </motion.h2>
          <button
            onClick={() => setMusic((m) => !m)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-indigo-200 dark:border-indigo-900 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40"
          >
            {music ? <VolumeX size={18} /> : <Volume2 size={18} />}
            <span className="text-sm">{music ? 'Mute' : 'Play'} music</span>
          </button>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-black/40 backdrop-blur space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input name="from_name" required className="w-full px-4 py-2 rounded-lg bg-white/80 dark:bg-black/50 ring-1 ring-black/10 focus:ring-indigo-400 outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input name="reply_to" type="email" required className="w-full px-4 py-2 rounded-lg bg-white/80 dark:bg-black/50 ring-1 ring-black/10 focus:ring-indigo-400 outline-none" defaultValue="sanketh21@GMAIL.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea name="message" rows={5} required className="w-full px-4 py-2 rounded-lg bg-white/80 dark:bg-black/50 ring-1 ring-black/10 focus:ring-indigo-400 outline-none" placeholder="Say hello!" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50">
              <Send size={18} /> Send Message
            </button>
            {status && <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{status}</p>}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-black/40 backdrop-blur"
          >
            <p className="text-gray-600 dark:text-gray-300">Reach me at</p>
            <a href="mailto:sanketh21@GMAIL.com" className="mt-2 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Mail size={18} /> sanketh21@GMAIL.com
            </a>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg ring-1 ring-black/5 dark:ring-white/10 hover:bg-black/5 dark:hover:bg-white/10">
                <Github />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg ring-1 ring-black/5 dark:ring-white/10 hover:bg-black/5 dark:hover:bg-white/10">
                <Linkedin />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg ring-1 ring-black/5 dark:ring-white/10 hover:bg-black/5 dark:hover:bg-white/10">
                <Instagram />
              </a>
            </div>
          </motion.div>
        </div>
        {music && (
          <audio autoPlay loop className="hidden">
            <source src="https://cdn.pixabay.com/audio/2022/10/20/audio_3a8d9a5b29.mp3" type="audio/mpeg" />
          </audio>
        )}
      </div>
    </section>
  );
}
