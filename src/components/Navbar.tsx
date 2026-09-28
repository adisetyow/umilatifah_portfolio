import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import type { TranslationKey } from '@/data/translations';

const navItems: { id: string; key: TranslationKey }[] = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'education', key: 'nav.education' },
  { id: 'contact', key: 'nav.contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((n) => document.getElementById(n.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-base/80 backdrop-blur-xl border-b border-base'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="font-display text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            RP<span className="text-muted">W</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-base ${
                  activeSection === item.id ? 'text-base' : 'text-muted'
                }`}
              >
                {t(item.key)}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-current" />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="flex items-center border border-base rounded-full overflow-hidden">
              <button
                onClick={() => lang !== 'en' && toggleLang()}
                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  lang === 'en' ? 'bg-base text-bg-base' : 'text-muted hover:text-base'
                }`}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => lang !== 'id' && toggleLang()}
                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  lang === 'id' ? 'bg-base text-bg-base' : 'text-muted hover:text-base'
                }`}
                aria-label="Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-base text-muted hover:text-base hover:border-strong transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full border border-base text-muted hover:text-base transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1 border-t border-base pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-secondary text-base'
                      : 'text-muted hover:text-base hover:bg-secondary'
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
