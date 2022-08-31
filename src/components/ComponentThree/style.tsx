import styled from "styled-components";

export const Container = styled.article`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px;
    flex-direction: column;

    @media (min-width: 320px) and (max-width: 480px) {
        height: auto;
        padding: 20px 0;
        gap: 10px;
        
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        height: auto;
        padding: 20px 0;
        gap: 10px;
    }
    
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    width: 100%;
    padding: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        gap: 5px;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        flex-direction: column;
        gap: 5px;
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
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        width: 100%;
    }

    p:nth-child(1){
        font-size: 4em;
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2em;
        }
    }
    
    p:nth-child(2){
        font-size: 5em;
        color: red;

        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 4em;
        }
    }

    p:nth-child(3){
        font-size: 2em;
        color: gray;
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2em;
        }
    }

`;

export const TextBenefits = styled.aside`
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 10px solid red;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        padding: 0px;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        width: 100%;
        padding: 0px;
    }

    .text{
        box-shadow: 0 0 1em #55FF33;
        width: 100%;
        background-color: #000;
        display: flex;
        flex-direction: column;
        padding: 20px;

        @media (min-width: 320px) and (max-width: 480px) {
            width: 100%;
            
        }
        
        @media (min-width: 481px) and (max-width: 1024px) {

        }

        svg{
            color: #55FF33;            
        }

        p{
            font-size: 1.2em;
            color: #fff;
            margin: 10px 0;
            
            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.0em;
            }
        }
    }
`;