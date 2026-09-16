interface CardProps {
  title: string;
  description: string;
  challenge: string;
  technologies: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  sourceUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  challenge,
  technologies,
  image,
  imageWidth,
  imageHeight,
  sourceUrl,
  liveUrl,
}: CardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-xl transition hover:-translate-y-1 hover:border-cyan-300/30">
      <div className="w-full aspect-video overflow-hidden bg-slate-800">
        <img
          src={image}
          alt={`${title} interface preview`}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-3 leading-7 text-slate-300">{description}</p>
        <p className="mt-4 text-sm leading-6 text-slate-400">
          <span className="font-semibold text-slate-200">Technical focus:</span>{" "}
          {challenge}
        </p>

        <ul aria-label={`${title} technologies`} className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-6">
          <a
            href={sourceUrl}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source ↗
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
