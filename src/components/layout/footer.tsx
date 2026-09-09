import Link from 'next/link';
import React from 'react';
import { profile } from '@/data/profile';

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
        <p>
          © 2026 Ghanshyam Dharmik. Built with Next.js, TypeScript, Tailwind
          CSS, and GitHub Pages.
        </p>
        <div className="flex gap-4">
          <Link href="#projects">Projects</Link>
          <Link href={profile.github}>GitHub</Link>
          <Link href={profile.linkedin}>LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
