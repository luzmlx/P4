
import { Link } from 'react-router-dom'
import './layout.css'

export default function Layout(props) {
const { currentUser, handleLogout} = props

    return (
        <header>
            <Link to='/' className='linktohome'>SweetTreats</Link>
            { 
            currentUser ? (
                <div>
                    <p>{currentUser.first_name}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
            
            <Link to='/login'> Login </Link>
            <Link to='/register'> Register</Link>
                </div>
            )
            }

            {currentUser && (
                <div>
                    <Link to='products'>Products</Link>
                    <hr />
                </div>
            )}

            {props.children}
        </header>
    )
}