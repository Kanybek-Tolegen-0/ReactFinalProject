import React, { useEffect, useState } from "react";
import '../stylesheets/Movies.css';
import Movie from "./Movie";
import { Link } from 'react-router-dom';
import api_key from '../Key';
import axios from "axios";

function MoviesList(props) {
    const [movies, setMovies] = useState([]);
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {        
        await axios.get('https://api.themoviedb.org/3/movie/popular/', {
            params : { api_key: api_key, page: "1"},
        }).then((response) => {
            setMovies(response.data.results);
        });
    }

    const setSelectedMovie = props.setSelectedMovie;

    return (
        <div>
            <h1>Movies</h1>
            <div className="movies-list">
                {
                    movies.map((movie) => <Link 
                                            onClick={() => {setSelectedMovie(movie)}} to={`${movie.title}`} key={movie.id}>
                            <Movie movie = {movie}/>
                        </Link>)
                }
            </div>
        </div>
    )
}

export default MoviesList;