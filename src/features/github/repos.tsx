'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ExternalLinkIcon, StarIcon, GitHubMark } from '@/components/icons';
import { filterLatestRepos, repoToSlug, type GithubRepo } from '@/lib/github';
import { fetchGithubRepositories } from '@/lib/github-client';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Dart: '#00B4AB',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  'Jupyter Notebook': '#DA5B0B',
};

/** Cache lifetime — the GitHub API is hit at most once per 30 minutes. */
const CACHE_KEY = 'latest-repos-v1';
const CACHE_TTL_MS = 30 * 60 * 1000;

type CacheEntry = { fetchedAt: number; repos: GithubRepo[] };

function readCache(): GithubRepo[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() - entry.fetchedAt > CACHE_TTL_MS) return null;
    return filterLatestRepos(entry.repos);
  } catch {
    return null;
  }
}

function writeCache(repos: GithubRepo[]) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ fetchedAt: Date.now(), repos }),
    );
  } catch {
    /* storage unavailable — ignore */
  }
}

export function LatestRepos() {
  const [repos, setRepos] = useState<GithubRepo[] | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  useEffect(() => {
    async function load() {
      const cached = readCache();
      if (cached && cached.length > 0) {
        setRepos(cached);
        return;
      }
      try {
        const all = await fetchGithubRepositories('pushed');
        if (!all) throw new Error('GitHub API unavailable');
        setRepos(filterLatestRepos(all));
        writeCache(all); // cache the full list; filter again on read
      } catch {
        setRepos([]);
      }
    }
    load();
  }, []);

  function updateArrows() {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScroll({
      left: el.scrollLeft > 8,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 8,
    });
  }

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [repos]);

  function scrollByCard(direction: 1 | -1) {
    scrollerRef.current?.scrollBy({
      left: direction * 340, // card width + gap
      behavior: 'smooth',
    });
  }

  if (repos !== null && repos.length === 0) return null;

  return (
    <div
      id="latest"
      className="border-t border-white/10 pt-10 pb-10"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200 z-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
          </span>
          Live from GitHub
        </p>
        <div className="flex gap-2">
          <Arrow
            direction="left"
            disabled={!canScroll.left}
            onClick={() => scrollByCard(-1)}
          />
          <Arrow
            direction="right"
            disabled={!canScroll.right}
            onClick={() => scrollByCard(1)}
          />
        </div>
      </div>
      <Ribbon
        scrollerRef={scrollerRef}
        repos={repos}
      />
    </div>
  );
}
function Ribbon({
  scrollerRef,
  repos,
}: {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  repos: GithubRepo[] | null;
}) {
  return (
    <div
      ref={scrollerRef}
      className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {repos === null
        ? Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex w-80 shrink-0 animate-pulse snap-start flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
            >
              <div className="h-6 w-2/3 rounded bg-white/10" />
              <div className="h-4 w-full rounded bg-white/10" />
              <div className="h-4 w-5/6 rounded bg-white/10" />
              <div className="mt-auto h-4 w-1/3 rounded bg-white/10" />
            </div>
          ))
        : repos.map((repo) => (
            <Link
              key={repo.name}
              href={`/projects/${repoToSlug(repo)}/`}
              className="group block w-80 shrink-0 snap-start"
            >
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-white/[0.09]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <GitHubMark className="h-5 w-5 text-cyan-200" />
                    <span className="break-all">{repo.name}</span>
                  </div>
                  <span className="whitespace-nowrap text-xs text-slate-400">
                    {new Date(repo.pushed_at).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-auto flex items-center gap-4 border-t border-white/10 pt-4 text-sm text-slate-400">
                  {repo.language && (
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor:
                            LANGUAGE_COLORS[repo.language] ?? '#94a3b8',
                        }}
                      />
                      {repo.language}
                    </span>
                  )}

                  <div className="ml-auto flex items-center gap-1 text-slate-300">
                    <StarIcon className="h-4 w-4 shrink-0" />
                    <span className="text-slate-400">
                      {repo.stargazers_count}
                    </span>
                  </div>

                  <div className="ml-auto flex shrink-0 items-center gap-1 whitespace-nowrap text-cyan-200 transition group-hover:underline">
                    <span className="whitespace-nowrap font-semibold text-cyan-200 group-hover:underline">
                      View details
                    </span>
                    <ExternalLinkIcon className="h-4 w-4 shrink-0" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
}

function Arrow({
  direction,
  disabled,
  onClick,
}: {
  direction: 'left' | 'right';
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={`Scroll ${direction}`}
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`h-4 w-4 ${direction === 'left' ? 'rotate-180' : ''}`}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}
