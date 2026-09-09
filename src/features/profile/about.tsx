import { Reveal } from '@/components/motion';
import { GlassCard, Section } from '@/components/ui';
import React from 'react';

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A frontend specialist building product-grade intelligent software."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {['Personal story', 'Core expertise', 'Development philosophy'].map(
          (title, index) => (
            <Reveal
              key={title}
              delay={index * 0.08}
            >
              <GlassCard className="h-full">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {index === 0 &&
                    'I’m a Bhopal-based software developer with 3+ years in the React ecosystem, transforming complex workflows into clean, scalable SaaS and enterprise experiences.'}
                  {index === 1 &&
                    'My work spans React, TypeScript, GraphQL, Firebase, AI ranking systems, civic assistants, venue intelligence, and automation-heavy developer workflows.'}
                  {index === 2 &&
                    'I research modern web standards, design for maintainability, and treat performance, accessibility, and clarity as product features—not afterthoughts.'}
                </p>
              </GlassCard>
            </Reveal>
          ),
        )}
      </div>
    </Section>
  );
}

export default About;
