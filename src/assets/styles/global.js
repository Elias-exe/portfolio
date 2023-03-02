import { createGlobalStyle } from "styled-components";
import background from "../images/imagem-background.svg";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora' , sans-serif;
  }
body{
  background: url(${background}) no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.7);
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary[200]}
}

button{
  cursor: pointer;
}
`;
