import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: #FF8C00;
  padding:20px 10px;
  margin:40px 0px;
  max-width:100px;
  min-width: 100px;
  font-weight:bold;
  display:inline-block;
  vertical-align:center;
  text-align:center;
  text-decoration: none;
  &.active {
    border-bottom:2px solid orange;
    border-padding:10px;
  }
`;

const Link = ({ variant, children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

Link.defaultProps = {
    variant: 'div',
};

export default Link;