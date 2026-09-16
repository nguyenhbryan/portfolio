export default function About() {
  return (
    <>
      <div className="flex flex-col items-start text-slate-300">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
          Computer Engineering · Virginia Tech
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
          I build reliable web apps, automation, and infrastructure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
          I'm Bryan Nguyen, a Computer Engineering undergraduate graduating in
          Spring 2028. I turn messy workflows into practical software, with a
          focus on API-driven products, deployment pipelines, and accessible
          user experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            View selected work
          </a>
          <a
            href="/Bryan%20Nguyen%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            View résumé
          </a>
        </div>
        <ul aria-label="Technologies" className="mt-8 flex flex-wrap gap-2 text-sm">
          {[
            "TypeScript",
            "React",
            "Next.js",
            "PostgreSQL",
            "Docker",
            "Bun",
          ].map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-slate-300"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="/bryan.PNG"
          alt="Bryan Nguyen"
          width="429"
          height="536"
          fetchPriority="high"
          className="w-full max-w-xs rounded-2xl border border-white/10 object-cover shadow-2xl shadow-cyan-950/30 sm:max-w-sm"
        />
      </div>
    </>
  );
}
