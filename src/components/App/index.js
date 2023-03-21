import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "../../assets/styles/global";
import defaultTheme from "../../assets/styles/themes/default";
import { Container } from "./styles";
import AnimatedBackground from "../AnimatedBackground";

import Header from "../Header";
import Rotas from "../Rotas";
import Footer from "../Footer";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header />
          <Rotas />
          <Footer />
          <AnimatedBackground />
        </Container>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
