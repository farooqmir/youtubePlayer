import React from 'react';
import styled from 'styled-components';
 

const StyledComponent = styled.div``;

const Typography = ({ variant, children, ...props }) => {
  const WithComponent = StyledComponent.withComponent(variant);
  return <WithComponent {...props}>{children}</WithComponent>;
};

StyledComponent.defaultProps = {
    variant: 'h1',
};

export default Typography;