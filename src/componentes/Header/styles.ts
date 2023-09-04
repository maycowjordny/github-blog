import { styled } from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
        
        >img{
            width: 2.8125rem;
            height: 2.5rem;
        }

        h1{
            color: ${props => props.theme.BLUE};
            font-family: 'Coda';
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 160%;
            white-space: nowrap;
        }
    }

    @media(max-width:940px){
        justify-content: center;
        .side-effect{
            display: none;
        }

    }
`;