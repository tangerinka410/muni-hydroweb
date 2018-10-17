import React from "react"
import {Link} from "gatsby"
import styled from "styled-components";

const StyledLink = ({to, children, color, hoverColor, focusColor, underline}) => {
    return (
      <LinkStyled to={to} color={color} focusColor={focusColor} underline={underline}> {children} </LinkStyled>

    );
};

export default StyledLink;

const LinkStyled = styled(Link)`
  color: ${props => props.color || props.theme.grey};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: ${props => props.underline ? 'underline' : 'none'};
    color: ${props => props.hoverColor ||  ''};
  }
  &:focus {
    color: ${props => props.focusColor ||  '' };
  }
`;

