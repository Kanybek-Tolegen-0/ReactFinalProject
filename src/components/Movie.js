function Movie(props) {
    const { id,
            title,
            duration,
            kinopoisk,
            director,
            genre,
            year,
            image
        } = props.movie;
    return (
        <div className="movie" key={id}>
            <div className="movie__poster"
                style={{"background": `url(${image}) no-repeat`,
                        "backgroundSize": "320px"}}/>
            <h1 className="movie__title">{title}</h1>
        </div>
    )
}

export default Movie;