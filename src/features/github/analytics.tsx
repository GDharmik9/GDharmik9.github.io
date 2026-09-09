'use client';

import { useEffect, useState } from 'react';
import { githubSnapshot } from '@/data/profile';
import { fetchGithubRepositories, fetchGithubUser } from '@/lib/github-client';

type RepoSummary = { stargazers_count: number; language: string | null };

export function GitHubAnalytics() {
  const [stats, setStats] = useState(githubSnapshot);

  useEffect(() => {
    async function load() {
      try {
        const [user, repositories] = await Promise.all([
          fetchGithubUser(),
          fetchGithubRepositories('updated'),
        ]);
        if (!user || !repositories) return;
        const repos: RepoSummary[] = repositories;
        const languages = Array.from(
          new Set(repos.map((repo) => repo.language).filter(Boolean)),
        ) as string[];
        setStats({
          ...githubSnapshot,
          repositories: user.public_repos ?? githubSnapshot.repositories,
          followers: user.followers ?? githubSnapshot.followers,
          following: user.following ?? githubSnapshot.following,
          stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
          topLanguages: languages.slice(0, 6),
        });
      } catch {
        setStats(githubSnapshot);
      }
    }
    load();
  }, []);

  const statCards = [
    ['Repositories', stats.repositories],
    ['Stars', stats.stars],
    ['Followers', stats.followers],
    ['Following', stats.following],
  ];

  return (
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            {statCards.map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white"
              >
                <div className="text-4xl font-black">{value}</div>
                <div className="mt-2 text-sm text-slate-300">{label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white">
            <h3 className="text-xl font-bold">Top languages & activity</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {stats.topLanguages.map((language) => (
                <span
                  key={language}
                  className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/20"
                >
                  {language}
                </span>
              ))}
            </div>
            <div
              className="mt-8 grid gap-1"
              style={{ gridTemplateColumns: 'repeat(26, minmax(0, 1fr))' }}
              aria-label="Stylized GitHub activity graph"
            >
              {Array.from({ length: 104 }).map((_, index) => (
                <div
                  key={index}
                  className="h-3 rounded-sm"
                  style={{
                    backgroundColor: [
                      '#172554',
                      '#1d4ed8',
                      '#06b6d4',
                      '#8b5cf6',
                    ][(index * 7) % 4],
                    opacity: 0.35 + ((index * 13) % 60) / 100,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
