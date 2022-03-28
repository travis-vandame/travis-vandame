import type { 
    ITvGitHubRepoLanguages, 
    ITvGitHubRepoOwner, 
    ITvGitHubUsernameRepos,
    ITvGitHubRepoCommit 
} from "./types/index"

export abstract class TvGitHubRestApi {
    static async fetchRepoLanguages(owner: string, repo: string): Promise<ITvGitHubRepoLanguages>{
        let url = `https://api.github.com/repos/${owner}/${repo}/languages`
        const response = await fetch(url)
        const data = await response.json()
        
        return data
    }
    static async fetchOwnerRepoCommits(owner: string, repo: string): Promise<ITvGitHubRepoCommit[]>{
        let url = `https://api.github.com/repos/${owner}/${repo}/commits`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        return data
    }
    static async fetchUsernameRepos(username: string): Promise<ITvGitHubUsernameRepos[]>{
        let url = `https://api.github.com/users/${username}/repos`
        const response = await fetch(url)
        const data = await response.json()
        
        return data
    }
}
