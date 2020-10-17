import React, { useContext, useEffect, useState } from 'react';
import './DashboardSidebar.css'
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faInbox, faPlus, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const DashboardSidebar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/isAdmin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: loggedInUser.email })
    })
      .then(res => res.json())
      .then(data => setIsAdmin(data));
  }, [])

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
        {
          isAdmin && <div>
            <li className="mb-2">
              <Link className="icon-style" to="/serviceList"><FontAwesomeIcon className="mr-2 " icon={faInbox} /> Service List</Link>
            </li>
            <li className="mb-2">
              <Link className="icon-style" to="/AddService"><FontAwesomeIcon className="mr-2" icon={faPlus} /> Add Service</Link>
            </li>
            <li className="mb-2">
              <Link className="icon-style" to="/makeAdmin"><FontAwesomeIcon className="mr-2 " icon={faUser} /> Make Admin</Link>
            </li>
          </div>

        }
      </ul>
    </div>

  );
};

export default DashboardSidebar;