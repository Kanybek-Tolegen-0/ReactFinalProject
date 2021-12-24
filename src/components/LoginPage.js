import { useRef } from 'react';
import '../stylesheets/LoginPage.css';
import axios from 'axios';
function LoginPage(props) {
    const username = useRef("");
    const password = useRef("");
    async function login(e) {
        e.preventDefault();
        await axios.get("https://reactfinal-b6792-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
            const users = response.data;
            users.forEach((user) => {
                if(user?.username === username?.current?.value && user?.password === password?.current?.value){
                    console.log(user);
                    props.setUser(user);
                    props.setLogged(true);
                }
            })
        });
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