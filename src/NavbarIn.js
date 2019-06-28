import React from "react";

import { Link } from 'react-router-dom';

const NavbarIn = () => {
  return (
    <div>
      <p className='navbarIn'>
        <Link to="/users">Home</Link>
      </p>
    </div>
  );
};

export default NavbarIn; 