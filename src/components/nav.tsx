export default function Navbar() {
  return (
    <header
      className="
  sticky top-0 z-50
  bg-slate-950/80
  backdrop-blur-md
  border-b border-white/10
"
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between"
      >
        <a
          href="#top"
          className="font-semibold tracking-tight text-white hover:text-cyan-200"
        >
          Bryan Nguyen
        </a>
        <div className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
