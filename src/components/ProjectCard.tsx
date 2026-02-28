interface CardProps {
  title: string;
  description: string;
  image: string;
  sourceUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  sourceUrl,
  liveUrl,
}: CardProps) {
  return (
    <div className="bg-slate-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg w-sm transition m-3">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl text-slate-100 font-semibold mb-2">{title}</h3>

        <p className="text-slate-100 text-sm mb-4">{description}</p>

        <div className="flex gap-3">
          <a
            href={sourceUrl}
            className="text-slate-100 bg-slate-600 border-2 border-gray-500 p-1 rounded-md hover:bg-slate-400 transistion duration-150"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              className="text-green-600 border p-1 rounded-md hover:underline"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
