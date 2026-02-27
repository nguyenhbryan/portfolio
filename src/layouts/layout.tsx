import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-linear-90 from-sky-900 to-indigo-900 text-slate-200">
      <header className="border-b border-white/10  sticky top-0">
        <nav className="max-w-6xl mx-auto px-6 py-4 justify-between flex">
            <NavLink to="/" className="text-white font-semibold">
              Bryan Nguyen
            </NavLink>
          <div>
            
            <NavLink to="/projects" className="px-3 hover:text-white">
              Projects
            </NavLink>
            <NavLink to="/about" className="px-3 hover:text-white">
              About
            </NavLink>
            <NavLink to="/contact" className="px-3 hover:text-white">
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        {/* This is where each page renders */}
        <Outlet />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-6 text-slate-400">
          © {new Date().getFullYear()} Bryan Nguyen
        </div>
      </footer>
    </div>
  );
}
