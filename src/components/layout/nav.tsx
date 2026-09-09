import Link from "next/link";
import { GitHubMark } from "@/components/icons";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profile } from "@/data/profile";

export function Nav() {
  const links = ["About", "Skills", "Projects", "Analytics", "Experience", "Contact"];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-ink/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="font-black tracking-tight text-slate-950 dark:text-white">GD<span className="text-cyan-400">.</span></Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => <Link key={link} href={`/#${link.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition hover:text-cyan-500 dark:text-slate-300">{link}</Link>)}
        </div>
        <div className="flex items-center gap-3">
          <Link href={profile.github} aria-label="GitHub" className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white"><GitHubMark className="h-4 w-4" /></Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
