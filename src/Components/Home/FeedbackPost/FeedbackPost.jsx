import React from 'react';

const FeedbackPost = (props) => {
  const { name, service, details } = props.feedback

  return (
    <div className="col-md-4 col-sm-6 my-3">
      <div className="card shadow-sm ">
      <div className="card-header d-flex align-items-center">
        <div className="mt-3">
          <h5 className="font-weight-bold">{name}</h5>
          <h6 className="font-weight-bold">{service}</h6>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-secondary mt-4">{details}</p>
      </div>
    </div>
    </div>
  );
};

export default FeedbackPost;