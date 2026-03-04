import "./App.css";
import Contact from "./pages/contact";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <div id="top" className="w-full flex flex-col">
      <section className="font-sans w-full min-h-screen">
        <div className="flex flex-col text-slate-200 text-xl w-full h-full">
          <h1 className="text-7xl py-2 text-slate-100">Hello!</h1>
          <p className="text-3xl pb-2">I'm Bryan Nguyen.</p>
          <p className="max-w-md">
            I'm an undergraduate at Virginia Tech, majoring in Computer
            Engineering. I am focused on creating apps that solve problems. I am
            quick to adapt, constantly learning new things. I've primarily built
            projects with Next.js and PostgreSQL.{" "}
          </p>
          <a
            href="#projects"
            className="text-right py-4 text-slate-300 underline hover:text-white"
          >
            View my projects here!
          </a>
        </div>
      </section>
      <section id="projects" className="scroll-mt-20">
        <ProjectsPage />
      </section>
      <section id="contact" className="scroll-mt-20 pt-12">
        <Contact />
      </section>
    </div>
  );
}

export default App;
