import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardSidebar from '../../Dashboard/DashboardSidebar/DashboardSidebar';
import ServiceTable from '../ServiceTable/ServiceTable';

const ServiceList = () => {
  const [servicesData, setServicesData] = useState([])
  const { loggedInUser } = useContext(UserContext)


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
          <div className="d-flex">
            <img style={{ height: '35px' }} src={loggedInUser.img} alt="" className="img-img-fluid rounded mr-2" />
            <h4>{loggedInUser.name}</h4>
          </div>
        </div>
        <div style={{ position: "absolute", left: 0, backgroundColor: "#F4F7FC" }} className="p-2 w-100">
          <ServiceTable servicesData={servicesData}></ServiceTable>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;