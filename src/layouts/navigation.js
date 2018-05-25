import React, { Component } from 'react';
import styled from "styled-components";
import Link from "gatsby-link"

const ListLink = props =>
  <Li menuVisible={props.menuVisible}>
    <StyledLink to={props.to}>
      {props.children}
    </StyledLink>
  </Li>

const windowGlobal = typeof window !== 'undefined' && window

class Navigation extends Component {
  state = {
    menuVisible: false,
    width: windowGlobal.innerWidth,
  };

  componentDidMount() {
    windowGlobal.addEventListener('resize', this.handleWindowSizeChange);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleWindowSizeChange);
  // }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth });
  };

  toggleMenu = () => {
    this.setState({menuVisible: !this.state.menuVisible});
  }

    render() {
      const isMobile = this.state.width <= 800;
      const menuVisible = this.state.menuVisible || !isMobile
        return (
          <Container>
            <NavbarToggle onClick={this.toggleMenu}>
              <i className="fa fa-bars"></i>
            </NavbarToggle>
            <ListLink to="/" menuVisible={menuVisible}>HomePage</ListLink>
            <ListLink to="/history/" menuVisible={menuVisible}>Historie</ListLink>
            <ListLink to="/staff/" menuVisible={menuVisible}>Zaměstnatnci</ListLink>
            <ListLink to="/students/" menuVisible={menuVisible}>Studenti</ListLink>
            <Li menuVisible={menuVisible}>Absolventi</Li>
            <ListLink to="/projects/" menuVisible={menuVisible}>Projekty</ListLink>
            <ListLink to="/publications/" menuVisible={menuVisible}>Publikace</ListLink>
            <ListLink to="/courses/"  menuVisible={menuVisible}>Předměty</ListLink>
            <Li menuVisible={menuVisible}>Galerie</Li>
            <ListLink to="/links/" menuVisible={menuVisible}>Odkazy</ListLink>
          </Container>
        )
    }
}

export default Navigation;

const Container = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 800px) {
      flex-direction: column;
    }
`;

const Li = styled.li`
    display: ${props => props.menuVisible ? 'flex' : 'none'};
    height: 40px;
    flex: auto;
    align-items: center;
    justify-content: center;
    background: color: ${props => props.theme.secondary};
    color: ${props => props.theme.white};
    padding: 0px 10px;
    border-right: 1px solid black;
    &:last-child {
      border-right: 0px;
    }
    @media (max-width: 800px) {
      border: 0px;
    }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const NavbarToggle  = styled(Li)`
  display: none;
  cursor: pointer;
  align-self: flex-end;
  @media (max-width: 800px) {
      display: flex;
      flex: 1;
  }
`;
