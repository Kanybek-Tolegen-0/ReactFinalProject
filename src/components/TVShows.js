import axios from "axios";
import { useEffect, useState } from "react";
import api_key from '../Key';
import TVShow from "./TVShow";

function TVShows() {
    const [tvShows, setTvShows] = useState([])
    const [searchedText, setSearchedText] = useState("");

    useEffect(() => getTvShows(), []);

    async function getTvShows() {
        await axios.get('https://api.themoviedb.org/3/tv/popular/', {
            params: { api_key: api_key, page: "1" },
        })
            .then((response) => {
                setTvShows(response.data.results);
                console.log(response.data)
            });
    };

    async function onSearch() {
        await axios.get('https://api.themoviedb.org/3/search/tv', {
            params: { api_key: api_key, page: "1", query: searchedText },
        })
            .then((response) => {
                setTvShows(response.data.results);
            });
    }

    return (
        <div className='TVShows'>
            <div className='search'>
                <input className='search__input' onChange={(e) => {
                    setSearchedText(e.target.value);
                    onSearch()
                }} />
            </div>
            <h1>TV Shows</h1>
            {
                (tvShows).map((tvShow1) =>
                    <TVShow tvShow={tvShow1} />
                )
            }
        </div>
    );
}

export default TVShows;