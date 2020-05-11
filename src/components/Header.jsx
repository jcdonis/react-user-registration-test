import React from "react";

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <div className="container">
        <i className="large material-icons">person_add</i>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://es.reactjs.org/docs/getting-started.html">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
