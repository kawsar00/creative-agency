import React from 'react';
import './Category.css'
import airbnb from '../../../logos/airbnb.png';
import googleLogo from '../../../logos/googleLogo.png';
import netflix from '../../../logos/netflix.png';
import slack from '../../../logos/slack.png';
import uber from '../../../logos/uber.png';


const Category = () => {
  return (
    <section className="container-fluid category-container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-2 col-6 mb-4 text-center">
          <img src={slack} alt="" />
        </div>
        <div className="col-md-2 col-6 mb-4 text-center">
          <img src={googleLogo} alt="" />
        </div>
        <div className="col-md-2 col-6 mb-4 text-center">
         <img src={uber} alt="" />
        </div>
        <div className="col-md-2 col-6 mb-4 text-center">
         <img src={netflix} alt="" />
        </div>
        <div className="col-md-2 col-6 mb-4 text-center">
         <img src={airbnb} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Category;