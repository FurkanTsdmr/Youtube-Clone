import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import  Menu  from "./Components/Menu";
import  Navbar  from "./Components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
display:flex;
`;

const Main = styled.div`
flex:7;
background-color:${({ theme }) => theme.bg};
`;


const Wrapper = styled.div``

function App() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>

          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
