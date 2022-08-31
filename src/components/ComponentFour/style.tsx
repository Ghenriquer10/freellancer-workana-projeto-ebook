import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    height: 100vh;
    background-color: #2D2D2E;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    
    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
        height: auto;
        padding: 20px 0;
    }
    `;

export const ImageContainerThree = styled.section`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }

    img{
        box-shadow: 0 0 5em green;

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

export const TextContainerThree = styled.aside`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
    }



    p:nth-child(1){
        font-size: 3.5em;
        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 2.5em;
        }
    }
    p:nth-child(2){
        font-size: 4.4em;
        color: red;
        border-bottom: 5px solid red;
        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 3.5em;
        }
    }
    p:nth-child(3){
        font-size: 2.5em;
        margin-top: 30px;
        @media (min-width: 320px) and (max-width: 1024px) {
            font-size: 1.8em;
        }
    }

`;