import { Github, Linkedin, Instagram } from 'lucide-react';

export default function FloatingSocials() {
  const link = (href, label, Icon) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group p-2 rounded-xl bg-white/70 dark:bg-black/40 backdrop-blur ring-1 ring-black/5 dark:ring-white/10 shadow hover:-translate-y-0.5 hover:shadow-lg transition-all"
    >
      <Icon className="text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
    </a>
  );

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-2">
      {link('#', 'GitHub', Github)}
      {link('#', 'LinkedIn', Linkedin)}
      {link('#', 'Instagram', Instagram)}
    </div>
  );
}
