import { styled } from "styled-components";

export const HomeContainer = styled.div`
max-width: 84rem;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 15rem 14rem;
`;

export const SearchWrapper = styled.div`
margin-top:4.5rem;
width: 100%;

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
}

#search-input{
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid ${props => props.theme.BASE_BORDER};
    background-color:${props => props.theme.BASE_INPUT};
    outline: none;
    font-family: 'Nunito';
    margin-bottom: 3rem;
    color:white;
    &:focus{
        border: 1px solid ${props => props.theme.BRAND_BLUE};
    }

    &::placeholder{
        font-family: 'Nunito';
        font-size: 1rem;
        font-weight: 400;
        line-height: 160%;
    
    }
}

strong{
    font-family: 'Nunito';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 160%;
    color:${props => props.theme.BASE_SUBTITLE};
}

span{
    font-family:'Nunito';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    color:${props => props.theme.BASE_SPAN};
    white-space: nowrap;
}
`;

export const CardWrapper = styled.main`
display: grid;
justify-items: center;
grid-template-columns: 1fr 1fr;
gap: 2rem;

@media(max-width:1200px){
    grid-template-columns: 1fr;
}
`;