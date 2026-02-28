import { Outlet } from "react-router-dom";
import Navbar from "../components/nav";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-90 from-sky-800 to-indigo-900 text-slate-200">
      <Navbar />

      <main className="mx-64 max-w-5xl px-6 py-10 flex-1">
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
