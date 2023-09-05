import { Card } from "../../componentes/Card";
import { Profile } from "../../componentes/Profile";
import { CardWrapper, HomeContainer, SearchWrapper } from "./styles";
import { useState, useEffect } from "react"
import { IssueProps } from "../../interfaces";
import axios from "axios"
import { useParams } from "react-router-dom";

export function Home() {

  const { number } = useParams()
  const [issues, setIssue] = useState<IssueProps[]>([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    async function FetchIssues() {
      const response = await axios('https://api.github.com/search/issues?q=repo:maycowjordny/github-blog')
      setIssue(response.data.items)
    }
    FetchIssues()
  }, [])

  useEffect(() => {
    async function SearchIssues() {
      const response = await axios(`https://api.github.com/search/issues?q=${search}repo:maycowjordny/github-blog`)
      setIssue(response.data.items);

    }
    SearchIssues()
  }, [search])

  return (
    <HomeContainer>
      <Profile />
      <SearchWrapper>
        <div>
          <strong>Publicações</strong>
          <span>{issues.length} publicações</span>
        </div>
        <input
          type="text"
          id="search-input"
          placeholder="Buscar conteúdo"
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchWrapper>
      <CardWrapper>
        {
          issues.map(issue => (
            <Card
              key={issue.id}
              data={issue}
            />

          ))
        }
      </CardWrapper>
    </HomeContainer>
  )
}


