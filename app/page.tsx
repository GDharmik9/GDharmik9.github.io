'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubMark,
  LinkedInMark,
  MailIcon,
  MapPinIcon,
  SparklesIcon,
} from '@/components/icons';
import { FloatingParticles, Reveal } from '@/components/motion';
import { GitHubAnalytics } from '@/components/github-analytics';
import { Nav } from '@/components/nav';
import { ButtonLink, GlassCard, Section } from '@/components/ui';
import {
  achievements,
  experience,
  githubSnapshot,
  profile,
  skills,
} from '@/lib/profile';
import { projects } from '@/lib/projects';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onContactMeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:ghanshyam@dharmik.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <main className="overflow-hidden">
      <Nav />
      <section className="relative min-h-screen bg-[#050816] px-6 pt-32 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,.35),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,.24),transparent_28%),linear-gradient(135deg,#050816,#0f1028_45%,#050816)]" />
        <div className="bg-grid absolute inset-0 animate-grid opacity-30" />
        <FloatingParticles />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 pb-24 lg:grid-cols-[1.08fr_.92fr]">
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
                    <span className="text-cyan-200">&quot;Ghanshyam&quot;</span>
                    ,
                  </p>
                  <p className="pl-4">
                    focus: [
                    <span className="text-cyan-200">&quot;React&quot;</span>,{' '}
                    <span className="text-cyan-200">&quot;AI&quot;</span>,{' '}
                    <span className="text-cyan-200">
                      &quot;Automation&quot;
                    </span>
                    ],
                  </p>
                  <p className="pl-4">
                    ships:{' '}
                    <span className="text-emerald-300">"premium products"</span>
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
      </section>

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

      <Section
        id="projects"
        eyebrow="Featured projects"
        title="Five recent, meaningful repositories rewritten as professional case studies."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.05}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition duration-300 group-hover:-translate-y-2 group-hover:border-cyan-300/50">
                  <div
                    className={`h-44 bg-gradient-to-br ${project.gradient} p-6`}
                  >
                    <div className="rounded-2xl border border-white/20 bg-white/15 p-4 text-white backdrop-blur">
                      <p className="text-sm opacity-80">
                        {project.language} • Updated {project.updated}
                      </p>
                      <h3 className="mt-4 text-2xl font-black">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="leading-7 text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-6 text-sm font-bold text-cyan-500">
                      <span>Read case study</span>
                      <ExternalLinkIcon className="h-4 w-4" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <section
        id="analytics"
        className="bg-[#050816] py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
              GitHub analytics
            </p>
            <h2 className="text-3xl font-black text-white md:text-5xl">
              Live GitHub API stats with graceful static fallbacks.
            </h2>
          </div>
          <GitHubAnalytics />
        </div>
      </section>

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

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s build a fast, intelligent, beautifully engineered product."
      >
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <GlassCard>
            <h3 className="text-2xl font-black text-slate-950 dark:text-white">
              Social presence
            </h3>
            <div className="mt-6 space-y-4">
              <ContactLink
                href={profile.github}
                icon={<GitHubMark />}
                label="GitHub"
                value="github.com/GDharmik9"
              />
              <ContactLink
                href={profile.linkedin}
                icon={<LinkedInMark />}
                label="LinkedIn"
                value="linkedin.com/in/gdharmik9"
              />
              <ContactLink
                href={`mailto:${profile.email}`}
                icon={<MailIcon />}
                label="Email"
                value={profile.email}
              />
            </div>
          </GlassCard>

          <GlassCard>
            <form
              className="grid gap-4"
              onSubmit={(e) => onContactMeSubmit(e)}
            >
              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10"
                placeholder="Your name"
                aria-label="Your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10"
                placeholder="Email address"
                aria-label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
              />
              <textarea
                className="min-h-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/10"
                placeholder="Tell me about your project"
                aria-label="Project message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
              <button
                type="submit"
                className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white dark:bg-white dark:text-slate-950"
              >
                Send message
              </button>
            </form>
          </GlassCard>
        </div>
      </Section>

      <footer className="border-t border-slate-200 px-6 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-600 dark:text-slate-400 md:flex-row">
          <p>
            © 2026 Ghanshyam Dharmik. Built with Next.js, TypeScript, Tailwind
            CSS, and GitHub Pages.
          </p>
          <div className="flex gap-4">
            <Link href="#projects">Projects</Link>
            <Link href={profile.github}>GitHub</Link>
            <Link href={profile.linkedin}>LinkedIn</Link>
          </div>
        </div>
      </footer>
    </main>
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

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-300 dark:border-white/10"
    >
      <span className="text-cyan-500 [&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      <span>
        <span className="block text-sm text-slate-500">{label}</span>
        <span className="font-bold text-slate-950 dark:text-white">
          {value}
        </span>
      </span>
    </Link>
  );
}
