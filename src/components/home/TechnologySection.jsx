import Spinner from '../common/Spinner';
import TechGrid from '../technology/TechGrid';
import YourStack from '../stack/YourStack';
import useTechnologies from '../../hooks/useTechnologies';
import useStack from '../../hooks/useStack';

export default function TechnologySection() {
  const { technologies, loading, error, retry } = useTechnologies();
  const { stack, selectedIds, addToStack, removeFromStack, clearStack } = useStack();

  return (
    <section id="technologies" className="scroll-mt-20 pb-24 pt-8 lg:pt-12">
      <div className="container-page">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="mt-2 text-slate-500">Pick one technology per category to build your ideal stack.</p>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            {loading && <Spinner label="Loading technologies…" />}

            {!loading && error && (
              <div role="alert" className="alert alert-error alert-soft">
                <span>Couldn’t load technologies: {error}</span>
                <button type="button" onClick={retry} className="btn btn-sm">
                  Try again
                </button>
              </div>
            )}

            {!loading && !error && (
              <TechGrid technologies={technologies} selectedIds={selectedIds} onAdd={addToStack} />
            )}
          </div>

          <aside className="lg:sticky lg:top-24">
            <YourStack stack={stack} onRemove={removeFromStack} onClear={clearStack} />
          </aside>
        </div>
      </div>
    </section>
  );
}
