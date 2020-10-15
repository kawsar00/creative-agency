import React from 'react';
import service1 from '../../../icons/service1.png'
import service2 from '../../../icons/service2.png'
import service3 from '../../../icons/service3.png'
import ServiceCard from '../ServiceCard/ServiceCard';

const serviceData = [
  {img:service1, title:'Web & Mobile design', description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'},
  {img:service2, title:'Graphic design', description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'},
  {img:service3, title:'Web development', description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'},
]

const Service = () => {
  return (
    <section className="py-5">
      <h2 className='text-center font-weight-bold'>Provide awesome <span style={{color: '#7AB259'}} >services</span></h2>
      <div className="d-flex justify-content-center mt-4">
      <div className="row w-75">
        {
         serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
        }
      </div>
      </div>
    </section>
  );
};

export default Service;