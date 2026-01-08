export type ResponseSchema = Commit[];

export interface Commit {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: CommitDetails;
  author: SimpleUser | unknown | null;
  committer: SimpleUser | unknown | null;
  parents: ParentCommit[];
  stats?: CommitStats;
  files?: DiffEntry[];
}

export interface CommitDetails {
  url: string;
  author: GitUser | null;
  committer: GitUser | null;
  message: string;
  comment_count: number;
  tree: CommitTree;
  verification?: Verification;
}

export interface GitUser {
  name: string;
  email: string;

}

export interface CommitTree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  payload: string | null;
  signature: string | null;
  verified_at: string | null;
}

export interface SimpleUser {
  name?: string | null;
  email?: string | null;
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string | null;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  starred_at?: string;
  user_view_type?: string;
}

export interface ParentCommit {
  sha: string;
  url: string;
  html_url?: string;
}

export interface CommitStats {
  additions: number;
  deletions: number;
  total: number;
}

export interface DiffEntry {
  sha: string | null;
  filename: string;
  status: DiffStatus;
  additions: number;
  deletions: number;
  changes: number;
  blob_url: string;
  raw_url: string;
  contents_url: string;
  patch?: string;
  previous_filename?: string;
}

export type DiffStatus =
  | 'added'
  | 'removed'
  | 'modified'
  | 'renamed'
  | 'copied'
  | 'changed'
  | 'unchanged';
