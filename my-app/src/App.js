import React from 'react';
import './App.css';
import Header from "./components/navbar";
import Movie from './components/Movie';
import MoviePage from './components/moviePage';

import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.apikey = '9ebb3ffadcb7802418b60d473c655910';
        this.base = 'https://api.themoviedb.org/3/';
        this.imagebase = 'https://image.tmdb.org/t/p/original/';
        this.state = {
            genres: [],
            list: [],
            images: [],
            selectedMovie: {},
        };
    }
    componentDidMount() {

        fetch(`${this.base}movie/popular?api_key=${this.apikey}`).then((response) => {
            return response.json();
        }).then((data) => {
            const newList = data.results.map(item => ({
                watched: false,
                favorite: false,
                queue: false,
                ...item
            }))
            this.setState({
                list: newList
            })
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

    watchedMovie = (id) => {

    }
    favoriteMovie = (id) => {

    }
    queueMovie = (id) => {

    }
    selectMovie = (id) => {
        fetch(`${this.base}movie/${id}/images?api_key=${this.apikey}`).then((response) => {
            return response.json();
        }).then((data) => {
            let imagesFound = data.backdrops
            this.setState({ images: imagesFound })
        }).catch(function (error) {
            console.log(error);
        });

        fetch(`${this.base}movie/${id}?api_key=${this.apikey}`).then((response) => {
            return response.json();
        }).then((data) => {
            let movieDetails = data
            this.setState({
                selectedMovie: {
                    watched: false,
                    favorite: false,
                    queue: false,
                    ...movieDetails,
                }
            })
        }).catch(function (error) {
            console.log(error);
        });
    }


    render() {
        const { imagebase, state, queueMovie, favoriteMovie, watchedMovie, selectMovie } = this;
        const { list, genres, images, selectedMovie, } = state;


        return (
            <div className="App">
                <Header onChange={this.updateMovieSearch} />
                <div>
                    <ul>
                        {list.map(item =>
                            <Movie
                                key={item.id}
                                id={item.id}
                                genre_ids={item.genre_ids}
                                watched={item.watched}
                                favorite={item.favorite}
                                queue={item.queue}
                                title={item.title}
                                poster_path={item.poster_path}
                                genres={genres}
                                selectMovie={selectMovie}
                                onWatchedClick={watchedMovie}
                                onFavoriteClick={favoriteMovie}
                                onQueueClick={queueMovie}
                                imagebase={imagebase}
                            />
                        )}
                    </ul>
                </div>
                <div>
                    <MoviePage
                        selectedMovie={selectedMovie}
                        imagebase={imagebase}
                        imagesList={images}
                        onWatchedClick={watchedMovie}
                        onFavoriteClick={favoriteMovie}
                        onQueueClick={queueMovie}
                    />
                </div>
            </div >
        )
    }
}

export default App;