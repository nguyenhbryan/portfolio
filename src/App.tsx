import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <div id="top" className="w-full flex flex-col">
      <section className="font-sans w-full min-h-screen flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        <About />
      </section>
      <section id="experience" className="scroll-mt-20">
        <Experience />
      </section>
      <section id="projects" className="scroll-mt-20">
        <ProjectsPage />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
    </div>
  );
}

export default App;
