import React from 'react';
import '../stylesheets/Home.css';
function Home(props) {
    const isLogged = props.isLogged;
    return (
        <div className="home">
            {isLogged ?
                <h1>Welcome to Watchflix<br/>WATCH MOVIES FOR FREE</h1>
                : <h1>YOU NEED TO SIGN TO SEE MOVIES</h1>
            }
            <div className="main-image"/>
        </div>
    )
}

export default Home;