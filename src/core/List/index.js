import React from 'react';
import styled from 'styled-components';
import {Typography} from "../"

const ListContainer = styled.ul`
  list-style: none;
  margin: 20px 0 0 0;
  padding:0;
`;

const ListItem = styled.li`
  list-style: none;
  font-size:18px;
  background-color:#331;
  color:#fff;
`;

const ListItemContent = styled.a`
  display:block;
  padding:10px 20px 10px 10px;
  color:#fff;
  margin-bottom: 10px;

  &:active{
   color:#998;
   background-color:#000;
  }
`;

const List = ({ data,heading, children, ...props }) => {
  const {itemSelected} = props;
  return <>
      {heading?<Typography variant="h2">{heading}</Typography>:''}
      <ListContainer {...props}>
      {
        data.map((item,index)=>{
          const {label,id} = item;
          return <ListItem key={index}><ListItemContent onClick={()=>{itemSelected(id)}}>{label}</ListItemContent></ListItem>
      })
    }</ListContainer>
  </>;
};


List.defaultProps = {
  data:[],
  onClick:()=>{}
}
 
export default List;