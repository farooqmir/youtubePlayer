import React from 'react';
import {useHistory } from 'react-router-dom';
import {Flex, Button} from "../../core"


const GifPage = () => {
  const history = useHistory();

  const onBack = ()=>{
    history.goBack()
  }

  return  <Flex container flexDirection="column" alignItems="flex-end">
  <Button onClick={onBack} >{"< Back"} </Button><br/>
  <img src={"https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"} alt="loading..." />
  </Flex>;
};

export default GifPage;
