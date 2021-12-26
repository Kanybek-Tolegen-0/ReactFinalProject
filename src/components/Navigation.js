import { Link } from 'react-router-dom';
import '../stylesheets/Navigation.css';
import Badge from "@bit/mui-org.material-ui.badge";
import { useSelector } from "react-redux";

function Navigation(props) {
  let badgeContent = useSelector((state) => state.favoriteStore.favorites);
  let size = Object.keys(badgeContent).length;
    return (
        <nav className='navigation'>
        <ul className='navigation__list'>
          <li><Link to=''>Home</Link></li>
          <li><Link to='movies'>Movies</Link></li>
          <li><Link to='tvshows'>TV Shows</Link></li>
          <li><Link to='favorites'><Badge
            color="primary"
            badgeContent={size}
            classes={{ badge: "badge-style"}}>
            Favorites
          </Badge></Link></li>
        </ul>
      </nav>
    )
}

export default Navigation;