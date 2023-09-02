import { Profile } from "../../componentes/Profile";
import { HomeContainer, SearchWrapper } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <Profile />
      <SearchWrapper>
        <div>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </div>
        <input type="text" id="search" />
      </SearchWrapper>
    </HomeContainer>
  )
}


