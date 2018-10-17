import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import {ThemeProvider} from 'styled-components';

import ecdyonurus from "../pages/images/ecdyonurus.jpg";
import Navigation from "./navigation";
import FooterContent from "./footer";


const blueTheme = {
  main: '#0868ac',
  secondary: '#43a2ca',
  terciary: '#a8ddb5',
  grey: '#969696',
  white: 'white'
};


export default ({ children }) =>
 <ThemeProvider theme={blueTheme}>
    <Container class="container">
    <LogoText><img src={ecdyonurus}/>
    Pracovní skupina hydrobiologie
    </LogoText>
    <SubHeader>Ústav botaniky a zoologie | Masarykova univerzita | Přírodovědecká fakulta </SubHeader>
    <Header><Navigation/></Header>
    <Main>{children}</Main>
    <footer><FooterContent/></footer>
    </Container>
  </ThemeProvider>

const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;


const Header = styled.header`
    background: ${props => props.theme.secondary};
    flex-shrink: 0;
`;

const SubHeader = styled.div`
    font-size: 1em;
    color: ${props => props.theme.grey};
    padding-left: 2em;
    padding-bottom: 0.5em;
`;

const Main = styled.main`
    flex-grow: 1;
    flex-shrink: 0;
    padding: 20px;
`;

const LogoText = styled.h1`
    text-transform: uppercase;
    color: ${props => props.theme.main};
    margin: 0 0.3em 0.3em 0.3em;
    margin: 0 0.3em 0.3em 0.3em;
    @media (max-width: 800px) {
      font-size:1.3em;
    }
`;
