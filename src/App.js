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

  handleInputChange = (e) => {
    const query = e.target.value;
    if (query.length === 0) {
      this.setState({
        query: '',
        moviesHeading: '',
        suggestions: [],
        displayedMovies:[], 
      });
    } else {
      this.setState({ query }, () => {
        this.searchMovies();
      })
    }
  }

  searchMovies = () => {
    axios.get(url + this.state.query)
      .then((data) => {
        this.setState({ suggestions: data.data.results })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="topnav">
          <ul className="navs">
            <li className="tab">Home</li>
            <li className="tab" onClick={this.getTrending}>Trending</li>
            <li className="search">
              <MovieInput query={this.state.query} handleInputChange={this.handleInputChange} />
            </li>
          </ul>
        </div>
        
        <h1 className="movies-heading">{this.state.moviesHeading}</h1>
        <SuggestionList suggestions={this.state.suggestions} handleMovieSelection={this.handleMovieSelection} />
        <MovieList displayedMovies={this.state.displayedMovies} />

      </div>
    );
  }
}

export default App;
