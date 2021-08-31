
import { Link } from 'react-router-dom'
import './layout.css'
// import Footer from '../views/Footer/Footer'

export default function Layout(props) {
const { currentUser, handleLogout} = props

    return (
        <header>
            <Link to='/' className='linktohome'>SweetTreats</Link>
            { 
            currentUser ? (
                <div className='first-div'>
                    <p className='userfirstname'>Welcome, {currentUser.first_name}</p>
                    <button className='logout-button' onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
            
            <Link to='/login' className='loginlink'> Login </Link>
            <Link to='/register' className='registerlink'> Register</Link>
                </div>
            )
            }

            {currentUser && (
                <div className='second-div'>
                    <Link to='products' className='productslink'>Products</Link>
                    
                </div>
            )}

            {props.children}
           
        </header>
         
    )
}