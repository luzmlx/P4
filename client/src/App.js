import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Login from './components/views/Login/Login';
import {loginUser, registerUser, verifyUser, removeToken} from './services/auth'
import Register from './components/views/Register/Register';
import MainPage from './components/views/MainPage/MainPage';
import Products from './components/views/Products/Products';
import Footer from './components/views/Footer/Footer';
import CakePage from './components/views/CakePage/CakePage';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])

  const handleLogin = async(formData) => {
    const userData = await loginUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleRegister = async(formData) => {
    const userData = await registerUser(formData)
    setCurrentUser(userData)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    // history.push('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>

        <Route path='/products/cakes'>
            <CakePage currentUser={currentUser}/>
          </Route>
          
        <Route path='/products'>
              <Products />
          </Route>


          {/* Make Login View */}
          <Route path='/login'>
              <Login handleLogin={handleLogin} />
          </Route>

          {/* Make Register View */}
          <Route path='/register'>
              <Register handleRegister={handleRegister} />
          </Route>
          {/* Homepage */}
          <Route exact path='/'>
          <MainPage />
          </Route>
        </Switch>
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
