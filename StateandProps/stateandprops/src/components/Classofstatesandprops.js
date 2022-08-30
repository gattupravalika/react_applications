import React, { Component } from "react";
// class Product extends Component {

//       constructor(){
  
//           super();
  
//           this.state={
  
//   "id":1,
  
//   "name":"Prava",
  
//  "quantity":20,
  
//  "price":200
  
//           };
  
//       }
  
//     render() {
  
//       return (
  
//         <div>
  
//           <h1>Product Information</h1><hr/>
  
//           <p>Product Id:{this.state.id}</p>
  
//           <p>Product Name:{this.state.name}</p>
  
//           <p>Product Quantity:{this.state.quantity}</p>
  
//           <p>Product Price:{this.state.price}</p>
  
//           <hr/>
  
//         </div>
  
//       )
  
//     }
  
//   }
  
  // export default 
  class classofstatesandprops extends Component {

    constructor(props){

        super(props);

        this.state={

           "id": this.props.id,

           "name":this.props.name,

           "quantity":this.props.quantity,

           "price":this.props.price



        };

    }

  render() {

    return (

      <div>

        <h1>Product Information</h1><hr/>

        <p>Product id:{this.state.id}</p>

        <p>Product name:{this.state.name}</p>

        <p>Product quantity:{this.state.quantity}</p>

        <p>Product price:{this.state.price}</p><hr/>

      </div>

    )

  }

}



export default classofstatesandprops
