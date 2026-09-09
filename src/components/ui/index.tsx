import Link from 'next/link';
import { cn } from '@/lib/utils';

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-ink',
        variant === 'primary' &&
          'bg-white text-slate-950 shadow-glow hover:-translate-y-0.5 hover:bg-cyan-50',
        variant === 'secondary' &&
          'border border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15',
        variant === 'ghost' &&
          'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10',
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8"
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200/70 bg-white/75 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:shadow-black/20',
        className,
      )}
    >
      {children}
    </div>
  );
}
