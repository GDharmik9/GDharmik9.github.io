import Link from 'next/link';
import React from 'react';

export default function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-300 dark:border-white/10"
    >
      <span className="text-cyan-500 [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <span>
        <span className="block text-sm text-slate-500">{label}</span>
        <span className="font-bold text-slate-950 dark:text-white">
          {value}
        </span>
      </span>
    </Link>
  );
}
