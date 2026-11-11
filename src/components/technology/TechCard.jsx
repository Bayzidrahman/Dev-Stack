import TechIcon from '../common/TechIcon';
import { StarIcon } from '../common/Icons';
import { getBadgeStyle } from '../../constants/badgeStyles';

export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <article className="card card-border h-full bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="card-body gap-0 p-5">
        <div className="flex items-start justify-between">
          <TechIcon src={icon} name={name} className="size-9" />
          <span className={`badge badge-sm border-0 px-3 font-medium ${getBadgeStyle(badge)}`}>{badge}</span>
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-950">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{description}</p>

        <div className="mt-4 flex items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs">
          <span className="badge badge-sm rounded border-slate-200 bg-slate-50 font-medium text-slate-600">
            {category}
          </span>
          <span className="text-slate-400">{difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <StarIcon className="size-3.5 text-amber-400" />
            {rating.toFixed(1)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className="btn btn-block mt-4 h-10 rounded-lg border-0 bg-slate-950 text-sm font-medium text-white shadow-none hover:bg-slate-800 disabled:cursor-not-allowed disabled:border disabled:border-emerald-200 disabled:bg-emerald-50 disabled:text-emerald-700"
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  );
}
