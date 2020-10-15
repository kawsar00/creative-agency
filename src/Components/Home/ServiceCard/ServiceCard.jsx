import React from 'react';

const ServiceCard = ({service}) => {
  return (
    <div className="col-md-4 ">
      <div style={{border:'none'}} className="card my-3 shadow">
        <div className="card-body text-center">
          <img style={{width:'80px'}} src={service.img} alt="" className="img-fluid"/>
          <h5 className="card-title text-brand font-weight-bold my-3">{service.title}</h5>
          <p className="card-text text-secondary">{service.description} spaces available</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;