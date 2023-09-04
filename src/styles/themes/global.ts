import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body::before{
position: absolute;
content:"";
display: block;
width: 100%;
height: 18.5rem;
background-color: ${props => props.theme.BASE_PROFILE};
z-index: -1;
}

body{
    font-family: 'Nunito';
    background-color: ${props => props.theme.BASE_BACKGROUND};
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
    color: ${props => props.theme.BRAND_BLUE};
}

p{
    color: ${props => props.theme.BASE_TEXT};
    font-size: 1rem;
}

h1{
    color: ${props => props.theme.BASE_TITLE};
}

@media(max-width:700px){

html{
    font-size: 87.5%;
}
}
`;