import { useSelector } from "react-redux";
import TVShow from "./TVShow";

function Favorites() {
    const favorites = useSelector((state) => state.favoriteStore.favorites);

    return (
        <div className='tv-shows'>
            {Object.values(favorites).map((favorite) => (
                <TVShow tvShow={favorite} />
            ))}
          </div>
    );
}

export default Favorites;