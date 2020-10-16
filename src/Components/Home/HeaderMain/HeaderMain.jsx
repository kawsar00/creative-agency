import React from 'react';
import { Link } from 'react-router-dom';
import frame from '../../../logos/Frame.png'

const HeaderMain = () => {
  return (
    <main style={{height:'615px', marginTop:'-70px'}} className="row d-flex align-items-center"> 
    <div className="col-md-4 offset-md-1">
      <h1 style={{fontSize: '48px'}} className="font-weight-bold">Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
      <p className="text-dark py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias magni, quidem sit sunt magnam.</p>
      <Link to="/"><button className="btn btn-dark px-4">Hire us</button></Link>
    </div>
    <div className="col-md-6 d-none d-md-block">
      <img src={frame} alt="" className="img-fluid"/>
    </div>
    </main>
  );
};

export default HeaderMain;