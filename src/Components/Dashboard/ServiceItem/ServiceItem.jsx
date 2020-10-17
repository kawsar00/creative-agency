import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const ServiceItem = (props) => {
  const { service, details, email } = props.singleServiceData
  const { loggedInUser } = useContext(UserContext)
  const singleUser = loggedInUser.email === email

  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServiceData(data))
  }, [])

  const orderItem = serviceData.find(data => data.title === service)

  return (
    <div className="col-md-6 col-sm-12 serviceCard">
      <div style={{ border: 'none' }} className="card my-3 shadow">
        <div className="card-body text-center">
          {
            orderItem && singleUser && <div>
              <img className="img-fluid" style={{ width: '80px' }} src={`data:image/png;base64,${orderItem.image.img}`} alt="" />
              <h5 className="card-title text-brand font-weight-bold my-3">{service}</h5>
              <p className="card-text text-secondary">{details}</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;