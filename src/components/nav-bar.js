import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav>
      <NavLink
        exact to="/about-me"
        activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}
      >
        about me
      </NavLink>
      <FontAwesomeIcon icon={faCircle} />
      <NavLink
        exact to="/projects"
        activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}
      >
        projects
      </NavLink>
      <FontAwesomeIcon icon={faCircle} />
      <NavLink
        exact to="/shop"
        activeStyle={{
          fontWeight: "bold",
          color: "white"
        }}
      >
        plants for sale
      </NavLink>
    </nav>
  );
}
