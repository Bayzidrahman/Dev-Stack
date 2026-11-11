
import heroImage from '../../assets/banner-stack.png';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tighter text-slate-950 sm:text-6xl xl:text-[64px]">
            Build Your Ideal
            <span className="block w-fit pb-1 text-brand-gradient">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put
            together the stack that fits your next project.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="btn h-11 rounded-lg border-0 bg-brand-gradient px-5 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="btn h-11 rounded-lg border-slate-200 bg-white px-9 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <img
          src={heroImage}
          width="400"
          height="390"
          alt="Isometric illustration of layered development stack"
          className="mx-auto w-full max-w-sm drop-shadow-xl lg:max-w-md"
        />
      </div>
    </section>
  );
}
