function Movie(props) {
    const { id,
            title,
            poster_path
        } = props.movie;
    return (
        <div className="movie" key={id}>
            <div className="movie__poster"
                style={{"background": `url(${"https://image.tmdb.org/t/p/w500"+poster_path}) no-repeat`,
                        "backgroundSize": "320px"}}/>
            <h1 className="movie__title">{title}</h1>
        </div>
    )
}

export default Movie;