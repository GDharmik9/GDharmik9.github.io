import { Reveal } from '@/components/motion';
import { GlassCard, Section } from '@/components/ui';
import React from 'react';
import { skills } from '@/data/profile';

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Inferred from repositories, profile data, and shipped product areas."
    >
      <div className="grid gap-6 lg:grid-cols-4">
        {skills.map((group, index) => (
          <Reveal
            key={group.group}
            delay={index * 0.06}
          >
            <GlassCard className="h-full">
              <h3 className="text-xl font-black text-slate-950 dark:text-white">
                {group.group}
              </h3>
              <div className="mt-6 space-y-5">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="text-cyan-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
