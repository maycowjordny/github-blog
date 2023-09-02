import { HeaderContainer } from "./styles";
import sideEffect from "../../assets/effect.svg"
import sideEffect2 from "../../assets/effect2.svg"
import logo from "../../assets/terminal-solid 1.svg"

export function Header() {
    return (
        <HeaderContainer>
            <img src={sideEffect} />
            <div>
                <img src={logo} />
                <h1>GITHUB BLOG</h1>
            </div>
            <img src={sideEffect2} />
        </HeaderContainer>
    )
}