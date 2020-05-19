import React from 'react';
import './App.css';
import { Component } from "react";
//const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props)
    this.apikey = '9ebb3ffadcb7802418b60d473c655910';
    this.base = 'https://api.themoviedb.org/3/';
    this.imagebase = 'https://image.tmdb.org/t/p/w300/'
    this.state = {
      list: [],
      genres: [],
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
  /* toggleClass = (item) => {
    let modifiedTasks = this.state.list.map((val) => {
      if (item.title === val.title) {
        val.completed = !val.completed;
      }
      return val;
    })
    this.setState({
      list: modifiedTasks
    });
  }
  updateSearch = (value) => {
    let filtered = data.filter((post) => {
      return !value || post.title.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })
    this.setState({ list: filtered })
  } */
  render() {
    let moviesList = this.state.list;
    console.log('moviesList', moviesList);
    return (
      <div>
        <ul>
          {moviesList.map(post =>
          <li><a href={post.url}><img src={`${this.imagebase}${post.poster_path}`}  alt={post.title}/></a>
          <p><a href={post.url}>{post.title}</a></p></li>
             )}
        </ul>
      </div>
    );
  }
}

export default App
