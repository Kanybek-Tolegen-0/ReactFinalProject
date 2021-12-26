import { useSelector } from "react-redux";
import AlertMessage from "./AlertMessage";
import TVShow from "./TVShow";

export default function Favorites() {
  localStorage.clear();
  const favorites = useSelector((state) => state.favoriteStore.favorites);
  return (
    <div className='tv-shows'>
      {
        Object.values(favorites).length != 0 ? Object.values(favorites).map((favorite) => (
          <TVShow tvShow={favorite} />
        )) : <AlertMessage
          primaryText="No Favorites"
          secondaryText="Go to TV-Shows to save."
        />}
    </div>
  );
}