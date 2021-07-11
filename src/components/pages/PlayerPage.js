import React from 'react';
import YoutubePlayer,{Mode} from "../YoutubePlayer";

const PlayerPage = () => {
  return (
    <YoutubePlayer mode={Mode.Playback} />
  );
};

export default PlayerPage;
