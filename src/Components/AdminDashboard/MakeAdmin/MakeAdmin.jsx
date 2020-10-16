import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import DashboardSidebar from '../../Dashboard/DashboardSidebar/DashboardSidebar';


const MakeAdmin = () => {
  const { loggedInUser } = useContext(UserContext)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <section className="container-fluid row order-container pt-3">
      <DashboardSidebar />
      <div className="col-md-9 col-sm-12">
        <div className="d-flex justify-content-between">
          <h3>Order</h3>
          <h4>{loggedInUser.name}</h4>
        </div>
        <div style={{ position: "absolute", left: 0, backgroundColor: "#F4F7FC" }} className="p-5 w-100">
          <form style={{ borderRadius: '15px' }} className="bg-white p-4 w-75" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="form-group w-75 col-md-10 p-0">
                <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" ref={register({ required: true })}></input>
                {errors.email && <span className="text-danger">This field is required</span>}
              </div>
              <div className="form-group col-md-2 px-1">
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
