import React from 'react';
import CustomerDashboard from './CustomerDashboard';
import EmployeeDashboard from './EmployeeDashboard';
import ManagerDashboard from './ManagerDashboard';


function Dashoard() {
    var {username,role} = JSON.parse(window.localStorage.getItem("user"))[0];
    // var selectrole = ["manager", "customer", "employee"];
    // var dashboardcomp = ["ManagerDashboard", "CustomerDashboard", "EmployeeDashboard"]
    // console.log(user);
  return (
    <div>
        <h1>{role} Dashboard</h1>
            <div className='dashboard'>
              {
                role ==='customer' && <CustomerDashboard></CustomerDashboard>
              }
              {
                role ==='employee' && <EmployeeDashboard></EmployeeDashboard>
              }
              {
                role ==='manager' && <ManagerDashboard></ManagerDashboard>
              }
                {/* {
                   selectrole.map((roleval,index)=>{
                    {
                        role == selectrole[index] && <h1>welcome to {selectrole[index]} dashboard</h1>
                    }
                }) 
                } */}
                
            </div>
        
    </div>

  )
}

export default Dashoard