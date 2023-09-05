import axios from "axios"

export class GithubClient {

    async fetchIssues(number: string) {
        const response = await axios.get(`https://api.github.com/repos/maycowjordny/github-blog/issues/${number}`)
        return response
    }


    async FetchInfoProfile() {
        const response = await axios('https://api.github.com/users/maycowjordny')
        return response.data
    }

}