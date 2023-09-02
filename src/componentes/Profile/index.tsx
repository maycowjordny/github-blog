import { InfoGithub, InfoUser, ProfileContainer } from "./styles";
import arrow from "../../assets/icon.svg";
import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";
export function Profile() {

    return (
        <ProfileContainer>
            <img src="http://github.com/maycowjordny.png" alt="foto de perfil de maycow" />
            <InfoUser>
                <div id="title">
                    <h1>Maycow Jordny</h1>
                    <div>
                        <a href="http://github.com/maycow-jordny">GITHUB</a>
                        <img src={arrow} />
                    </div>
                </div>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <InfoGithub>
                    <div>
                        <GithubLogo size={16} color="#3a536b" weight="fill" />
                        <span>maycow-jordny</span>
                    </div>
                    <div>
                        <Buildings size={16} color="#3a536b" weight="fill" />
                        <span>Rocketseat</span>
                    </div>
                    <div>
                        <Users size={16} color="#3a536b" weight="fill" />
                        <span>Seguidores</span>
                    </div>
                </InfoGithub>
            </InfoUser>
        </ProfileContainer>
    )
}

