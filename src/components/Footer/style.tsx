import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
          flex-direction: column;
          gap:30px;
    }
        
    @media (min-width: 481px) and (max-width: 1024px) {

    }

    p:nth-child(3){
        cursor: pointer;

        
    }

    img{
        height: 80px;
        width: 90px;
    }
`;
