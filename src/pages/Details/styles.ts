import { styled } from "styled-components";

export const CardDetailsContainer = styled.div`
max-width: 100rem;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 15rem 10.5rem;
`;

export const CardHeader = styled.div`
min-width: 100%;
align-items: center;
justify-content: center;
padding: 2rem;
border-radius: 0.625rem;
box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
background-color: ${props => props.theme.BASE_PROFILE};

div:nth-child(1){
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        display: flex;
        align-items: start;
        background: none;
        border: none;
        font-family: 'Nunito';
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 160%; 
        text-transform: uppercase;
        color: ${props => props.theme.BRAND_BLUE};
    }

}
h1{
    margin: 1.25rem 0 0.75rem;
}
`;

export const InfoGithub = styled.div`

display: flex;
gap: 1.5rem;
align-items: center;

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

export const CardBody = styled.div`

p{
    margin-top: 2.5rem;
}

`;