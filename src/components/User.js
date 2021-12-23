import '../stylesheets/User.css';
function User(props) {
    const isLogged = props.isLogged;

    return (
        isLogged ?
        <div className='user'>
            <div className='user__ava'/>
            <h3 className='user__name'>Kanybek</h3>
        </div>
        :
        ""
    )
}

export default User;