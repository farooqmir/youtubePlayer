/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import GifPage from "./pages/GifPage";
import PlayerPage from "./pages/PlayerPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import {Panel,Link} from "../core"

export const pathMap = {
  home: {label:"Home", path:"/"},
  videoPlayer: {label:"Video Player",path:"/vplayer"},
  gif: {label:"GIF",path:"/gif"},
};


class App extends React.Component {
  render() {
    return (
      <Panel>
          <Link exact to={pathMap.home.path} >{pathMap.home.label}</Link>
          {' | '}
          <Link to={pathMap.videoPlayer.path}>{pathMap.videoPlayer.label}</Link>
          {' | '}
          <Link to={pathMap.gif.path}>{pathMap.gif.label}</Link>
        
        <Switch>
          <Route exact path={pathMap.home.path} component={HomePage} />
          <Route path={pathMap.videoPlayer.path} component={PlayerPage} />
          <Route path={pathMap.gif.path} component={GifPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </Panel>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
