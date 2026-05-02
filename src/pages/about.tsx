export default function About() {
  return (
    <>
      <div className="flex flex-col text-slate-200 text-base sm:text-lg md:text-xl w-full md:max-w-md h-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl py-2 text-slate-100">
          Hello!
        </h1>
        <p className="text-2xl sm:text-3xl pb-2">I'm Bryan Nguyen.</p>
        <p className="max-w-md">
          I'm an undergraduate at Virginia Tech, majoring in Computer
          Engineering. I plan to graduate Spring 2028. I am focused on creating
          apps that solve problems. I am quick to adapt, constantly learning new
          things. I've primarily built projects with Next.js and
          PostgreSQL.{" "}
        </p>
        <a
          href="/Bryan%20Nguyen%20Resume.pdf"
          download
          className="text-slate-300 hover:text-white underline py-4"
        >
          Download my CV
        </a>
        <a
          href="#projects"
          className="text-slate-300 underline hover:text-white"
        >
          View my projects here!
        </a>
      </div>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <img
          src="/bryan.PNG"
          className="w-full max-w-xs sm:max-w-sm md:max-w-sm h-auto max-h-80 sm:max-h-96 md:max-h-[28rem] object-contain rounded-xl"
        />
      </div>
    </>
  );
}
