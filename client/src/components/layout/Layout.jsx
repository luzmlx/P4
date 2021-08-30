
import { Link } from 'react-router-dom'
import './layout.css'

export default function Layout(props) {
    return (
        <header>
            <Link to='/' className='linktohome'>SweetTreats</Link>
            <Link to='/products'>Products</Link>
            <Link to='/login'> Login </Link>
            <Link to='/register'> Register</Link>
            {/* gives a line mucho cool */}
            <hr />
            {props.children}
        </header>
    )
}