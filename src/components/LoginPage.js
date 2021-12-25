import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
            let found = false;
            for(let key in users) {
                if(users[key]?.username === username?.current?.value && users[key]?.password === password?.current?.value){
                    console.log(users[key]);
                    props.setUser(users[key]);
                    props.setLogged(true);
                    found = true;
                }
            }
            if(!found) {
                alert("Неправильный логин или пароль");
            }
        });
    }

    return (
            <div className="loginPage">
                <h1 className='loginPage__title'>Login Page</h1>
                <form className="user-data">
                    <input ref={ username } className="user-data__username" type="text" placeholder="username"/>
                    <input ref={ password } className="user-data__password" type="password" placeholder="password"/>
                    <button onClick={login} className="login-button">Log in</button>
                    <Link to="/sign-up">Нет аккаунта? Регистрируйся сейчас</Link>
                </form>
            </div>
    )
}

export default LoginPage;