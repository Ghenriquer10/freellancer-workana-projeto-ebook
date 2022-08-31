import styled from "styled-components";

export const Container = styled.article`
    width: 100%;
    background-color: #2D2D2E;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: auto;
        padding: 20px 10px;
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        height: auto;
    }
`;

export const ImageContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    height: 100%;
    color: #fff;

    .titleContainer{
        text-align: center;
        font-size: 3em;
        
        @media (min-width: 320px) and (max-width: 480px) {
            font-size: 1.5em;
        }
    
        @media (min-width: 481px) and (max-width: 1024px) {

        }
    }
    
    .imgContainer{
        img{
            height: 500px;
            width: 400px;

            @media (min-width: 320px) and (max-width: 480px) {
                height: 400px;
                width: 300px;
            }
        }
    }

    .buttonContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 20px;

        p{
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        button{
            height: 50px;
            width: 100%;
            background-color: #4bff33;
            font-size: 1.5em;
            color: #fff;
        }
    }
`;