import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import ServiceItem from '../ServiceItem/ServiceItem';
import spinner2 from '../../../images/spinner2.gif';


const Services = () => {
  const { loggedInUser } = useContext(UserContext)
  const [servicesData, setServicesData] = useState([])

  useEffect(() => {
    fetch('https://murmuring-lowlands-09512.herokuapp.com/orders')
      .then(res => res.json())
      .then(data => {
        setServicesData(data)
      })
  }, [])

  return (
    <section className="container-fluid row order-container pt-3">
      <DashboardSidebar />
      <div className="col-md-10 col-sm-12">
        <div className="d-flex justify-content-between">
          <h3>Order</h3>
          <h4>{loggedInUser.name}</h4>
        </div>
        <div style={{ position: "absolute", left: 0, backgroundColor: "#F4F7FC" }} className="p-5 w-100">
          <div className="row">
          {
          servicesData.length === 0 && <img src={spinner2} alt="" className="m-auto" />
        }
            {
              servicesData &&
              servicesData.map(singleServiceData => <ServiceItem singleServiceData={singleServiceData} key={singleServiceData._id}></ServiceItem>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;