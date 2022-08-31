import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    text-align: center;
    background-color: red;


    @media (min-width: 320px) and (max-width: 480px) {
        height: auto;
        padding: 20px 0;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        height: auto;
    }

    .contacts--field{
        width: 100%;
        border: 1px solid red;
        height: 100%;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        @media (min-width: 320px) and (max-width: 480px) {
            flex-direction: column;
        }
        
        @media (min-width: 481px) and (max-width: 1024px) {
            flex-direction: column;
        }

    }

    .remitly-descount{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        gap: 10px;

        @media (min-width: 320px) and (max-width: 480px) {
            width: 100%;
        }
        
        @media (min-width: 481px) and (max-width: 1024px) {
            width: 100%;
        }


        p:nth-child(1){
            font-size: 1.5em;
            color: #fff;

            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.3em;
            }
        }

        p:nth-child(2){
            color: #4BFF33;
            font-size: 2em;

            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.6em;
            }
        }

        img{
            height: 70px;
            width: 70px;

            @media (min-width: 320px) and (max-width: 480px) {
                height: 50px;
                width: 50px;
            }
        }
    }

    .whatsapp-link{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        gap: 20px;

        @media (min-width: 320px) and (max-width: 480px) {
            width: 100%;
        }
        
        @media (min-width: 481px) and (max-width: 1024px) {
            width: 100%;
        }

        p:nth-child(1){
            font-size: 1.5em;
            color: #fff;

            @media (min-width: 320px) and (max-width: 480px) {
                font-size: 1.3em;
            }
        }

        button{
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

        }
        
        svg{
            height: 70px;
            width: 70px;
            background-color: #15A107;
            color: #fff;
            border-radius: 50%;

            @media (min-width: 320px) and (max-width: 480px) {
                height: 50px;
                width: 50px;
            }

        }
    }
`;

