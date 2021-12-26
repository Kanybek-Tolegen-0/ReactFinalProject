import Navigation from './Navigation';
import '../stylesheets/Header.css';
import User from './User';
import { Link } from 'react-router-dom';
import isLoggedInContext from '../context/IsLoginContext';
import {useMemo, useState} from 'react';

function Header(props) {
  const {isLogged, setLogged} = props.value;
    return(
        <header className="header">
          <img className="main-logo-img"/>
            <isLoggedInContext.Consumer>
              {(value) => (<Navigation isLoggedIn = {value}/>)}
            </isLoggedInContext.Consumer>
            <isLoggedInContext.Consumer>
              {(value) => (<User currentUser = {value.user} isLogged = {value.isLogged}/>)}
            </isLoggedInContext.Consumer>
            { !isLogged ? <Link to="/login"><button className='log-btn'>Login</button></Link> : <Link onClick={() => {setLogged(false)}} to=""><button className='log-btn'>Logout</button></Link>}
      </header>
    )
}

export default Header;