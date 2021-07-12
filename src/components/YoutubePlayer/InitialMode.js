import React,{useState} from 'react';
import {useHistory, } from 'react-router-dom';
import {TextInput,Button,Flex,List} from "../../core";
import {saveUrl, saveTime} from "../../actions/appActions";
import {useDispatch,useSelector} from "react-redux"
import {pathMap} from "../App";
import {featured, label, defaultVideoId} from "./data"

const InitialMode = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {url=defaultVideoId, time: seekTime=0} = useSelector(state=>state.info);
  const [videoId, setVideoId] = useState(url);

  const onSave =  ()=>{
    if(videoId.trim()=="")
      alert("Please enter video Id");
    else{
       dispatch(saveUrl(videoId));
       dispatch(saveTime((videoId && url!=videoId)?0:seekTime));
       history.push(pathMap.videoPlayer.path)
     }
  }

  const onSelectVideo = (id)=>{
    setVideoId(id)
  }

  return (
    <Flex>
       <TextInput placeholder="Paste Video ID" onChange={(event)=>{setVideoId(event.target.value)}} value={videoId}/>
       <Button onClick={onSave} >{label.save} </Button>
       <List data={featured} heading='Favourites' itemSelected={onSelectVideo}/>
    </Flex>
  );
};

export default InitialMode;
