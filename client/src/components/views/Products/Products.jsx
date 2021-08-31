// needs nested routes to get to CakePage

import React from 'react'
import './products.css'
// import {  Route, Switch } from 'react-router-dom'
// import CakePage from '../CakePage/CakePage'



export default function Products () {

    

    return (
        <div className='firstdiv'>
            <h3 className='menutext'>Menu</h3>
            <div className='cakecontainer'>
                {/* <Switch>
            <Route path='/products/cakes'>
                
                <CakePage/>
            </Route>
            </Switch> */}
                <div class="container">
  <img src='https://i.imgur.com/9YABzz9.jpg' alt="Avatar" class="image" />
  <div class="middle">
  <button className='cakebutton'>Cakes</button> 
        </div>
            </div>

</div>
        
          
        </div>
    )
}
