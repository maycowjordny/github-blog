import { styled } from "styled-components";

export const ProfileContainer = styled.div`
min-width:54rem;
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
padding: 2rem;
border-radius: 0.625rem;
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
background-color: ${props => props.theme.BASE_PROFILE};


@media(max-width:1000px){
    flex-direction: column;
    align-items: center;
    min-width: 32rem;
}
img{
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
}
`;

export const InfoUser = styled.div`
width: 100%;
#title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5rem;

    div{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
}

h1{
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
}

a{
    font-family:'Nunito';
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 160%; 
    text-transform: uppercase;
    color: ${props => props.theme.BLUE}
}

img{
   width: 0.75rem;
   height: 0.75rem;
}

p{
    font-weight: 400;
    line-height: 160%;
}

`;

export const InfoGithub = styled.div`

display: flex;
gap: 1.5rem;
align-items: center;
margin-top: 3.5rem;

div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

span{
    font-family: 'Nunito';
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;
    color: ${props => props.theme.BASE_SUBTITLE};
}

`;