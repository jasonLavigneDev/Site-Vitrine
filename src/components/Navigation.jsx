import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>Accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 1</li>
            </NavLink>
            <NavLink
              to="/project-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 2</li>
            </NavLink>
            <NavLink
              to="/project-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 3</li>
            </NavLink>
            <NavLink
              to="/project-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
