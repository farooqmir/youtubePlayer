import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width:'100%';
  backgroundColor:'black';
`;

const Flex = ({ variant, children, ...props }) => {
  const WithComponent = StyledComponent.withComponent(variant);
  return <WithComponent {...props} style={{
    display: props.container ? 'flex' : 'block',
    justifyContent: props.justifyContent || 'flex-start',
    flexDirection: props.flexDirection || 'row',
    flexGrow: props.flexGrow || 0,
    flexBasis: props.flexBasis || 'auto',
    flexShrink: props.flexShrink || 1,
    flexWrap: props.flexWrap || 'nowrap',
    flex: props.flex || '0 1 auto',
    alignItems: props.alignItems || 'stretch',
    margin: props.margin || '0',
    padding: props.padding || '0',
    width: props.width || 'auto',
    height: props.height || 'auto',
    maxWidth: props.maxWidth || 'none'
  }}>{children}</WithComponent>;
};

Flex.defaultProps = {
    variant: 'div',
};

export default Flex;