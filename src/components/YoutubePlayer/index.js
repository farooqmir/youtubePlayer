import React,{useState} from 'react';
import {useHistory, } from 'react-router-dom';
import {TextInput,Button,Flex,List} from "../../core";
import InitialMode from "./InitialMode"
import PlayBackMode from './PlayBackMode';


export const Mode = {
  Initial:1,
  Playback:2
}


const YoutubePlayer = (props) => {
  const {mode} = props;
  const isInitial = mode==Mode.Initial;
  const Component = isInitial?InitialMode:PlayBackMode;
  return (
    <Component />
  );
};


YoutubePlayer.defaultProps = {
  mode: Mode.Initial
}
export default YoutubePlayer;
