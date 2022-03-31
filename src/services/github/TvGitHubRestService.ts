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

        return data
    }
    static async fetchUsernameRepos(username: string): Promise<ITvGitHubUsernameRepos[]> {
        let url = `https://api.github.com/users/${username}/repos`
        const response = await fetch(url)
        const data = await response.json()

        return data
    }
    static async fetchReposByUserRepo(users: string[][]): Promise<ITvGitHubUsernameRepos[]> {
        // TODO: Surly it needs work
        let promises: Promise<Response>[] = []
        let data: Array<Promise<any>> = []
        let result: Array<ITvGitHubUsernameRepos> = []

        users.forEach((user) => {
            let url = `https://api.github.com/repos/${user[0]}/${user[1]}`

            promises.push(fetch(url))
        })

        await Promise.all(promises)
            .then(function (promise: Response[]) {
                promise.forEach(function(response: Response) {
                    data.push(response.json())
                })
            })
        
        await Promise.all(data)
            .then(function(value){
                result = value
            })

        return result
    }
}
