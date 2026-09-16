import "./App.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <div id="top" className="w-full flex flex-col">
      <section className="font-sans w-full grid items-center gap-12 py-16 sm:py-24 md:grid-cols-[1.2fr_0.8fr] md:py-28">
        <About />
      </section>
      <section id="experience" className="scroll-mt-20 py-16 sm:py-24">
        <Experience />
      </section>
      <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
        <ProjectsPage />
      </section>
      <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
        <Contact />
      </section>
    </div>
  );
}

export default App;
