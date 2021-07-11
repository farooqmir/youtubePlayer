import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:#333;
`;


const Content = styled.div`
    background-color:#000;
    max-width:600px;
    margin:10px auto;
    padding:50px;
`;

const Panel = ({ children, ...props }) => {
  return <Container {...props}><Content>{children}</Content></Container>;
};

export default Panel;