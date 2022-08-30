import React from 'react'
import { useState, useEffect } from 'react';
import{ useNavigate}from "react-router-dom";
import CustomerServices from '../services/CustomerServices';
function CustomerList() {
  const [customers, setCustomers] = useState([]);
let navigate = useNavigate();
  //functional component lifecycle method(functional hook)
  useEffect(() => {        //here we are using 2 parametrs 1 is function(arrow) 2 is array
   
    getAllCustomer();
  }, []);
  const getAllCustomer = async () => {
    const data = await CustomerServices.getAllCustomers();
    console.log("====>" + data.data);
    setCustomers(data.data);
    console.log("Customers Data:" + customers)
  };
  const deleteData = (id) => {

    CustomerServices.deleteCustomer(id);

    getAllCustomer();

    window.location.reload(false);
  }
  
  const UpdateCustomer=(id)=>{
    navigate(`/update/${id}`);
  }

  const createCustomer=()=>{
    navigate("/create");
  
  };
  const ViewCustomer=(id)=>{
    navigate(`/view/${id}`)
  }

  return (
    <div className='container'>
      <h1>CustomerList</h1>
      <hr />
      <button
        className="btn btn-primary"
        style={{ float: "left" }}
        onClick={createCustomer}
      >
        +Customer
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">PhoneNo</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.add}</td>
                <td>{customer.phone}</td>
                <td>
                  <a className="btn btn-primary"
                   style={{ margin: "10px" }}
                  onClick={()=>UpdateCustomer(customer.id)}>
                    Edit
                  </a>
                  <button className="btn btn-danger" 
                  onClick={() => deleteData(customer.id)} >Delete</button>
                  <a className="btn btn-primary"
                   style={{ margin: "10px" }}
                  onClick={()=>ViewCustomer(customer.id)}>
                    View
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


    </div>
  );
}

export default CustomerList;
