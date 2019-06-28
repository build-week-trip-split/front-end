import React from "react";

import { Link } from "react-router-dom";

class Footer extends React.Component {

  render() {
    return (
    <div className='footer'>
        <footer>
            <small>
            <Link to="/users">Home</Link>
            </small>
            <small>
            <Link to="/">Sign In</Link>
            </small>
            <small>
            <Link to="/signup">Sign Up</Link>
            </small>
        </footer>
      </div>
    );
  }
}

export default Footer;
