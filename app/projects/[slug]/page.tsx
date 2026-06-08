import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, ExternalLinkIcon, GitHubMark, WebIcon } from "@/components/icons";
import { MermaidDiagram } from "@/components/mermaid-diagram";
import { Nav } from "@/components/nav";
import { ButtonLink, GlassCard } from "@/components/ui";
import { getProject, projects } from "@/lib/projects";
import { profile } from "@/lib/profile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { title: `${project.name} | Ghanshyam Dharmik`, description: project.description, url: `${profile.domain}/projects/${project.slug}/`, type: "article" },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-ink">
      <Nav />
      <section className="relative overflow-hidden bg-[#050816] px-6 pt-32 text-white lg:px-8">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-25 blur-3xl`} />
        <div className="bg-grid absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl pb-20">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"><ArrowLeftIcon className="h-4 w-4" /> Back to projects</Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.42fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">Case study</p>
              <h1 className="mt-4 text-5xl font-black tracking-tight md:text-7xl">{project.name}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-200">{project.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={project.repo}><GitHubMark className="mr-2 h-4 w-4" /> Repository</ButtonLink>
                {/* {project.demo && <ButtonLink href={project.demo} variant="secondary">Demo <ExternalLinkIcon className="ml-2 h-4 w-4" /></ButtonLink>} */}
                {project.demo && <ButtonLink href={project.demo}><WebIcon className="mr-2 h-4 w-4" /> Visit website</ButtonLink>}
              </div>
            </div>
            <GlassCard className="bg-white/10 text-white">
              <h2 className="text-xl font-black">Project facts</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <Fact label="Language" value={project.language} />
                <Fact label="Updated" value={project.updated} />
                <Fact label="Deployment" value={project.deployment} />
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">{tech}</span>)}</div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[.7fr_.3fr] lg:px-8">
        <div className="space-y-8">
          <CaseBlock title="Project summary">
            <p>{project.summary}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2"><Mini title="Why it exists" text={project.problem} /><Mini title="Who it helps" text={project.whoItHelps} /></div>
          </CaseBlock>
          <CaseBlock title="Technical overview">
            <p>{project.architecture}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3"><Mini title="APIs" text={project.apis} /><Mini title="Database" text={project.database} /><Mini title="Deployment" text={project.deployment} /></div>
          </CaseBlock>
          <CaseBlock title="Architecture diagram">
            <MermaidDiagram chart={project.diagram} />
          </CaseBlock>
          <CaseBlock title="Challenges & learnings">
            <div className="grid gap-6 md:grid-cols-2"><List title="Engineering challenges" items={project.challenges} /><List title="Learnings" items={project.learnings} /></div>
          </CaseBlock>
        </div>
        <aside className="space-y-6">
          <GlassCard>
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Key features</h2>
            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300">{project.features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />{feature}</li>)}</ul>
          </GlassCard>
          <GlassCard>
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Screenshots</h2>
            <div className={`mt-5 rounded-3xl bg-gradient-to-br ${project.gradient} p-5 text-white`}><div className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur"><p className="text-sm opacity-80">Visual placeholder</p><p className="mt-8 text-2xl font-black">{project.name}</p><p className="mt-2 text-sm opacity-80">Add product screenshots here when available.</p></div></div>
          </GlassCard>
        </aside>
      </section>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return <div><dt className="text-slate-400">{label}</dt><dd className="mt-1 font-bold text-white">{value}</dd></div>;
}
function CaseBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return <GlassCard><h2 className="mb-4 text-2xl font-black text-slate-950 dark:text-white">{title}</h2><div className="leading-7 text-slate-600 dark:text-slate-300">{children}</div></GlassCard>;
}
function Mini({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"><h3 className="font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm">{text}</p></div>;
}
function List({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="font-bold text-slate-950 dark:text-white">{title}</h3><ul className="mt-3 space-y-3">{items.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />{item}</li>)}</ul></div>;
}
