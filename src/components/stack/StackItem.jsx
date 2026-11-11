// import TechIcon from '../common/TechIcon';
// import { CloseIcon } from '../common/Icons';

// export default function StackItem({ tech, onRemove }) {
//   const { id, name, category, icon } = tech;

//   return (
//     <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5">
//       <TechIcon src={icon} name={name} className="size-7 shrink-0" />
//       <div className="min-w-0 flex-1">
//         <p className="truncate text-sm font-semibold leading-tight text-slate-900">{name}</p>
//         <p className="text-[11px] leading-tight text-slate-400">{category}</p>
//       </div>
//       <button
//         type="button"
//         onClick={() => onRemove(id)}
//         aria-label={`Remove ${name} from your stack`}
//         className="btn btn-ghost btn-xs btn-square text-slate-400 hover:text-slate-700"
//       >
//         <CloseIcon className="size-4" />
//       </button>
//     </li>
//   );
// }
