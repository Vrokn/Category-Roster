import React from 'react';
import Header from "./components/navbar";
import Movie from './components/Movie'
import MoviePage from './components/moviePage'

import './App.css';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, browserHistory } from 'react-router';
import { Switch, Redirect, Link } from 'react-router-dom';
//const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props)
    this.apikey = '9ebb3ffadcb7802418b60d473c655910';
    this.base = 'https://api.themoviedb.org/3/';
    this.imagebase = 'https://image.tmdb.org/t/p/w500/';
    this.state = {
      genres: [],
      images: [],
      list: [],
      filteredList: [],
      searchFilter: ''
    };
  }

  componentDidMount() {
    fetch(`${this.base}movie/popular?api_key=${this.apikey}`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ list: data.results })
    }).catch(function (error) {
      console.log(error);
    });
    fetch(`${this.base}genre/movie/list?api_key=${this.apikey}`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ genres: data.genres })
    }).catch(function (error) {
      console.log(error);
    });
  };

  updateMovieSearch = (value) => {
    fetch(`${this.base}search/movie?api_key=${this.apikey}&query=${value}&include_adult=false`).then((response) => {
      return response.json();
    }).then((data) => {
      let MovieSearched = data.results
      this.setState({ list: MovieSearched })
    }).catch(function (error) {
      console.log(error);
    });
  }
  getMovieImages = (id) => {
    fetch(`${this.base}movie/${id}/images?api_key=${this.apikey}`).then((response) => {
      return response.json();
    }).then((data) => {
      let imagesFound = data.backdrops
      this.setState({ images: imagesFound })
    }).catch(function (error) {
      console.log(error);
    });
  }

  updateSearch = (value) => {
    let moviesList = this.state.list;
    let filtered = moviesList.filter((post) => {
      return !value || post.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
    this.setState({ searchFilter: value, filteredList: filtered })
  }


  render() {
    let moviesList = this.state.list;
    const { state, props, imagebase } = this;
    const { genres, list, watched, favorite, queue, images} = state;
    const { title, poster_path, genre_ids } = props

    let filteredTerms = genres.filter((data) => {
      return genre_ids.includes(data.id)
    })
    let imagesList = images.filter((data) => {
      return data.file_path
    })
    return (
      <div className="App">
        <Header onChange={this.updateMovieSearch} />
        <div>
          <ul>
            {moviesList.map(item =>
              <Movie key={item.id} title={item.title} poster_path={item.poster_path} imagebase={imagebase} {...item} />
            )}
          </ul>
        </div>
        <div>
          <MoviePage title={title} genres={filteredTerms} score={list.score} poster_path={poster_path} imagebase={imagebase}
            queue={queue} favorite={favorite} watched={watched} overview={list.overview}
            imagesList={imagesList} /></div>}
      </div>
    );
  }
}

export default App;

export const Page1 = (props) => {
  return (
    <h1> 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1> 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1> no </h1>
  )
}
