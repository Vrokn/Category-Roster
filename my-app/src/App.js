import React from 'react';
import Header from "./components/navbar";
import icons from './components/icons'
import './App.css';
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { Router, Route, browserHistory } from 'react-router';
import { Switch, Redirect, Link } from 'react-router-dom'; */
//const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props)
    this.apikey = '9ebb3ffadcb7802418b60d473c655910';
    this.base = 'https://api.themoviedb.org/3/';
    this.imagebase = 'https://image.tmdb.org/t/p/w300/';
    this.state = {
      icon: icons,
      list: [],
      filteredList: [],
      genres: [],
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

  updateSearch = (value) => {
    let moviesList = this.state.list;
    let filtered = moviesList.filter((post) => {
      return !value || post.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
    this.setState({ searchFilter: value, filteredList: filtered })
  }

  toggleEye = (event) => {
    console.log(event.target.className.baseVal);
    console.log(icons.eye.props.class);
    if (event.target.className.baseVal === icons.eye.props.class) {
      this.setState(this.state.icon.eye = icons.eyeFill)
    } else {
      this.setState(this.state.icon.eye = icons.eye)
    }
  }
  render() {
    let moviesList = this.state.list;
    let icon = this.state.icon;
    console.log('moviesList', moviesList);
    return (
      <div className="App">
        <Header onChange={this.updateMovieSearch} />
        <div>
          <ul>
            {moviesList.map(post =>
              <li><a href={`#${post.title}`}><img src={`${this.imagebase}${post.poster_path}` || 'https://es.zenit.org/wp-content/uploads/2018/05/no-image-icon.png'} alt={post.title} /></a>
                <div class="container">
                  <p>
                    <div class="row">
                      <div class="col">
                        <a href={`#${post.title}`}>{post.title}</a>
                      </div>
                      <div class="col col-lg-auto row">
                        <div onClick={this.toggleEye}>{icon.eye}</div>
                        <div onPress={this.toggleHearth}>{icon.heart}</div>
                        <div onPress={this.toggleClock}>{icon.clock}</div>
                      </div>
                    </div>
                  </p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App
