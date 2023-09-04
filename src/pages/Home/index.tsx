import { Card } from "../../componentes/Card";
import { Profile } from "../../componentes/Profile";
import { CardWrapper, HomeContainer, SearchWrapper } from "./styles";
import { useState, useEffect } from "react"
import { IssueProps } from "../../interfaces";
import axios from "axios"
export function Home() {

  const [issues, setIssue] = useState<IssueProps[]>([])

  useEffect(() => {
    async function FetchIssues() {
      const response = await axios('https://api.github.com/search/issues?q=repo:maycowjordny/github-blog')
      setIssue(response.data.items)
    }
    FetchIssues()
  }, [])

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
          placeholder="Buscar conteúdo" />
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


