import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="font-sans">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-cyan-300">
        Selected work
      </p>
      <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Projects
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Resy Instant Booking Site"
          description="A reservation workflow that searches availability through Resy API endpoints and reduces the manual refresh cycle for hard-to-get bookings."
          challenge="Designed the search and booking flow around time-sensitive API responses while keeping the interface straightforward."
          technologies={[
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "API integration",
          ]}
          image="/ResyBot.webp"
          imageWidth={2940}
          imageHeight={1604}
          sourceUrl="https://github.com/nguyenhbryan/resy-bot-standalone"
        />
        <ProjectCard
          title="Portfolio Platform"
          description="This responsive portfolio, packaged for repeatable deployment with a Bun-based Docker build and a GHCR publishing workflow."
          challenge="Built a multi-architecture container pipeline that turns each main-branch update into a deployable image for homelab hosting."
          technologies={[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Docker",
            "GHCR",
          ]}
          image="/PortfolioPicTEMP.webp"
          imageWidth={1928}
          imageHeight={766}
          sourceUrl="https://github.com/nguyenhbryan/portfolio"
        />
      </div>
    </div>
  );
}
