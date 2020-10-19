import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import spinner1 from '../../../images/spinner1.gif';


const Service = () => {
  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    fetch('https://murmuring-lowlands-09512.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServiceData(data))
  }, [])

  return (
    <section id="selectService" className="py-5">
      <h2 className='text-center font-weight-bold'>Provide awesome <span style={{ color: '#7AB259' }} >services</span></h2>
      <div className="d-flex justify-content-center mt-4">
        <div style={{ width: '85%' }} className="row">
          {
            serviceData.length === 0 && <img src={spinner1} alt="" className="m-auto"/>
          }
          {
            serviceData.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Service;