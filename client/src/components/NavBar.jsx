import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <h1>React MySQL</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Crear nuevo</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
