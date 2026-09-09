import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
}: ButtonLinkProps) {
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
