import styled from "styled-components";

export const Container = styled.article`
    background-color: #2D2D2E;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        height: auto;

    }
    
    @media (min-width: 481px) and (max-width: 1400px) {
        flex-direction: column;

    }
`;


export const ImageContainer = styled.section`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 1024px) {
            width: 100%;
        }
        
        @media (min-width: 481px) and (max-width: 1024px) {
            width: 100%;
        }
    
    img{
        box-shadow: 0 0 20em red;
    
        @media (min-width: 320px) and (max-width: 480px) {
            height: 200px;
            width: 300px;
        }
    
        @media (min-width: 481px) and (max-width: 1024px) {
            height: 300px;
            width: 400px;
        }
    }

`;

export const TextContainer = styled.aside`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 150px;

    @media (min-width: 320px) and (max-width: 1400px) {
        width: 100%;
        padding: 0;
    }

    p{
        color: #fff;
        margin-bottom: 5px;
    }

    p:nth-child(1){
        color: #fff;
        font-size: 2em;

        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 1.4em;
            margin-top: 10px;
         }
    }
    
    p:nth-child(2){
        border-bottom: 4px solid red;
        font-size: 3em;
    }
    p:nth-child(3){
        font-size: 1.4em;
        margin-top: 15px;
        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 1.2em;
         }
    }
`;