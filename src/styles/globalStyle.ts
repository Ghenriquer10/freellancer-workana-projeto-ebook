import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 14px;
        font-family: sans-serif;
    }
    button{
        cursor: pointer;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }
`;