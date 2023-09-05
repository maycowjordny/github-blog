import { styled } from "styled-components";

export const CardContainer = styled.div`
width: 26rem;
height: 16.25rem;
border-radius: 0.625rem;
background-color:${props => props.theme.BASE_POST};
padding: 2rem;
border: 2px solid ${props => props.theme.BASE_POST};
transition-duration: 700ms;
&:hover{
    border: 2px solid ${props => props.theme.BASE_LABEL};
}

div{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

h1{
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 160%;
    margin-bottom: 1.25rem;
}

span{
    font-family: 'Nunito';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 160%;
    white-space: nowrap;
    color:${props => props.theme.BASE_SPAN};
}

p{
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 160%;    
   max-height: 6rem;      
   -webkit-line-clamp: 4; 
   -webkit-box-orient: vertical;
}
`;