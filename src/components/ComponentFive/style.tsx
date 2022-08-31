import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 120px;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        height: auto;
        padding-top: 30px;
        gap: 0;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {

    }
`;

export const TextContainer = styled.section`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 50px;
    text-align: center;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        gap: 10px;
        padding: 10px;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        width: 100%;

    }
    

    p:nth-child(1){
        font-size: 4em;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2em;
        }
    
        @media (min-width: 481px) and (max-width: 1024px) {
            font-size: 3em;
        }
    }
    
    p:nth-child(2){
        font-size: 5em;
        color: red;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 3em;
        }
    
        @media (min-width: 481px) and (max-width: 1024px) {
            font-size: 4em;
        }
    }

    p:nth-child(3){
        font-size: 2em;
        color: gray;
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1.5em;
        }
    }
`;
export const TextLogo = styled.aside`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        width: 100%;

    }

    .text{
        width: 100%;
        box-shadow: 0 0 1em #55FF33;
        background-color: #000;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border: 10px solid red;


        svg{
            color: #55FF33;            
        }

        p{
            font-size: 1.5em;
            color: #fff;
            margin: 10px 0;

            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1em;
            }
        }
    }

`;

