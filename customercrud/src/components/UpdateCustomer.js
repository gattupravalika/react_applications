import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
//use useParams
import { useParams } from "react-router-dom";
import CustomerServices from "../services/CustomerServices";

 function UpdateCustomer(){
  const [id, setId] = useState();
  const [name, setName] = useState();
  const[add,setAddress]=useState();
    const[phone,setPhone]=useState();
  const params = useParams();
 let navigate = useNavigate();
  useEffect(() => {
    CustomerServices.getCustomer(params.id).then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setAddress(res.data.add);
      setPhone(res.data.phone);
      console.log(res.data.id+" "+res.data.name+" "+res.data.Address+" "+res.data.PhoneNo+" ");

    })
  }, []);
//   const update=()=>{
//     alert(id+ " " +name+ " "+Address+ " "+PhoneNo+ " ");
//     const updateObject={
//         id: id,
//         name: name,
//         Address:Address,
//         PhoneNo:PhoneNo,
//     };
//     alert("Calling update customer method..." + JSON.stringify(updateObject));
//     CustomerService.UpdateCustomer(params.id, updateObject).then((res)=>{
//        console.log(res.data); 
//     });
//   navigate("/list");
// };
const update = (e)=>{
    e.preventDefault();
    CustomerServices.updateCustomer(id,{id,name,add,phone}).then(res=>{
      console.log(res.data);
    })
    navigate("/list");
  }
  return (
    <div>
      <h1>Update Customer</h1>
      <hr />
      <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            Customer Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Customer Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={add}
            onChange={(e) => setAddress(e.target.value)}
          />
        
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Customer PhoneNo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" 
        className="btn btn-primary" 
        onClick={(e) => update(e)}>
          Update
        </button>
        {id}{name}{add}{phone}
      </form>
      </div>
    </div>
  );
}

export default UpdateCustomer;
