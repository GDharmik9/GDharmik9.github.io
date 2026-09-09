import { GlassCard, Section } from '@/components/ui';
import React from 'react';
import { achievements } from '@/data/profile';

export default function Achievements() {
  return (
    <Section
      eyebrow="Certifications & achievements"
      title="Proof points and editable placeholders for future LinkedIn enrichment."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => (
          <GlassCard key={achievement}>
            <p className="font-bold text-slate-950 dark:text-white">
              {achievement}
            </p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
