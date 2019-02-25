import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SuggestionList from './SuggestionList.jsx';
import MovieInput from './MovieInput.jsx';
import MovieList from './MovieList.jsx';
import config from './config.js';

const API_KEY = config.API_KEY;
const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query:'',
      moviesHeading:'',
      suggestions: [],
      displayedMovies: [],
    }
  }

  render() {
    return (
      <div className="App">
        <div className="topnav">
          <ul className="navs">
            <li className="tab">Home</li>
          </ul>
        </div>
 
        <MovieList displayedMovies={this.state.displayedMovies} />

      </div>
    );
  }
}

export default App;
