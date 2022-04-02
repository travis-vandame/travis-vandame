export interface ITvGitHubRepoLanguages {
  Vue: number
  CSS: number
  TypeScript: number
  HTML: number
  JavaScript: number
}
export interface ITvGitHubRepoCommitAuthor {
  name: string
  email: string
  date: string
}
export interface ITvGitHubRepoCommitTree {
  sha: string
  url: string
}
export interface ITvGitHubRepoCommintVerification {
  verified: boolean
  reason: string
  signature: null
  payload: null
}
export interface ITvGitHubRepoOwner {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}
export interface ITvGitHubRepoCommit {
  sha: string
  node_id: string
  html_url: string
  commit: {
    author: ITvGitHubRepoCommitAuthor
    committer: ITvGitHubRepoCommitAuthor
    message: string
    tree: ITvGitHubRepoCommitTree
    url: string
    comment_count: number
    verification: ITvGitHubRepoCommintVerification
  }
  url: string
  comments_url: string
  author: ITvGitHubRepoOwner
  committer: ITvGitHubRepoOwner
  parents: []
}
export interface ITvGitHubUsernameRepos {
  id: number
  node_id: string
  name: string
  full_name: string
  private: string
  owner: ITvGitHubRepoOwner
  html_url: string
  description: string
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string
  size: string
  stargazers_count: string
  watchers_count: string
  language: string
  has_issues: string
  has_projects: string
  has_downloads: string
  has_wiki: string
  has_pages: string
  forks_count: string
  mirror_url: string
  archived: string
  disabled: string
  open_issues_count: string
  license: string
  allow_forking: string
  is_template: string
  topics: string
  visibility: string
  forks: string
  open_issues: number
  watchers: number
  default_branch: string
}
