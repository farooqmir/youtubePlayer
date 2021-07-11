import React from 'react';
import YoutubePlayer,{Mode} from "../YoutubePlayer";

const HomePage = () => {
  return (
    <YoutubePlayer mode={Mode.Initial} />
  );
};

export default HomePage;
