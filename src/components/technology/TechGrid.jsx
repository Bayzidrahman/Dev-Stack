import TechCard from './TechCard';

export default function TechGrid({ technologies, selectedIds, onAdd }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} isAdded={selectedIds.has(tech.id)} onAdd={onAdd} />
      ))}
    </div>
  );
}
