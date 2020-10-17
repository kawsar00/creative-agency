import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../logos/logo.png'

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/home">
        <img style={{ width: '150px' }} src={logo} alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link mr-5" href="/#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="/dashboard">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="/#">Our Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="/#">Our Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-5" href="/#">Contact Us</a>
          </li>
          <li className="nav-item">

            <Link to="/login"><button className="btn btn-dark px-4">Login</button></Link>

            {/* {
              loggedInUser.isSignIn ?
              <Link onClick={() => setLoggedInUser({})} to="/home"><button className="btn btn-dark px-4">Log Out</button></Link>
              :
              <Link to="/login"><button className="btn btn-dark px-4">Login</button></Link>
            } */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;