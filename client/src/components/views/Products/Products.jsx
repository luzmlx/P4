// needs nested routes to get to CakePage

import React from 'react'

import {  Route } from 'react-router-dom'
import CakePage from '../CakePage/CakePage'



export default function Products () {

    

    return (
        <div>
            <h3>Menu</h3>
            <hr />
            <div className='cakecontainer'>
            <Route path='/products/cakes'>
                
                <CakePage/>
            </Route>
            </div>
        
          
        </div>
    )
}
