import React from "react"
import styled from "styled-components";

const Link = ({href, children}) => {
    return (
        <LinkStyled href={href}> {children} </LinkStyled>
    );
};

export default Link;

const LinkStyled = styled.a`
  color: ${props => props.theme.main};
  text-decoration: none;
  cursor: pointer;
  &:hover, &:focus {
    color: ${props => props.theme.secondary};
  }
`;