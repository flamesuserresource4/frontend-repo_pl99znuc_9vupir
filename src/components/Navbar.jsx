import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 dark:bg-black/40 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 shadow-inner"></div>
          <span className="font-semibold tracking-tight text-lg">Sanketh • Portfolio</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleNavClick(s.id)}
              className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {s.label}
            </button>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-transparent hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-2 rounded-lg border border-transparent hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/40 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-black/40">
          <div className="px-4 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleNavClick(s.id)}
                className="text-left py-2 px-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
