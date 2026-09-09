import { cn } from '@/lib/utils';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
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
