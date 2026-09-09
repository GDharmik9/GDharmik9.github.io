type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
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
