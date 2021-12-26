import '../stylesheets/TVShow.scss';
import dateFormat from 'dateformat';
import {
    addToFavorites,
    removeFromFavorites,
  } from "../redux/favoritesActions";
import { useDispatch, useSelector } from "react-redux";

export default function TVShow(props) {
    const { 
        id,
        name,
        overview,
        vote_average,
        first_air_date,
        poster_path,
        backdrop_path,
        origin_country
    } = props.tvShow;

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favoriteStore.favorites);
    const isFavorite = id in favorites;
    const isValidOverview = overview.length != 0 && overview.length < 357;

    const isStored = (value) => {
        if (value) {
        dispatch(removeFromFavorites(props.tvShow));
        } else {
        dispatch(addToFavorites(props.tvShow));
        }
    };

    return (                
        <>
            { isValidOverview ?
                <div className="tvshow_card" id="tv">
                    <div className="info_section">
                        <div className="tvshow_header">
                            <img className="poster" src={`https://image.tmdb.org/t/p/w342${poster_path}`} />
                            <h1>{name}</h1>
                            <h4>{dateFormat(first_air_date, "yyyy")}</h4>
                            <span className="country">{origin_country[0]}</span>
                            <p className="vote">{vote_average} ★</p>
                        </div>
                        <div className="tvshow_desc">
                            <p className="text">{overview}</p>
                        </div>
                        <div className="tvshow_fav">
                            <button className="add-to-fav" onClick={() => {
                                    isStored(isFavorite);
                                }}>{isFavorite ? "Remove from favorites" : "Add to favorites"}</button>
                        </div>
                    </div>
                    <div className="blur_back" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`, width: 800, height: 400 }}></div>
                </div> : <></>
            }
        </>
    )
}