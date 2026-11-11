import { useState } from 'react';
import Logo from '../common/Logo';
import { CloseIcon, MenuIcon } from '../common/Icons';
import { NAV_LINKS } from '../../constants/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const handleNavigate = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  const linkClass = (label) =>
    `text-sm font-medium transition-colors ${
      active === label ? 'text-brand-gradient' : 'text-slate-700 hover:text-slate-950'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      {/* Mobile: hamburger | logo | auth buttons.  Desktop: logo | links | auth buttons */}
      <div className="container-page grid h-16 grid-cols-[1fr_auto_1fr] items-center lg:h-20">
        <div className="flex items-center justify-self-start">
          <button
            type="button"
            className="btn btn-ghost btn-square -ml-2 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Logo className="hidden lg:flex" />
        </div>

        <div className="justify-self-center">
          <Logo className="lg:hidden" hideNameOnMobile />
          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => handleNavigate(label)}
                aria-current={active === label ? 'page' : undefined}
                className={linkClass(label)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-self-end gap-1 sm:gap-3">
          <button type="button" className="btn btn-ghost btn-sm font-medium sm:btn-md">
            Sign In
          </button>
          <button type="button"className="btn btn-sm rounded-full border-0 bg-brand-gradient px-4 font-semibold text-white shadow-none hover:opacity-90 sm:btn-md sm:px-6"> Sign Up
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="container-page flex flex-col py-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => handleNavigate(label)}
                  aria-current={active === label ? 'page' : undefined}
                  className={`block rounded-lg px-2 py-3 ${linkClass(label)}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
