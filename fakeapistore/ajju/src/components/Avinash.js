import React ,{ useEffect, useState } from "react";
import axios from 'axios';
function Avinash (){
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
    },[])
    return(
        <div className="container">
            <div className="table table-dark">
             <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>image</td>
                </tr>
                </thead>
                <tbody>
        
                    {
                        product.map((data)=>{
                             return(
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td><img src={data.image} alt={data.id} style={{width:"150px" ,height:"150px"}}></img></td>
                            </tr>
                             )
                        })
                    }
                </tbody>
             </table>


        </div>
        </div>
       
    )


}
export default Avinash