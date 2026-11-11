import Logo from '../common/Logo';
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../constants/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-slate-100 bg-white">
      <div className="container-page pb-8 pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div id="about" className="scroll-mt-24 sm:col-span-2 lg:col-span-1">
            <Logo small />
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <ul className="mt-6 flex gap-5">
              {SOCIAL_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-slate-700 transition-colors hover:text-pink-600"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_LINKS.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">{title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-100 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="transition-colors hover:text-slate-700">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
