import React from "react";

import { Link } from 'react-router-dom';

const NavbarOut = () => {
  return (
    <div className='navbar'>
      <p>
        <Link to="/">Sign In</Link>
      </p>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default NavbarOut; 
