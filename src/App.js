import React, { Component } from 'react';
import axios from 'axios';

import './app.css';
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
      suggestionSelectIndex: -1,
      displayedMovies: [],
    }
  }

  componentDidMount = () => {
    this.getTrending();
  }

  getTrending = () => {
    const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    axios.get(trendingUrl)
      .then((data) => {
        this.setState({
          moviesHeading: 'Movies Trending Today:',
          displayedMovies: data.data.results,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleInputChange = (e) => {
    const query = e.target.value;
    if (query.length === 0) {
      this.setState({
        query: '',
        moviesHeading: '',
        suggestions: [],
        suggestionSelectIndex: -1,
        displayedMovies:[], 
      });
    } else {
      this.setState({ 
        query,
        suggestionSelectIndex: -1,
      }, () => {
        this.getSuggestions();
      })
    }
  }

  getSuggestions = () => {
    axios.get(url + this.state.query)
      .then((data) => {
        this.setState({ suggestions: data.data.results })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleKeyDown = (e) => {
    const { suggestionSelectIndex, suggestions } = this.state;
    if (e.keyCode === 13) {
      if (suggestionSelectIndex === -1) {
        this.handleMovieSelection(this.state.query);
      }
      if (suggestionSelectIndex > -1 && suggestionSelectIndex < suggestions.length - 1) {
        this.handleMovieSelection(suggestions[suggestionSelectIndex].title)
      }
      e.preventDefault()
    } else if (e.keyCode === 38 && suggestionSelectIndex > -1) {
      this.setState( prevState => ({
        suggestionSelectIndex: prevState.suggestionSelectIndex - 1
      }));
      e.preventDefault()
    } else if (e.keyCode === 40 && suggestionSelectIndex < suggestions.length - 1) {
      this.setState(prevState => ({
        suggestionSelectIndex: prevState.suggestionSelectIndex + 1
      }))
      e.preventDefault()
    }
  }

  handleMovieSelection = (selection) => {
    axios.get(url + selection)
      .then((data) => {
        this.setState({
          query: selection,
          moviesHeading: 'Movie Search Results:',
          suggestions: [],
          suggestionSelectIndex: -1,
          displayedMovies: data.data.results,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="topnav">
          <div><img src="./movieDB_Icon.png" id="logo" alt="MovieDB_Icon"/></div>
          <div className="nav-item" onClick={this.getTrending}>Trending</div>
          <div className="search">
            <MovieInput query={this.state.query} handleInputChange={this.handleInputChange} handleKeyDown={this.handleKeyDown} />
          </div>
        </div>
        
        <h1 className="movies-heading">{this.state.moviesHeading}</h1>
        <SuggestionList 
          suggestions={this.state.suggestions}
          handleMovieSelection={this.handleMovieSelection}
          suggestionSelectIndex={this.state.suggestionSelectIndex}
        />
        <MovieList displayedMovies={this.state.displayedMovies} />

      </div>
    );
  }
}

export default App;
