import React, { useState, useEffect } from 'react'
import axios from 'axios';
function Api() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            console.log(res.data);
            setProduct(res.data);
        })
    }, []);
    return (
        <div className='container-fluid'>
            <div className="row" >
                <div className="card-group">
                    {product.map((res) => {
                        return (
                            <div className='col-3 mb-2' >
                                <div className="card" style={{ height: "32rem", width: "24rem" }}>
                                    <div className="card-header">
                                        <p className="card-text"  key={res.id}><b>Category :{res.category}</b></p>
                                    </div>
                                    <img src={res.image} className="card-img-top" alt="Network Issue" id="imagecard" />
                                    <div className="card-body">
                                        <p className="card-title"> <b>Title :</b>{res.title}</p>
                                        <p className="card-text"><b> Description :</b>{res.description}</p> 
                                    </div>
                                    <div class="card-footer text-muted d-flex justify-content-between">
                                        <p><b>Rate :{res.rating.rate}</b></p>
                                        <p className="card-text"><b>Count :{res.rating.count}</b></p>
                                        <p><b>Price :{res.price}</b></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>



           </div>
        </div>
    )
}
                    export default Api
