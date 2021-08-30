import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Login from './components/views/Login';
import {loginUser, registerUser, verifyUser, removeToken} from './services/auth'
import Register from './components/views/Register';

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
    history.push('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>

          {/* Make Product Views */}
        <Route path='/products'>
              <h2>Products</h2>
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
          <Route path='/'>
          <h1>Welcome Block </h1>
        <hr />
        <h1>View Menu Block</h1>
        <hr />
        <h1>Contact Info Block</h1>
        <hr />
        <h1> Footer</h1>
        <hr />
          </Route>
        </Switch>
        {/* <h1>Welcome Block </h1>
        <hr />
        <h1>View Menu Block</h1>
        <hr />
        <h1>Contact Info Block</h1>
        <hr />
        <h1> Footer</h1>
        <hr /> */}
      </Layout>
    </div>
  );
}

export default App;
