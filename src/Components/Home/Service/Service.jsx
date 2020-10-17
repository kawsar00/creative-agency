import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Service = () => {
  const [serviceData, setServiceData] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])
    
  return (
    <section className="py-5">
      <h2 className='text-center font-weight-bold'>Provide awesome <span style={{color: '#7AB259'}} >services</span></h2>
      <div className="d-flex justify-content-center mt-4">
      <div style={{width: '85%'}} className="row">
        {
         serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
        }
      </div>
      </div>
    </section>
  );
};

export default Service;