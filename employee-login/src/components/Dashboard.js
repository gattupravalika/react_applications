import React from 'react'

function Dashboard() {
  const employees = [{
    'employeeId': 1,
    'employeeName': 'Pravalika',
    'employeeDomain': "Java",
    'employeeSalary': 80000
  },
  {
    'employeeId': 2,
    'employeeName': 'Vijay',
    'employeeDomain': "Java",
    'employeeSalary': 40000
  },
  {
    'employeeId': 1,
    'employeeName': 'Bhagya',
    'employeeDomain': "python",
    'employeeSalary': 180000
  }
  ];
  const employeeList = employees.map(employee => {
    return(<tr key={employee.employeeId}>
      <td>{employee.employeeId}</td>
      <td>{employee.employeeName}</td>
      <td>{employee.employeeDomain}</td>
      <td>{employee.employeeSalary}</td>
      <td>
        <button className='btn btn-primary' style={{ margin: "10px" }}>Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>)
  })
  return (
    
    <div>
      
      {console.log(employeeList)}
      {console.log(employees)}
     
      <h1>Employee Details</h1>
      <hr />
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Domain</th>
            <th scope="col">Salary</th>
            <th colSpan={"2"}>Actions</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {employeeList}
        </tbody>
      </table>
    </div>
    
  )
}

export default Dashboard
