import { createGlobalStyle } from "styled-components";
import AnimatedBackground from "../../components/AnimatedBackground";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan' , sans-serif;
  }
body{
  background: url(${AnimatedBackground});
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary[200]};
}

button{
  cursor: pointer;
}
`;
