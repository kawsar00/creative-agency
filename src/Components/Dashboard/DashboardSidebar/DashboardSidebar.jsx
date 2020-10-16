import React from 'react';
import './DashboardSidebar.css'
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faInbox, faPlus, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const DashboardSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-3 col-sm-12">
      <Link to="/home"><img className="mb-5" height="50" src={logo} alt="" /></Link>
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link className="icon-style" to="/order"><FontAwesomeIcon className="mr-2" icon={faShoppingCart} /> Order</Link>
        </li>
        <li className="mb-2">
          <Link className="icon-style" to="/serviceData"><FontAwesomeIcon className="mr-2 " icon={faInbox} /> Service List</Link>
        </li>
        <li className="mb-2">
          <Link className="icon-style" to="/review"><FontAwesomeIcon className="mr-2 " icon={faCommentDots} /> Review</Link>
        </li>
        

        
        <li className="mb-2">
          <Link className="icon-style" to="/serviceList"><FontAwesomeIcon className="mr-2 " icon={faInbox} /> Service List</Link>
        </li>
        <li className="mb-2">
          <Link className="icon-style" to="/AddService"><FontAwesomeIcon className="mr-2" icon={faPlus} /> Add Service</Link>
        </li>
        <li className="mb-2">
          <Link className="icon-style" to="/makeAdmin"><FontAwesomeIcon className="mr-2 " icon={faUser} /> Make Admin</Link>
        </li>
      </ul>
    </div>

  );
};

export default DashboardSidebar;