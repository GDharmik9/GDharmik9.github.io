import { GlassCard } from '@/components/ui';
import ContactLink from '@/components/ui/contact-link';
import { GitHubMark, LinkedInMark, MailIcon } from '@/components/icons';
import { profile } from '@/data/profile';
import React from 'react';

function Social() {
  return (
    <GlassCard>
      <h3 className="text-2xl font-black text-slate-950 dark:text-white">
        Social presence
      </h3>
      <div className="mt-6 space-y-4">
        <ContactLink
          href={profile.github}
          icon={<GitHubMark />}
          label="GitHub"
          value="@GDharmik9"
        />
        <ContactLink
          href={profile.linkedin}
          icon={<LinkedInMark />}
          label="LinkedIn"
          value="@GDharmik9"
        />
        <ContactLink
          href={`mailto:${profile.email}`}
          icon={<MailIcon />}
          label="Email"
          value={profile.email}
        />
      </div>
    </GlassCard>
  );
}

export default Social;
