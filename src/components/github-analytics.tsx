"use client";

import { useEffect, useState } from "react";
import { githubSnapshot } from "@/data/profile";

type Repo = { stargazers_count: number; language: string | null };

export function GitHubAnalytics() {
  const [stats, setStats] = useState(githubSnapshot);

  useEffect(() => {
    async function load() {
      try {
        const [userRes, repoRes] = await Promise.all([
          fetch("https://api.github.com/users/GDharmik9"),
          fetch("https://api.github.com/users/GDharmik9/repos?per_page=100&sort=updated"),
        ]);
        if (!userRes.ok || !repoRes.ok) return;
        const user = await userRes.json();
        const repos: Repo[] = await repoRes.json();
        const languages = Array.from(new Set(repos.map((repo) => repo.language).filter(Boolean))) as string[];
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
    ["Repositories", stats.repositories],
    ["Stars", stats.stars],
    ["Followers", stats.followers],
    ["Following", stats.following],
  ];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid grid-cols-2 gap-4">
        {statCards.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white">
            <div className="text-4xl font-black">{value}</div>
            <div className="mt-2 text-sm text-slate-300">{label}</div>
          </div>
        ))}
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white">
        <h3 className="text-xl font-bold">Top languages & activity</h3>
        <div className="mt-5 flex flex-wrap gap-3">
          {stats.topLanguages.map((language) => (
            <span key={language} className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 ring-1 ring-cyan-300/20">{language}</span>
          ))}
        </div>
        <div className="mt-8 grid gap-1" style={{ gridTemplateColumns: "repeat(26, minmax(0, 1fr))" }} aria-label="Stylized GitHub activity graph">
          {Array.from({ length: 104 }).map((_, index) => (
            <div key={index} className="h-3 rounded-sm" style={{ backgroundColor: ["#172554", "#1d4ed8", "#06b6d4", "#8b5cf6"][(index * 7) % 4], opacity: 0.35 + ((index * 13) % 60) / 100 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
