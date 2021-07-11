import React from 'react';
import styled from 'styled-components';



const ButtonStyled = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid orange;
color: orange;
margin: 0 1em;
padding: 10px 10px;
`
 
const Button = (props) => {
  const {children,...rest} = props;
  return (  
      <ButtonStyled className="alt-header" {...rest}>{children}</ButtonStyled>
  );
};

export default Button;
