import React from 'react';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.apikey = '9ebb3ffadcb7802418b60d473c655910';
    this.base = 'https://api.themoviedb.org/3/';
    this.state = {
      list: [],
      genres: [],
    };
  }

  ComponenDidMount() {

    /* fetch(`${this.base}genre/movie/list?api_key=${this.apikey}`).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('This is the parsed json', data);
      this.setState({
        genre: data,
      });
    }).catch(function (error) {
      console.log(error);
    }); */
    console.log('llegue al fetch');
    fetch(`${this.base}movie/popular?api_key=${this.apikey}`).then(function(response) {
      console.log('response', response.json());
      return response.json();
    }).then(function(data) {
      console.log('This is the parsed json', data);
      this.setState({
        list: data,
      });
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
    return (
      <div>
        <ul>
          {moviesList.map(post => (<li><p>{post.title}</p></li>))}
        </ul>
      </div>
    );
  }
}

export default App
