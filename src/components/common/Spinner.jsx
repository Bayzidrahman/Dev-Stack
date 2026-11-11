export default function Spinner({ label = 'Loading…' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-3 py-24 text-slate-500"
    >
      <span className="loading loading-spinner loading-lg text-pink-500" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
