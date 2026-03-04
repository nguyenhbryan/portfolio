import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="font-sans h-max min-h-screen">
      <h1 className="text-4xl sm:text-5xl text-slate-100 mb-4">Projects</h1>
      <div className="flex flex-col lg:flex-row">
        <ProjectCard
          title="Resy Instant Booking Site"
          description="This website utilizes Resy API endpoints to effortlessly find and book hard-to-get reservations."
          image="/bigkhoa.png"
          sourceUrl="https://github.com/nguyenhbryan/resy-booking-site"
        />
        <ProjectCard
          title="My Portfolio"
          description="It's this website! It is containerized with Docker and runs on my home server. Check out the source code."
          image="/PortfolioPicTEMP.png"
          sourceUrl="https://github.com/yourrepo"
        />
      </div>
    </section>
  );
}
