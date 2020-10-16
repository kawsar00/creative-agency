import React from 'react';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';




const Dashboard = () => {
  return (
    <section className="container-fluid row order-container pt-3">
      <DashboardSidebar></DashboardSidebar>
      <div className="col-md-9 col-sm-12">
        <div style={{ position: "absolute", height:'400px', left: 0, backgroundColor: "#F4F7FC" }} className="p-5 w-100">
            <h1 className="text-secondary text-center">No Data Here</h1>
        </div>
      </div>

    </section>
  );
};

export default Dashboard;