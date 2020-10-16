import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardSidebar from '../../Dashboard/DashboardSidebar/DashboardSidebar';

const AddService = () => {
  const { loggedInUser } = useContext(UserContext)

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleSubmit = () => {
    // const formData = new FormData()
    // console.log(info);
    // formData.append('file', file);
    // formData.append('name', info.name);
    // formData.append('email', info.email);

    // fetch('https://salty-plateau-71286.herokuapp.com/addADoctor', {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
  }

  return (
    <section className="container-fluid row pt-3">
      <DashboardSidebar />
      <div className="col-md-9 col-sm-12">
        <div className="d-flex justify-content-between">
          <h3>Order</h3>
          <h4>{loggedInUser.name}</h4>
        </div>
        <div style={{ position: "absolute", left: 0, backgroundColor: "#F4F7FC" }} className="p-5 w-100">
          <form onSubmit={handleSubmit}>
            <div className="row pb-2">
              <div style={{borderRadius:'15px'}} className="bg-white p-4 w-100">
                <div className="d-flex">
                  <div className="form-group col-md-6">
                    <label htmlFor="exampleInputEmail1">Service Title</label>
                    <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" required/>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="exampleInputPassword1">Icon</label>
                    <input onChange={handleFileChange} type="file" className="form-control border-0" id="exampleInputPassword1" placeholder="Picture" required/>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <textarea onBlur={handleBlur} name="details" className="form-control" id="" cols="15" rows="5" placeholder="Enter Description" required></textarea>
                </div>
              </div>
            </div>
            <div className="form-group text-right">
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default AddService;