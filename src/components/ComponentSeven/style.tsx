import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;

    
    @media (min-width: 320px) and (max-width: 480px) {
        height: auto;
        gap: 20px;
        padding: 20px 0;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        height: auto;
        padding: 20px 0;
    }

    .title{
        width: 100%;
        text-align: center;

        p:nth-child(1){
            font-size: 4em;
            font-weight: bold;
            
            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 2em;
                margin-top: 10px;
            }
            
            @media (min-width: 481px) and (max-width: 1024px) {
                font-size: 3em;
            }
        }
    
        p:nth-child(2){
            font-size: 2em;
            color: gray;
            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.5em;
                margin-top: 10px;
            }
        }
    }

    .cards{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: 320px) and (max-width: 480px) {
            flex-direction: column;
            gap: 20px;
            padding: 0 10px;
        }
        
        @media (min-width: 481px) and (max-width: 1024px) {
            flex-direction: column;
            gap: 10px;
        }
    }

`;