import { Card } from "../../componentes/Card";
import { Profile } from "../../componentes/Profile";
import { CardWrapper, HomeContainer, SearchWrapper } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <Profile />
      <SearchWrapper>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>
        <input
          type="text"
          id="search-input"
          placeholder="Buscar conteúdo" />
      </SearchWrapper>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </HomeContainer>
  )
}


