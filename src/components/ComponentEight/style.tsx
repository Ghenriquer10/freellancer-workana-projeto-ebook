import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    height: 100vh;
    background-color: #2D2D2E;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 40px 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: auto;
        padding: 20px 0;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        height: auto;
        padding: 20px 0;
    }
`;

export const ImageContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    gap: 20px;
    p{
        text-align: center;
    }

    .title{
        text-align: center;

        p:nth-child(1){
            font-size: 2.5em;
            margin: 5px 0;
            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.9em;
            }
        }
    
        p:nth-child(2){
            font-size: 1.8em;
            color: #09fd09;

            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.5em;
            }
        }
    }

    .payment{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        background-color: red;

        @media (min-width: 320px) and (max-width: 480px) {
            height: 50px;
        }
    }

    .price{
        width: 100%;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        .oldPrice{
            font-size: 1.4em;
            text-decoration: line-through;

            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.1em;
            }
        }

        .descount{
            font-size: 2em;
            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.6em;
            }
        }
    }    
`;