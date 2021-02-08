import React from "react"


import MovieList from "./MovieList"
import Nav from "./Nav"
import AddMovie from "./AddMovie"

import {MovieProvider} from "./MovieContext"

function App() {

  return (
    <MovieProvider>
      <div>
        <Nav/>
        <AddMovie/>
        <MovieList/>
      </div>
    </MovieProvider>
  );
}

export default App;
