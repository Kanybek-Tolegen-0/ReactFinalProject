import { useRef} from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SignUpPage.css';
import axios from 'axios';

function SignUpPage(props) {
    const username = useRef("");
    const password = useRef("");
    async function signUp(e) {
        e.preventDefault();
        let found = false;
        const username_input = username.current?.value;
        const password_input = password.current?.value;
        if(username_input.length>=4 && password_input.length>=4) {
            await axios.get('https://reactfinal-b6792-default-rtdb.firebaseio.com/users.json')
            .then((response) => {
                const users = response.data;
                for(let key in users) {
                    if(users[key].username === username_input && !found) {
                        alert("Такой пользователь уже существует");
                        found = true;
                        break;
                    }
                }
            });

            if(found === false) {
                const user = {   
                    username: username_input,
                    password: password_input,
                };
                await axios.post('https://reactfinal-b6792-default-rtdb.firebaseio.com/users.json',
                                user
                ).then(response => {
                    props.setUser(user);
                    props.setLogged(true);
                    alert("Регистрация прошла успешна");
                });
            }
        }
        else {
            if(username.current.value.length<4) {
                alert("Слишком короткое имя");
            }
            else if (password.current.value.length<4){
                alert("Ненадежный пароль! Введите больше 4 символов");
            }
        }
    }
    return (
        <div className="signUpPage">
        <h1 className='signUpPage__title'>Sign Up Page</h1>
        <form className="user-data">
            <input required ref={username} className="user-data__username" type="text" placeholder="username"/>
            <input required ref={password} className="user-data__password" type="password" placeholder="password"/>
            <button onClick={signUp} className="sign-up-button">Sign Up</button>
            <Link to="/login">Уже есть аккаунт?</Link>
        </form>
    </div>
    )
}

export default SignUpPage;