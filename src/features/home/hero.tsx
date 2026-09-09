import {
  ArrowRightIcon,
  GitHubMark,
  MapPinIcon,
  SparklesIcon,
} from '@/components/icons';
import { FloatingParticles, Reveal } from '@/components/motion';
import { ButtonLink } from '@/components/ui';
import { LatestRepos } from '@/features/github/repos';
import { githubSnapshot, profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050816] px-6 pt-32 text-white lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,.35),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,.24),transparent_28%),linear-gradient(135deg,#050816,#0f1028_45%,#050816)]" />
      <div className="bg-grid absolute inset-0 animate-grid opacity-30" />
      <FloatingParticles />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <SparklesIcon className="h-4 w-4" /> Available for high-impact
            frontend, full-stack, and AI product work
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
              Ghanshyam Dharmik
            </span>
          </h1>
          <p className="mt-6 text-xl font-semibold text-cyan-100 md:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="#projects">
              View Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
            >
              Contact Me
            </ButtonLink>
            <ButtonLink
              href={profile.github}
              variant="secondary"
            >
              <GitHubMark className="mr-2 h-4 w-4" /> GitHub
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 text-cyan-300" />{' '}
              {profile.location}
            </span>
            <span>{profile.availability}</span>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-cyan-400/30 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-glow backdrop-blur-2xl">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 font-mono text-sm text-slate-200 ring-1 ring-white/10">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <p>
                  <span className="text-violet-300">const</span> engineer ={' '}
                  {'{'}
                </p>
                <p className="pl-4">
                  name:{' '}
                  <span className="text-cyan-200">&quot;Ghanshyam&quot;</span>,
                </p>
                <p className="pl-4">
                  focus: [
                  <span className="text-cyan-200">&quot;React&quot;</span>,{' '}
                  <span className="text-cyan-200">&quot;AI&quot;</span>,{' '}
                  <span className="text-cyan-200">&quot;Automation&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  ships:{' '}
                  <span className="text-emerald-300">
                    &quot;premium products&quot;
                  </span>
                  ,
                </p>
                <p>{'}'}</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <Stat
                  value={`${githubSnapshot.repositories}+`}
                  label="Repos"
                />
                <Stat
                  value="3+"
                  label="Years"
                />
                <Stat
                  value="30%"
                  label="Perf gain"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <LatestRepos />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center">
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs text-slate-300">{label}</div>
    </div>
  );
}
