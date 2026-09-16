import type { ReactNode } from "react";
import Navbar from "../components/nav";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-950 via-blue-950 to-indigo-950 text-slate-200">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to main content
      </a>
      <Navbar />

      <main
        id="main-content"
        className="w-full max-w-6xl mx-auto px-5 sm:px-8 flex-1"
      >
        {children}
      </main>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-slate-400">
        Built by Bryan Nguyen with React, TypeScript, and Tailwind CSS.
      </footer>
    </div>
  );
}
