import styled from "styled-components";

export const Container = styled.div`
    background-color: #EDF2F7;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 480px) {
    
    }
    
    @media (min-width: 481px) and (max-width: 1024px) {

    }

    
    
    .postContainer{
        background-color: #000;
        color: #EDF2F7;
        width: 100%;
        padding: 0 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 400px;
        height: 500px;
        justify-content: space-around;

        @media (min-width: 320px) and (max-width: 480px) {
            height: 550px;
            padding: 0 10px;

        }

        @media (min-width: 481px) and (max-width: 1024px) {

        }

        &:hover{
            transition: all 1s;
            transform: scale(1.05);
        }

    }

    .descriptionText{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        text-align: center;

        p:nth-child(1){
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }

    .descriptionAuthor{
        margin-top: -50px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        text-align: center;
        width: 100%;

        img{
            border-radius: 50%;
        }

        .author{
            font-size: 2em;
            font-weight: bold;
            margin: 10px 0;
        }
    }
`;