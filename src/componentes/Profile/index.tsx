import { InfoGithub, InfoUser, ProfileContainer } from "./styles";
import arrow from "../../assets/icon.svg";
import { GithubLogo, Buildings, Users } from "@phosphor-icons/react";
import { useState, useEffect } from "react"
import { ProfileProps } from "../../interfaces";
import axios from "axios";
export function Profile() {
    const [profile, setProfile] = useState<ProfileProps>()

    useEffect(() => {
        async function FetchInfoProfile() {
            const response = await axios('https://api.github.com/users/maycowjordny')
            setProfile(response.data)
        }
        FetchInfoProfile()
    }, [])

    return (
        <ProfileContainer>

            <img src={profile?.avatar_url} alt="foto de perfil de maycow" />
            <InfoUser>
                <div id="title">
                    <h1>{profile?.name}</h1>
                    <div>
                        <a href="http://github.com/maycowjordny" target="_blank">GITHUB</a>
                        <img src={arrow} />
                    </div>
                </div>
                <p>{profile?.bio}</p>
                <InfoGithub>
                    <div>
                        <GithubLogo size={16} color="#3a536b" weight="fill" />
                        <span>{profile?.login}</span>
                    </div>
                    <div>
                        <Buildings size={16} color="#3a536b" weight="fill" />
                        <span>{profile?.company ? profile.company : "Não possui"}</span>
                    </div>
                    <div>
                        <Users size={16} color="#3a536b" weight="fill" />
                        <span>{profile?.followers}</span>
                    </div>
                </InfoGithub>
            </InfoUser>
        </ProfileContainer>
    )
}

