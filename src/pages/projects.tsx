import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="font-sans h-max min-h-screen">
      <h1 className="text-4xl sm:text-5xl text-slate-100 mb-4">Projects</h1>
      <div className="flex flex-col lg:flex-row">
        <ProjectCard
          title="Resy Instant Booking Site"
          description="Built a reservation automation tool around Resy API endpoints to search availability, reduce manual refreshes, and streamline booking hard-to-get restaurant reservations."
          image="/ResyBot.png"
          sourceUrl="https://github.com/nguyenhbryan/resy-bot-standalone"
        />
        <ProjectCard
          title="My Portfolio"
          description="Designed and deployed this React, Vite, and TailwindCSS portfolio with a Bun-based Docker build, Docker Compose support, and a GHCR publishing workflow for homelab deployment."
          image="/PortfolioPicTEMP.png"
          sourceUrl="https://github.com/nguyenhbryan/portfolio"
        />
      </div>
    </section>
  );
}
