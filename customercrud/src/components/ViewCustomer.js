import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//use useParams
import { useParams } from "react-router-dom";
import CustomerServices from "../services/CustomerServices";


function ViewCustomer() {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [add, setAddress] = useState();
    const [phone, setPhone] = useState();
    const params = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        CustomerServices.getCustomer(params.id).then((res) => {
            setId(res.data.id);
            setName(res.data.name);
            setAddress(res.data.add);
            setPhone(res.data.phone);
            console.log(res.data.id + " " + res.data.name + " " + res.data.Address + " " + res.data.PhoneNo + " ");

        })
    }, []);
    
        return (
            
            <div>
                <br></br>
                <div className="card col-md-5 offset-md-3">
                    <h3 className="text-center"> View  Customer </h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Id:</label>
                            <div> {id}</div>
                        </div>
                        <div className="row">
                            <label>Name: </label>
                            <div> {name}</div>
                        </div>
                        <div className="row">
                            <label>Address: </label>
                            <div> {add}</div>
                        </div>
                        <div className="row">
                            <label> PhoneNo: </label>
                            <div> {phone}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


export default ViewCustomer

