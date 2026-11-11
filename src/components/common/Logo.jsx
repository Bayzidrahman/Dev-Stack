export default function Logo({ className = '', small = false, hideNameOnMobile = false }) {
  return (
    <a href="#home" aria-label="Dev Stack home" className={`flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid shrink-0 place-items-center bg-brand-gradient font-bold text-white ${
          small ? 'size-6 rounded-md text-[10px]' : 'size-8 rounded-lg text-xs'
        }`}
      >
        DS
      </span>
      <span
        className={`font-bold tracking-tight text-slate-950 ${small ? 'text-lg' : 'text-xl'} ${
          hideNameOnMobile ? 'hidden sm:inline' : ''
        }`}
      >
        Dev <span className="text-brand-gradient">Stack</span>
      </span>
    </a>
  );
}
