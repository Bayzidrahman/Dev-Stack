// Full class names are written out so Tailwind can detect them.
const BADGE_STYLES = {
  Popular: 'bg-sky-50 text-sky-600',
  Versatile: 'bg-emerald-50 text-emerald-600',
  Fast: 'bg-orange-50 text-orange-500',
  'Full-Stack': 'bg-violet-50 text-violet-600',
  Standard: 'bg-emerald-50 text-emerald-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Cache: 'bg-red-50 text-red-500',
  Ubiquitous: 'bg-amber-50 text-amber-600',
  Essential: 'bg-sky-50 text-sky-600',
  Robust: 'bg-sky-50 text-sky-600',
  Modern: 'bg-teal-50 text-teal-600',
  Containers: 'bg-sky-50 text-sky-600',
};

const DEFAULT_STYLE = 'bg-slate-100 text-slate-600';

export const getBadgeStyle = (badge) => BADGE_STYLES[badge] ?? DEFAULT_STYLE;
