import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="font-sans h-max">
      <h1 className="text-5xl text-slate-100 mb-4">Projects</h1>
      <div className="flex flex-row">
        <ProjectCard
          title="Resy Instant Booking Site"
          description="A vertical-axis wind turbine inspired by a Möbius strip."
          image="/bigkhoa.png"
          sourceUrl="https://github.com/nguyenhbryan/resy-booking-site"
          liveUrl="https://yourdemo.com"
        />
        <ProjectCard
          title="Ongoing Project"
          description="-"
          image="/mobius.png"
          sourceUrl="https://github.com/yourrepo"
          liveUrl="https://yourdemo.com"
        />
      </div>
    </section>
  );
}
