import React from 'react';
import YoutubePlayer,{Mode} from "../YoutubePlayer";

const PlayerPage = () => {
  return (
    <React.Fragment>
       <YoutubePlayer mode={Mode.Playback} />
    </React.Fragment>
  );
};

export default PlayerPage;
