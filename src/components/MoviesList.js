import React, { useEffect, useState } from "react";
import '../stylesheets/Movies.css';
import Movie from "./Movie";
import { Link } from 'react-router-dom';
function MoviesList(props) {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        setMovies([
            {
                id: 0,
                title: "Человек-паук: Нет пути домой",
                description: "Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.",
                duration: 148,
                kinopoisk: 8.6,
                director: "Джон Уоттс",
                genre: "фантастика, боевик, приключения, фэнтези",
                year: 2021,
                image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/dbfeb90f-741d-482e-aaa8-aba15c490c40/300x450",
            },
            {
                id: 1,
                title: "Человек-паук: Нет пути домой",
                description: "Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.",
                duration: 148,
                kinopoisk: 8.6,
                director: "Джон Уоттс",
                genre: "фантастика, боевик, приключения, фэнтези",
                year: 2021,
                image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/dbfeb90f-741d-482e-aaa8-aba15c490c40/300x450",
            },
            {
                id: 2,
                title: "Человек-паук: Нет пути домой",
                description: "Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.",
                duration: 148,
                kinopoisk: 8.6,
                director: "Джон Уоттс",
                genre: "фантастика, боевик, приключения, фэнтези",
                year: 2021,
                image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/dbfeb90f-741d-482e-aaa8-aba15c490c40/300x450",
            },
            {
                id: 3,
                title: "Человек-паук: Нет пути домой",
                description: "Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.",
                duration: 148,
                kinopoisk: 8.6,
                director: "Джон Уоттс",
                genre: "фантастика, боевик, приключения, фэнтези",
                year: 2021,
                image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/dbfeb90f-741d-482e-aaa8-aba15c490c40/300x450",
            },
            {
                id: 4,
                title: "Человек-паук: Нет пути домой",
                description: "Жизнь и репутация Питера Паркера оказываются под угрозой, поскольку Мистерио раскрыл всему миру тайну личности Человека-паука. Пытаясь исправить ситуацию, Питер обращается за помощью к Стивену Стрэнджу, но вскоре всё становится намного опаснее.",
                duration: 148,
                kinopoisk: 8.6,
                director: "Джон Уоттс",
                genre: "фантастика, боевик, приключения, фэнтези",
                year: 2021,
                image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/dbfeb90f-741d-482e-aaa8-aba15c490c40/300x450",
            }
    
        ])
    }, []);

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