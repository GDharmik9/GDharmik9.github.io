import { Reveal } from '@/components/motion';
import { GlassCard, Section } from '@/components/ui';
import React from 'react';
import { experience } from '@/data/profile';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="professional timeline"
    >
      <div className="relative space-y-6 before:absolute before:left-4 before:top-3 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-400 before:to-transparent">
        {experience.map((item, index) => (
          <Reveal
            key={item.role + item.company}
            delay={index * 0.08}
          >
            <div className="relative pl-12">
              <span className="absolute left-0 top-2 h-8 w-8 rounded-full border-4 border-white bg-cyan-400 shadow-glow dark:border-ink" />
              <GlassCard>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-cyan-500">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-white/10">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                  {item.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.wins.map((win) => (
                    <span
                      key={win}
                      className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-300"
                    >
                      {win}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
