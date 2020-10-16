import React from 'react';
import './DashboardNavbar.css'
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faInbox, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const DashboardNavbar = () => {
  return (
    <div className="pt-4 container-fluid">
      <div className="col-md-3 bg-white">
        <Link to="/home"><img className="mb-5" height="50" src={logo} alt="" /></Link>
        <div className="mb-2 ">
          <Link className="icon-style" to="#"><FontAwesomeIcon className="mr-2" icon={faShoppingCart} /> Order</Link>
        </div>
        <div className="mb-2 ">
          <Link className="icon-style" to="#"><FontAwesomeIcon className="mr-2 " icon={faInbox} /> Service List</Link>
        </div>
        <div className="mb-2 ">
          <Link className="icon-style" to="#"><FontAwesomeIcon className="mr-2 " icon={faCommentDots} /> Review</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;