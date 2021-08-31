// needs nested routes to get to CakePage

import React from "react";
import "./products.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="firstdiv">
      <h3 className="menutext">Menu</h3>
      <div className="cakecontainer">
        

        <div className="container">
          <img
            src="https://i.imgur.com/9YABzz9.jpg"
            alt="Avatar"
            className="image"
          />
          <div className="middle">
            <Link to="/products/cakes">
              <button className="cakebutton">Cakes</button>

              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
