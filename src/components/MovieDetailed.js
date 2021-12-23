import '../stylesheets/MovieDetailed.css';

function MovieDetailed(props) {
    const movie  = props.movie;

    return (
        <div className="MovieDetailed">
            <video controls src="../content/VID-20190521-WA0001.mp4" height={"480px"}/>            
            <div className="additional-data">
                <h1 className="additional-data__title">{movie.title}</h1>
                <p className="additional-data__description">{movie.description}</p>
                <p className="additional-data__genre">Жанр: {movie.genre}</p>
                <p className="additional-data__duration">Продолжительность: {(movie.duration - movie.duration%60)/60} h {movie.duration%60} min</p>
                <p className="additional-data__rating">Рейтинг Кинопоиск: {movie.kinopoisk}</p>
            </div>
        </div>
    );
}

export default MovieDetailed;