import axios from "axios";
import { useEffect, useState } from "react";
import api_key from '../Key';
import TVShow from "./TVShow";
import Loader from "./Loader"

function TVShows() {
    const [tvShows, setTvShows] = useState([])
    const [searchedText, setSearchedText] = useState("");
    const [isLoading, setLoading] = useState(true)

    useEffect(() => getTvShows(), []);

    async function getTvShows() {
        await axios.get('https://api.themoviedb.org/3/tv/popular/', {
            params: { api_key: api_key, page: "1" },
        })
            .then((response) => {
                setTvShows(response.data.results);
                setLoading(false)
            });
    };

    async function onSearch() {
        await axios.get('https://api.themoviedb.org/3/search/tv', {
            params: { api_key: api_key, page: "1", query: searchedText },
        })
            .then((response) => {
                setTvShows(response.data.results);
                setLoading(false)
            });
    }

    return (
        <div className="tv-shows">
            <div className='search'>
                <input className='search__input' onChange={(e) => {
                    setLoading(true)
                    setSearchedText(e.target.value);
                    onSearch()
                }} placeholder="Search for..." />
            </div>
            {isLoading ? <Loader /> :
                <div>
                    {
                        (tvShows).map((tvShow1) =>
                            <TVShow tvShow={tvShow1} />
                        )
                    }
                </div>}
        </div>
    );
        
}

export default TVShows;