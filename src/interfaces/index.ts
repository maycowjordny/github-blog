import { ReactNode } from "react"

export interface GithubContextType {

}

export interface GithubContextProps {
    children: ReactNode
}

export interface ProfileProps {
    avatar_url: string
    name?: string
    bio: string
    login: string
    company: string | null
    followers: number
}

export interface IssueProps {
    id: number
    number: number
    title: string
    created_at: string
    comments_url: string
    formatedDate: dateFns
    body: string
    comments: number
    user: ProfileProps
    html_url: string
}
