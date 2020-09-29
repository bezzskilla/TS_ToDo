import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper pink darken-4 px1">
        <a href="#" className="brand-logo">
          React + Typescript
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/"> Список дел</Link>
            {/* <a href="/">Список дел</a> */}
          </li>
          <li>
            <Link to="/about"> Информация</Link>
            {/* <a href="/">Информация</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
