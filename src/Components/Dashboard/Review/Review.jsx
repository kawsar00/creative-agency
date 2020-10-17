import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';


const Review = () => {
  const { loggedInUser } = useContext(UserContext)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch('https://murmuring-lowlands-09512.herokuapp.com/addReview', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Review added successfully')
        }
      })
  }
  return (
    <section className="container-fluid row order-container pt-3">
      <DashboardSidebar />
      <div className="col-md-10 col-sm-12">
        <div className="d-flex justify-content-between">
          <h3>Order</h3>
          <h4>{loggedInUser.name}</h4>
        </div>
        <div style={{ position: "absolute", left: 0, backgroundColor: "#F4F7FC" }} className="p-5 w-100">
          <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control border-0 py-4" />
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <input type="text" ref={register({ required: true })} name="service" placeholder="Company's Name, Designation" className="form-control border-0 py-4" />
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <textarea name="details" className="form-control border-0" id="" cols="15" rows="5" placeholder="Description" ref={register({ required: true })}></textarea>
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-dark py-2 w-25">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;