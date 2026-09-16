export default function Experience() {
  return (
    <div>
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
        Where I've contributed
      </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Experience
      </h2>

      <article className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:p-10">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Virginia Tech · SuperDARN HF Radar Lab
                </h3>
                <p className="mt-1 text-lg text-cyan-200">
                  Software Developer Intern
                </p>
              </div>
              <time dateTime="2026-03" className="shrink-0 text-sm text-slate-400">
                March 2026 – Present
              </time>
            </div>
            <a
              href="https://vt.superdarn.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex font-medium text-cyan-300 hover:text-cyan-200 hover:underline"
            >
              Visit vt.superdarn.org ↗
            </a>

            <ul className="mt-6 list-disc space-y-4 pl-5 leading-7 text-slate-300 marker:text-cyan-300">
              <li>
                Engineered an end-to-end data delivery platform and REST API
                serving 5 TB of scientific radar data across four radar systems,
                with token authentication, rate limiting, usage telemetry,
                role-based access controls, and secure file delivery.
              </li>
              <li>
                Improved compute- and I/O-intensive data-processing throughput
                by 60% and reduced failures by 50% using multiprocessing,
                process isolation, read timeouts, caching, and automated data
                generation.
              </li>
              <li>
                Built and optimized 6+ scientific visualization pipelines used
                by 90+ users to analyze more than 60 TB of radar data, including
                caching, automated parameter selection, coordinate transforms,
                metadata overlays, and interactive interfaces.
              </li>
            </ul>
          </div>

          <img
            src="/Superdarn.webp"
            alt="SuperDARN website preview"
            width="2908"
            height="1594"
            loading="lazy"
            decoding="async"
            className="w-full self-center rounded-xl border border-white/10 bg-slate-900 object-cover shadow-xl"
          />
        </div>
      </article>
    </div>
  );
}
