import React,{useState,useEffect,useRef} from 'react';
import YouTube from "react-youtube";
import {useHistory } from 'react-router-dom'
import { withRouter } from 'react-router';
import {useSelector,useDispatch} from "react-redux";
import {saveTime} from "../../actions/appActions";
import {Button,Flex, Typography} from "../../core"


const PlayBackMode = (props) => {
  const {url='',time=0} = useSelector(state=>state.info);
  const history = useHistory();
  const dispatch = useDispatch();
  const ref= useRef({});
  const [opt,setOpt] = useState({autoplay: "1"});
  const [error,setError] = useState({isError: false,message:""});

  useEffect(() => {
    setOpt({
      height: '400',
      width: '640',
      playerVars: {
        start: time,
        autoplay: "1",
       
      },
    });
    return () => {
      if(ref && ref.current && ref.current.getCurrentTime)
       dispatch(saveTime(ref.current.getCurrentTime()));
    }
  }, [time])
  
  const onReady = (event) => {
    ref.current = event.target;
    if(time)
      ref.current.seekTo(time)
  }

  const onEdit = ()=>{
    setError({isError:false})
    history.push('/')
  }

  const onError = ()=>{
    setError({isError:true,message:"Oops! Video not found. Please enter a valid Video Id"})
  }


  return (
    <React.Fragment>
    <Flex container flexDirection="column" alignItems="flex-end">
      <Button onClick={onEdit} >{"Edit"} </Button>
      {url && !error.isError?
      <YouTube videoId={url} opts={opt} onReady={onReady} onError={onError} />:""
      }
    </Flex>
    {(error.isError)?<Typography variant="h3">{error.message}</Typography>:''}
    </React.Fragment>
  );
};

export default withRouter(PlayBackMode);
