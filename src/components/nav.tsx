import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="
  sticky top-0 z-50
  bg-gradient-to-r from-sky-800/90 to-indigo-900/90
  backdrop-blur-md
  border-b border-white/10
"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 justify-center flex">
        <div>
          <NavLink to="/" className="px-3 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/projects" className="px-3 hover:text-white">
            Projects
          </NavLink>
          <NavLink to="/contact" className="px-3 hover:text-white">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
