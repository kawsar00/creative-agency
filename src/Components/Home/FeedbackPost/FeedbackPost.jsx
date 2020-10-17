import React from 'react';

const FeedbackPost = (props) => {
  const { title, description, author, authorImg } = props.feedback

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card shadow-sm ">
      <div className="card-header d-flex align-items-center">
        <div >
          <img className="mx-3" width="60" src={authorImg} alt="" />
        </div>
        <div className="mt-3">
          <h5 className="font-weight-bold">{author}</h5>
          <h6 className="font-weight-bold">{title}</h6>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-secondary mt-4">{description}</p>
      </div>
    </div>
    </div>
  );
};

export default FeedbackPost;