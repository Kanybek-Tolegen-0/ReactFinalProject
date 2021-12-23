import { useRef } from 'react';
import '../stylesheets/LoginPage.css';

function LoginPage(props) {
    const username = useRef();
    const password = useRef();
    function login(e) {
        e.preventDefault();
        if(username.current.value === "Kanybek" && password.current.value === "123") {
            alert("Success");
            props.setLogged(true);
        }
    }

    return (
            <div className="loginPage">
                <h1 className='loginPage__title'>Login Page</h1>
                <form className="user-data">
                    <input ref={username} className="user-data__username" type="text" placeholder="username"/>
                    <input ref={password} className="user-data__password" type="password" placeholder="password"/>
                    <button onClick={login} className="login-button">Log in</button>
                </form>
            </div>
    )
}

export default LoginPage;