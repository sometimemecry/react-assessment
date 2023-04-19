import React from "react";
import './Header.css'

const Header = ({}) => {
  return (
    <>
      <div className="navbar">
        <span>
          <a href="/">Home</a>
        </span>
        <span>
          <a href="Owner">Owner</a>
        </span>
      </div>
    </>
  );
};

export default Header;
