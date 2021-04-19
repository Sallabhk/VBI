import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage } from './component/pages/HomePage/HomePage';
import "./App.css"
import { AllSongs } from './component/pages/AllSongs/AllSongs';
import { AlbumSong } from './component/pages/AlbumSongs/AlbumSong';

function App() {
  return (
    <div>
      <div className="heading">VBI Songs App</div>
        <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/songs" exact component={AllSongs} />
          <Route path="/songs/:id" exact component={AlbumSong} />
        </Switch>
        </Router>
    </div>
    
  );
}

export default App;
