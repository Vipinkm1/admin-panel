import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <GiHamburgerMenu onClick={toggleSidebar} />
      Navbar
    </div>
  );
};

export default Navbar;
