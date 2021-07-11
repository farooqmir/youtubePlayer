import React from 'react';
import styled from 'styled-components';

const StyledTextInput = styled.input`
background: transparent;
border-radius: 3px;
border: 2px solid orange;
color: orange;
margin: 0 1em;
padding: 10px 10px;
`

const TextInput = (props) => {
  const {type,placeholder, ...rest} = props;
  return (
      <StyledTextInput placeholder={placeholder} type={type} {...rest} />
  );
};

TextInput.defaultProps = {
  type: "text",
  placeholder:"Enter value"
}

export default TextInput;
