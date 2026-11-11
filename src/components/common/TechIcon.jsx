// import { useState } from 'react';

// /** Technology logo with a gradient initial as fallback if the image fails to load. */
// export default function TechIcon({ src, name, className = 'size-9' }) {
//   const [failed, setFailed] = useState(false);

//   if (!src || failed) {
//     return (
//       <span
//         aria-hidden="true"
//         className={`${className} grid place-items-center rounded-lg bg-brand-gradient text-sm font-bold text-white`}
//       >
//         {name.charAt(0)}
//       </span>
//     );
//   }

//   return (
//     <img
//       src={src}
//       alt=""
//       loading="lazy"
//       onError={() => setFailed(true)}
//       className={`${className} object-contain`}
//     />
//   );
// }
