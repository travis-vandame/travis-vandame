import type { 
    ITvGitHubRepoLanguages, 
    ITvGitHubRepoOwner, 
    ITvGitHubUsernameRepos 
} from "./types/index"

export abstract class TvGitHubRestApi {
    static async fetchRepoLanguages(owner: string, repo: string): Promise<ITvGitHubRepoLanguages>{
        let url = `https://api.github.com/repos/${owner}/${repo}/languages`
        const response = await fetch(url)
        const data = await response.json()
        
        return data
    }

    static async fetchUsernameRepos(username: string): Promise<ITvGitHubUsernameRepos[]>{
        let url = `https://api.github.com/users/${username}/repos`
        const response = await fetch(url)
        const data = await response.json()
        
        return data
    }    
}
/*
interface IUser {
    id?: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}


interface IRequest {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: IUser
}

export abstract class UsersApi {
    static async getAllUsers(): Promise<IUser[]>{
        let url= 'https://reqres.in/api/users'
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
}
*/