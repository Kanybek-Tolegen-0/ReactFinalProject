import { Link } from 'react-router-dom';
import '../stylesheets/Navigation.css';
function Navigation(props) {
    return (
        <nav className='navigation'>
        <ul className='navigation__list'>
          <li><Link to=''>Home</Link></li>
          <li><Link to='movies'>Movies</Link></li>
          <li><Link to='tvshows'>TV Shows</Link></li>
        </ul>
      </nav>
    )
}

export default Navigation;