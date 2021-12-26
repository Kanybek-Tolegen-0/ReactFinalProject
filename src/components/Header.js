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
            <h1 className="main-logo">Watchflix</h1>
            <isLoggedInContext.Consumer>
              {(value) => (<Navigation isLoggedIn = {value}/>)}
            </isLoggedInContext.Consumer>
            <isLoggedInContext.Consumer>
              {(value) => (<User currentUser = {value.user} isLogged = {value.isLogged}/>)}
            </isLoggedInContext.Consumer>
            { !isLogged ? <Link to="/login">Login</Link> : <Link onClick={() => {setLogged(false)}} to="">Logout</Link>}
      </header>
    )
}

export default Header;