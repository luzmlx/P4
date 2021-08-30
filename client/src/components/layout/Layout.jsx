
import { Link } from 'react-router-dom'
import './layout.css'

export default function Layout(props) {

const {user} = props

    return (
        <header>
            <Link to='/' className='linktohome'>SweetTreats</Link>
            { 
            user ? (
                <div>
                    <p>{user.firstName}</p>
                    <button>Logout</button>
                </div>
            ) : (
                <div>
            <Link to='/products'>Products</Link>
            <Link to='/login'> Login </Link>
            <Link to='/register'> Register</Link>
                </div>
            )
            }
            {/* gives a line mucho cool */}
            <hr />

            {user && (
                <div>
                    <Link to='products'>Cakes</Link>
                    
                </div>
            )}

            {props.children}
        </header>
    )
}