import { useSelector } from "react-redux";

function Favorites() {
    const favorites = useSelector((state) => state.favoriteStore.favorites);

    return (
        <div className="content">
            {Object.values(favorites).map((favorite) => (
              console.log(favorite)
            ))}
          </div>
    );
}

export default Favorites;