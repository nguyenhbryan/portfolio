import type { ReactNode } from "react";
import Navbar from "../components/nav";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-linear-90 from-sky-800 to-indigo-900 text-slate-200">
      <Navbar />

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-0 flex-1">
        {children}
      </main>

      <footer className="border-t border-white/10"></footer>
    </div>
  );
}
