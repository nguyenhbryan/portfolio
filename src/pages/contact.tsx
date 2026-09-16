export default function Contact() {
  return (
    <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-indigo-400/10 p-8 text-center sm:p-14">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
        Get in touch
      </p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Let's build something useful.
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        I'm interested in software engineering opportunities where I can work
        across product, APIs, and infrastructure. I'm based in Springfield,
        Virginia.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:nguyenbryan18@vt.edu"
          className="rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Email me
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-nguyen-h"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/nguyenhbryan"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          GitHub ↗
        </a>
        </div>
    </div>
  );
}
