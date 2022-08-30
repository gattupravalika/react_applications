
import { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      emplyeeData:[]
    }  
  }
  handleSubmit= (e) =>{
    e.preventDefault();
    let emplyeeData=this.state.emplyeeData;
    let name=this.textName.value;
    let age=this.textAge.value;
    let newEmployee={
      "name":name,
      "age":age
    }
emplyeeData.push(newEmployee);
this.setState({
  employeeData:emplyeeData
})
this.myform.reset();
  }
  handleEdit=(i) =>{
    
  }
  handleDelete=(i) =>{
    let employeeData=this.state.employeeData;
    employeeData.splice(i,1);
    this.setState({
      employeeData:employeeData
    });
  
  }
  render(){
    let employeeData=this.state.emplyeeData;
  return (
    <div>
    <form ref="myform">
      <label>Name</label>
      <input type="text" ref="textName" placeholder="Enter Your Name"/>
      <label>Age</label>
      <input type="text" ref="textAge" placeholder="Enter Your Age"/>
<button onClick={e=> this.handleSubmit(e)}>Save</button>
    </form>
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {
        employeeData.map((data, i)=>
        <tr key={i}>
          <td>data.name </td>
          <td>data.age </td>
          </tr>
      )
      }
    </table>
    </div>
    
  )
}
}
export default App;
