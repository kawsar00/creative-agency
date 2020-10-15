import React from 'react';
import './Category.css'
import airbnb from '../../../logos/airbnb.png';
import googleLogo from '../../../logos/googleLogo.png';
import netflix from '../../../logos/netflix.png';
import slack from '../../../logos/slack.png';
import uber from '../../../logos/uber.png';


const Category = () => {
  return (
    <section className="container-fluid category-container d-flex justify-content-center my-5">
      <div className="row"></div>
      <div className="col-md-2 col-4">
        <span><img src={slack} alt=""/></span>
      </div>
      <div className="col-md-2 col-4">
        <span><img src={googleLogo} alt=""/></span>
      </div>
      <div className="col-md-2 col-4">
        <span><img src={uber} alt=""/></span>
      </div>
      <div className="col-md-2 col-4">
        <span><img src={netflix} alt=""/></span>
      </div>
      <div className="col-md-2 col-4">
        <span><img src={airbnb} alt=""/></span>
      </div>
    </section>
  );
};

export default Category;