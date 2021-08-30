import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Login from './components/views/Login';
import {loginUser} from './services/auth'

function App() {

  const [user, setUser] = useState(null)

  const handleLogin = async(loginData) => {
    const userData = await loginUser(loginData)
    setUser(userData)
  }

  return (
    <div className="App">
      <Layout>
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
              <h2>Register</h2>
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
