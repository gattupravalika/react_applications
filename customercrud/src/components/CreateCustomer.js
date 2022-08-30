import React, { useEffect, useState } from 'react'
import CustomerServices from '../services/CustomerServices';

function CreateCustomer() {
    const [id, setId] = useState();
    const [name,setName]=useState();
    const[add,setAddress]=useState();
    const[phone,setPhone]=useState();
    const createCustomer = (e) => {
        e.preventDefault();
        let obj = {
            "id":parseInt(id),
            "name":name,
            "add":add,
            "phone":phone
        }
        CustomerServices.createCustomer(obj).then((res) => {
          
        });
      };
    return (
        <div className='container'>
            <h1>CreateCustomer</h1>
            <div class="mb-3">
                <label htmlfor="formGroupExampleId" className="form-label">Id </label>
                <input type="number" className="form-control" id="formGroupExampleId" placeholder="Example input placeholder"  onChange={(e) => setId(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label htmlfor="formGroupExampleName" className="form-label">Name </label>
                <input type="text" className="form-control" id="formGroupExampleName" placeholder="Example input placeholder"  onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label htmlfor="formGroupExampleAddress" className="form-label">Address </label>
                <input type="text" className="form-control" id="formGroupExampleAddress" placeholder="Example input placeholder"  onChange={(e) => setAddress(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label htmlfor="formGroupExamplePhoneNo" className="form-label">PhoneNo </label>
                <input type="number" className="form-control" id="formGroupExamplePhoneNo" placeholder="Example input placeholder"  onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <button onClick={createCustomer} className="btn btn-primary" style={{float:"center"}}>submit</button>
        </div>
    )
}

export default CreateCustomer
