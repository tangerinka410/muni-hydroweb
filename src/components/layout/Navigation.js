import React, { PureComponent } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Header from "./Header";
const ListLink = props => (
  <NavigationLink
    to={props.to}
    className={`${props.menuVisible} ${props.className}`}
  >
    {props.children}
  </NavigationLink>
);

const windowGlobal = typeof window !== "undefined" && window;

class Navigation extends PureComponent {
  state = {
    menuVisible: false,
    width: windowGlobal.innerWidth,
    scrolling: "upper"
  };

  componentDidMount() {
    console.log("mount")
    this.prev = window.scrollY;
    windowGlobal.addEventListener("resize", this.handleWindowSizeChange);
    windowGlobal.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    console.log("unmount")
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll);
    this.prev = false;
  }

  handleWindowSizeChange = () => {
    this.setState({ width: windowGlobal.innerWidth });
  };

  handleScroll = event => {
    const windowGlobal = event.currentTarget;
    if (this.prev > windowGlobal.scrollY) {
      this.setState({ scrolling: "up", menuVisible: false });
      if (windowGlobal.scrollY === 0) this.setState({ scrolling: "upper" });
    } else if (this.prev < windowGlobal.scrollY) {
      this.setState({ scrolling: "down" });
    }
    this.prev = windowGlobal.scrollY;
  };

  toggleMenu = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  getClass = urlIncludes => {
    if (
      windowGlobal &&
      windowGlobal.location &&
      windowGlobal.location.href.includes(urlIncludes)
    ) {
      return "active";
    } else return "";
  };

  render() {
    const { scrolling, width } = this.state;
    const isMobile = width <= 800;
    const menuVisible =
      this.state.menuVisible || !isMobile ? "menuVisible" : "";

    return (
      <Container scrolling={scrolling} className={scrolling}>
        <NavbarToggle onClick={this.toggleMenu} className={menuVisible}>
          <i className="fa fa-bars" />
        </NavbarToggle>
        {!this.props.isIndex && (scrolling==="upper" || !isMobile) && <Header className="small"/>}
        <ListLink
          to="/"
          menuVisible={menuVisible}
          className={this.props.isIndex ? "active" : ""}
        >
          HomePage
        </ListLink>
        <ListLink
          to="/history/"
          menuVisible={menuVisible}
          className={this.getClass("history")}
        >
          Historie
        </ListLink>
        <ListLink
          to="/staff/"
          menuVisible={menuVisible}
          className={this.getClass("staff")}
        >
          Zaměstnatnci
        </ListLink>
        <ListLink
          to="/students/"
          menuVisible={menuVisible}
          className={this.getClass("students")}
        >
          Studenti
        </ListLink>
        <ListLink
          to="/projects/"
          menuVisible={menuVisible}
          className={this.getClass("projects")}
        >
          Projekty
        </ListLink>
        <ListLink
          to="/publications/"
          menuVisible={menuVisible}
          className={this.getClass("publications")}
        >
          Publikace
        </ListLink>
        <ListLink
          to="/courses/"
          menuVisible={menuVisible}
          className={this.getClass("courses")}
        >
          Předměty
        </ListLink>
        {/* <Li menuVisible={menuVisible} className={this.getClass("gallery")}>
          Galerie
        </Li> */}
        <ListLink
          to="/links/"
          menuVisible={menuVisible}
          className={this.getClass("links")}
        >
          Odkazy
        </ListLink>
      </Container>
    );
  }
}

export default Navigation;

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
  background-color: white;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  &.up {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 1;
  }
  &.upper {
    opacity: 1;
  }
`;

const NavigationLink = styled(Link)`
  display: none;
  opacity: 0;
  transition: opacity 10s linear;
  height: 60px;
  flex: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding: 0px 10px;
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.white};

  &.menuVisible {
    display: flex;
    opacity: 1;
  }
  &:last-child {
    border-right: 0px;
  }
  &:hover {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 800px) {
    border: 0px;
  }
`;

const NavbarToggle = styled.span`
  display: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 10px;
  font-size: 40px;
  transition: font-size 0.5s linear;
  &:hover {
    font-size: 50px;
    color: ${props => props.theme.secondary};
  }
  &.menuVisible {
    font-size: 50px;
    &:hover {
      font-size: 50px;
      color: grey;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex: 1;
  }
`;