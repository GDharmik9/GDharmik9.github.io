import { ExternalLinkIcon } from '@/components/icons';
import { Reveal } from '@/components/motion';
import { GlassCard, Section } from '@/components/ui';
import Link from 'next/link';
import { projects } from '@/data/projects';
import React from 'react';

function Projects() {
  return (
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
                    <h3 className="mt-4 text-2xl font-black">{project.name}</h3>
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
  );
}

export default Projects;
