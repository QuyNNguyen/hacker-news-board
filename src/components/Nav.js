import React from 'react'
import {NavLink} from "react-router-dom"

const activeStyle = {
  color: "rgb(187, 46, 31)",
};

export default function Nav(){
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink exact to="/" activeStyle={activeStyle} className="nav-link">
            {" "}
            Hot{" "}
          </NavLink>
          <NavLink
            exact
            to="/new"
            activeStyle={activeStyle}
            className="nav-link"
          >
            {" "}
            New{" "}
          </NavLink>
        </li>
      </ul>
      <button style={{ fontSize: 30 }} className="btn-clear">
        🌞
      </button>
    </nav>
  );
}

