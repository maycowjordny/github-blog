import { CardContainer } from "./styles";
import { formatDistanceToNow, parseISO } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
import { IssueProps } from "../../interfaces";
import { Link } from "react-router-dom";

export function Card(props: { data: IssueProps }) {

    const formatedDate = (parseISO(props.data.created_at))

    return (
        <Link to={`/details/${props.data.number}`}>
            <CardContainer>
                <div>
                    <h1>{props.data.title}</h1>
                    <span>{formatDistanceToNow(formatedDate, {
                        addSuffix: true,
                        locale: ptBr
                    })}</span>
                </div>
                <p>{props.data.body}</p>
            </CardContainer>
        </Link>
    )
}