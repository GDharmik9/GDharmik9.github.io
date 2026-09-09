import type { GithubRepo } from '@/lib/github';

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_USER = 'GDharmik9';

type GithubUser = {
  public_repos?: number;
  followers?: number;
  following?: number;
};

let userRequest: Promise<GithubUser | null> | null = null;
const repositoryRequests = new Map<
  'pushed' | 'updated',
  Promise<GithubRepo[] | null>
>();

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export function fetchGithubUser(): Promise<GithubUser | null> {
  userRequest ??= fetchJson<GithubUser>(
    `${GITHUB_API_BASE}/users/${GITHUB_USER}`,
  );
  return userRequest;
}

export function fetchGithubRepositories(
  sort: 'pushed' | 'updated' = 'pushed',
): Promise<GithubRepo[] | null> {
  const existingRequest = repositoryRequests.get(sort);
  if (existingRequest) return existingRequest;

  const request = fetchJson<GithubRepo[]>(
    `${GITHUB_API_BASE}/users/${GITHUB_USER}/repos?per_page=100&sort=${sort}`,
  );
  repositoryRequests.set(sort, request);
  return request;
}
