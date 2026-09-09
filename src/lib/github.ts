/**
 * Shared GitHub repo logic — used at build time (static page generation)
 * and in the browser (latest-repos ribbon).
 */

export type GithubRepo = {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  topics: string[];
};

export const GITHUB_USER = "GDharmik9";

/** Repos that already have curated case studies — never shown in the ribbon. */
export const SHOWCASED = new Set([
  "gdharmik9.github.io",
  "boxes",
  "GDharmik9",
  "box-hunt",
  "React-TodoList",
  "chatbot-flow-builder",
  "carbon-cell-dashbord",
  "insynk-frontend",
  "interview-project",
  "interview-task",
  "my-app",
  "Project"

]);

/** Only repos with activity in the last 8 months count as "alive". */
export const MAX_AGE_MS = 8 * 30 * 24 * 60 * 60 * 1000;

export function filterLatestRepos(all: GithubRepo[]): GithubRepo[] {
  const now = Date.now();
  return all
    .filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        !SHOWCASED.has(repo.name.toLowerCase()) &&
        repo.description &&
        repo.description.trim().length > 0 &&
        // Only show repos that are either recently active or have at least one star.
        (now - new Date(repo.pushed_at).getTime() < MAX_AGE_MS ||
         // Or have at least one star, which is a proxy for activity.
          repo.stargazers_count > 0)
    )
    .sort(
      // Sort by most recently pushed first, then by name.
      (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    )
    .slice(0, 6);
}

export function repoToSlug(repo: GithubRepo): string {
  return repo.name.toLowerCase();
}

/** Build-time / server fetch of the latest shippable repos. */
export async function fetchLatestRepos(): Promise<GithubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`
    );
    if (!response.ok) return [];
    const all: GithubRepo[] = await response.json();
    return filterLatestRepos(all);
  } catch {
    return [];
  }
}

/** Build-time fetch of a single repo for its detail page. */
export async function fetchRepo(slug: string): Promise<GithubRepo | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${slug}`
    );
    if (!response.ok) {
      console.error(`[fetchRepo] ${slug} -> HTTP ${response.status}`);
      return null;
    }
    const repo: GithubRepo = await response.json();
    return repo;
  } catch (err) {
    console.error(`[fetchRepo] ${slug} -> threw:`, err);
    return null;
  }
}
