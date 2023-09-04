import { CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { CardBody, CardDetailsContainer, CardHeader, InfoGithub } from "./styles";
import arrow from "../../assets/icon.svg";

export function Details() {
    return (
        <CardDetailsContainer>
            <CardHeader>
                <div>
                    <button><CaretLeft size={16} /> voltar</button>
                    <a href="">ver no github <img src={arrow} /> </a>
                </div>
                <h1>JavaScript data types and data structures</h1>
                <InfoGithub>
                    <div>
                        <GithubLogo size={16} color="#3a536b" weight="fill" />
                        <span>maycow-jordny</span>
                    </div>
                    <div>
                        <CalendarBlank size={16} color="#3A536B" weight="fill" />
                        <span>Há 1 dia</span>
                    </div>
                    <div>
                        <ChatCircle size={16} weight="fill" color="#3A536B" />
                        <span>5 comentários</span>
                    </div>
                </InfoGithub>
            </CardHeader>
            <CardBody>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

                    Dynamic typing
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
            </CardBody>
        </CardDetailsContainer>
    )
}