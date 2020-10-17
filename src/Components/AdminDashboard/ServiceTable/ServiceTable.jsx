import React from 'react';

const ServiceTable = ({servicesData}) => {
  return (
    <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Project Details</th>
                <th className="text-secondary" scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                  servicesData.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.service}</td>
                        <td>{service.details}KG</td>
                        <td>{service.price}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
  );
};

export default ServiceTable;