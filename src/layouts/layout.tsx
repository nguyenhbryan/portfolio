import type { ReactNode } from "react";
import Navbar from "../components/nav";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-linear-90 from-sky-800 to-indigo-900 text-slate-200">
      <Navbar />

      <main className="mx-64 max-w-5xl px-6 py-10 flex-1">{children}</main>

      <footer className="border-t border-white/10"></footer>
    </div>
  );
}
