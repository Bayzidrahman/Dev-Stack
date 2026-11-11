import StackItem from './StackItem';

export default function YourStack({ stack, onRemove, onClear }) {
  const count = stack.length;

  return (
    <section aria-labelledby="your-stack-heading" className="card card-border bg-base-100 shadow-sm">
      <div className="card-body gap-0 p-5">
        <h3 id="your-stack-heading" className="text-lg font-bold text-slate-950">
          Your Stack
        </h3>
        <p className="mt-1 text-sm text-slate-400" aria-live="polite">
          {count} Technology Selected
        </p>

        {count === 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center">
            <p className="text-sm font-semibold text-slate-700">Your stack is empty</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Select “Add to Stack” on any technology to start building.
            </p>
          </div>
        ) : (
          <>
            <ul className="mt-5 flex flex-col gap-2.5">
              {stack.map((tech) => (
                <StackItem key={tech.id} tech={tech} onRemove={onRemove} />
              ))}
            </ul>
            <button
              type="button"
              onClick={onClear}
              className="btn btn-block mt-6 h-9 min-h-0 rounded-md border-red-300 bg-white text-sm font-semibold text-red-600 shadow-none hover:bg-red-50"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </section>
  );
}
