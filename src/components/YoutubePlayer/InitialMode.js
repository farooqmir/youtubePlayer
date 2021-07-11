import React,{useState} from 'react';
import {useHistory, } from 'react-router-dom';
import {TextInput,Button,Flex,List} from "../../core";
import {saveUrl, saveTime} from "../../actions/appActions";
import {useDispatch,useSelector} from "react-redux"

const featured = [
  {label:'Maroon 5 - Girls Like You ',id:"aJOTlE1K90k"},
  {label:'Perfect - Ed Sheeran ',id:"UDDMYw_IZnE"},
  {label:'Ed Sheeran - Shape of You ',id:"JGwWNGJdvx8"},
  {label:'Wiz Khalifa - See You Again ',id:"RgKAFK5djSk"}
]


const InitialMode = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {url="2Vv-BfVoq4g", time: seekTime=0} = useSelector(state=>state.info);
  const [videoId, setVideoId] = useState(url);

  const onSave =  ()=>{
    if(videoId.trim()=="")
      alert("Please enter video Id");
    else{
       dispatch(saveUrl(videoId));
       dispatch(saveTime((videoId && url!=videoId)?0:seekTime));
       history.push('/vplayer')
     }
  }

  const onSelectVideo = (id)=>{
    setVideoId(id)
  }

  const label = {
    url:"Url: ",
    save:"Save Video"
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
