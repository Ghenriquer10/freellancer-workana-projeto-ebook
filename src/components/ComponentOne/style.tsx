import styled from "styled-components";


export const Container = styled.article`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
    
    @media (min-width: 320px) and (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const TextLogo = styled.section`
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    font-size: 4em;
    text-align: center;


    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 3em;        
    }

    @media (min-width: 481px) and (max-width: 1024px) {

        font-size: 3em;
    }

    p:nth-child(1) {
        font-size: 2em;
    }
    p:nth-child(2){
        font-size: 0.6em;
    }
    p:nth-child(3){
        color: red;
    }
`;

export const ImageLogo = styled.aside`
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 600px;
    display: flex;
    background-image: url('../../assets/bakgroundSvg.tsx');

    @media (min-width: 320px) and (max-width: 480px) {
        height: 300px;

    }
    
    @media (min-width: 481px) and (max-width: 1024px) {
        height: 600px;

    }

    .background{
        width: 100%;
        position: relative;

        @media (min-width: 320px) and (max-width: 480px) {
            height: 250px;
            width: 300px;
        }
        @media (min-width: 481px) and (max-width: 1024px) {
            height: 350px;
            width: 400px;
        }

        svg{
            color: red;
        }
    }
    
    .logo{
        position: absolute;
        box-shadow: 0 0 1em #000;

        @media (min-width: 320px) and (max-width: 480px) {
           img{
            height: 250px;
            width: 300px;
           }     
        }
        @media (min-width: 481px) and (max-width: 1024px) {
           img{
            height: 350px;
            width: 400px;
           }     
        }
    }

`;
