import { CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { CardBody, CardDetailsContainer, CardHeader, InfoGithub } from "./styles";
import arrow from "../../assets/icon.svg";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { IssueProps } from "../../interfaces";
import { formatDistanceToNow, parseISO } from "date-fns"
import { GithubClient } from "../../client/GithubClient"
import ptBr from "date-fns/locale/pt-BR"

export function Details() {
    const { number } = useParams()
    const navigate = useNavigate()
    const [issue, setIssue] = useState({} as IssueProps);
    const client = new GithubClient();

    useEffect(() => {
        async function fetchIssues() {
            if (number) {
                const response = await client.fetchIssues(number)
                setIssue(response.data)
            }
        }
        fetchIssues()
    }, [])

    if (!issue.created_at) return
    const formatedDate = (parseISO(issue.created_at))

    return (
        <CardDetailsContainer>
            <CardHeader>
                <div>
                    <button onClick={() => navigate(-1)}><CaretLeft size={16} /> voltar</button>
                    <a href={issue.html_url} target="_blank">ver no github <img src={arrow} /> </a>
                </div>
                <h1>{issue.title}</h1>
                <InfoGithub>
                    <div>
                        <GithubLogo size={16} color="#3a536b" weight="fill" />
                        <span>{issue.user.login}</span>
                    </div>
                    <div>
                        <CalendarBlank size={16} color="#3A536B" weight="fill" />
                        <span>{formatDistanceToNow(formatedDate, {
                            addSuffix: true,
                            locale: ptBr
                        })}</span>
                    </div>
                    <div>
                        <ChatCircle size={16} weight="fill" color="#3A536B" />
                        <span>{issue.comments} comentários</span>
                    </div>
                </InfoGithub>
            </CardHeader>
            <CardBody>
                <p>{issue.body}</p>
            </CardBody>
        </CardDetailsContainer>
    )
}