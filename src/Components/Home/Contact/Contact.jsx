import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div style={{ background: '#FBD062' }} className="contact my-5 py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-5 col-sm-12 pb-5">
            <h2 className="font-weight-bold text-brand">Let us handle your project, professionally.</h2>
            <p className=" my-3 text-secondary">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
          </div>
          <div className="col-md-7 col-sm-12 pb-5">
            <form action="">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email Address *" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name / Company's Name *" />
              </div>
              <div className="form-group">
                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
              </div>
              <div className="form-group">
              <button className="btn btn-dark px-4 w-25">Send</button>
              </div>
            </form>
          </div>
          <div className="col-md-12 text-center text-secondary pt-5">
          <p>Copyright Orange Lab {(new Date()).getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;