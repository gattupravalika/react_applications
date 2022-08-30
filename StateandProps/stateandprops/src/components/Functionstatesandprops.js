import React from 'react'

// import { useState } from 'react'
// const Employees = () => 
//     const[id,setId]=useState("1");

//     const[name,setName]=useState("abc");

//   return (

//     <div>

//       <h1>Employee Information</h1>

//       <hr/>

//       <p>Employee Id:<input type="text" value={id} /></p>

//       <p>Employee Name:<input type="text" value={name} /></p>

//     </div>

//   )

// }

//export default Employees



const Employees = props=>{

    return(

        <div>

            <h1>Employees Info</h1><hr/>

            <p>Employee Id:<input type="text" value={props.id} /></p>

            <p>Employee Name:<input type="text" value={props.name} /></p>

        </div>

    )

}

export default Employees