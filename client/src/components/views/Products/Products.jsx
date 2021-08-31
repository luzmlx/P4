// needs nested routes to get to CakePage

import React from "react";
import "./products.css";
// import {  Route } from 'react-router-dom'
import CakePage from "../CakePage/CakePage";
import { Link, Route } from "react-router-dom";
// import Cakes from '../Cakes/Cakes'
// import CakePage from '../CakePage/CakePage'

export default function Products() {
  return (
    <div className="firstdiv">
      <h3 className="menutext">Menu</h3>
      <div className="cakecontainer">
        

        <div class="container">
          <img
            src="https://i.imgur.com/9YABzz9.jpg"
            alt="Avatar"
            class="image"
          />
          <div class="middle">
            <Link to="/products/cakes">
              <button className="cakebutton">{/* <Cakes /> */}</button>

              {/* <CakePage /> */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
