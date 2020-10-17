import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';

const Order = () => {
  const { loggedInUser } = useContext(UserContext)
  const { register, handleSubmit, errors } = useForm();
  const { id } = useParams()


  const [serviceData, setServiceData] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServiceData(data))
  }, [])

  const serviceItem = serviceData.find(data => data._id === id)

  const onSubmit = data => {
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
      if (data) {
        // history.push("/item")
        alert('order submitted successfully')
      }
    })
  }
  return (
    <section className="container-fluid row order-container pt-3">
      <DashboardSidebar />
      <div className="col-md-9 col-sm-12">
        <div className="d-flex justify-content-between">
          <h3>Order</h3>
          <h4>{loggedInUser.name}</h4>
        </div>
        <div style={{ position: "absolute", left: 0, backgroundColor: "#F4F7FC" }} className="p-5 w-100">
          {
            serviceItem && loggedInUser &&

            <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input defaultValue={loggedInUser.name} type="text" ref={register({ required: true })} name="name" placeholder="Your Name / Company Name" className="form-control border-0 py-4" />
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <input defaultValue={loggedInUser.email} type="text" ref={register({ required: true })} name="email" placeholder="Your Email" className="form-control border-0 py-4" />
              {errors.email && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <input defaultValue={serviceItem.title} type="text" ref={register({ required: true })} name="service" placeholder="Graphic Design" className="form-control border-0 py-4" />
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group">
              <textarea defaultValue={serviceItem.description} name="details" className="form-control border-0" id="" cols="15" rows="5" placeholder="Project details" ref={register({ required: true })}></textarea>
              {errors.name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group row">
              <div className="col-6">
                <div className="form-group">
                  <input type="number" ref={register({ required: true })} name="price" placeholder="Price" className="form-control border-0 py-4" />
                  {errors.name && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="form-group">
            <button type="submit" className="btn btn-dark py-2 w-25">Send</button>
            </div>
          </form>
          }
        </div>
      </div>
    </section>
  );
};

export default Order;