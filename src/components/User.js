import '../stylesheets/User.css';
function User(props) {
    const isLogged = props.isLogged;
    const currentUser = props.currentUser;
    return (
        isLogged ?
        (<div className='user'>
            <div className='user__ava'/>
            <h3 className='user__name'>{currentUser?.username}</h3>
        </div>)
        :
        ""
    )
}

export default User;