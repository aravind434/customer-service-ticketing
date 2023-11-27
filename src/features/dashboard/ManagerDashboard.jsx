import React, { useState } from 'react'
import { useTicketslistQuery, useUpdateTicketMutation } from '../../services/ticketsapi'
import { useGetAllEmployeesListQuery } from '../../services/userapi';

function ManagerDashboard() {
var {isLoading,data} = useTicketslistQuery();
var {isLoading:employeeDataLoading, data:employeeData} = useGetAllEmployeesListQuery();
var [selectedempId ,setselectedempId] = useState(null);
var [updatetktFn] = useUpdateTicketMutation();

// function selectionChange(e,ind){
//   document.getElementById("assignbtn"+{ind}).innerHTML = 'Assign';
//   setselectedempId(e.target.value);
  

// }

function assignTicketToEmployee(tkt,index){
  debugger;
  var addempidtoassignedtkt = {...tkt, employeeId:selectedempId}
  updatetktFn(addempidtoassignedtkt);
  var asgnbtnid = document.getElementById("assignbtn"+{index})
  asgnbtnid.innerHTML = 'Assigned';
 }

  return (
    <div className='container'>
      {
            isLoading && employeeDataLoading && (<h3>loading...</h3>)
      }
      {
            !isLoading && (
      <table className='table table-striped'>
        <thead>
          <th>Issue</th>
          <th>Selection</th>
          <th>Action</th>
        </thead>
        <tbody>
          {
            data.map((ticket,index)=>{
              return(
          <tr>
            <td>{ticket.issue}</td>
            <td>
              <select onChange={(e)=>setselectedempId(e.target.value)}>
                              <option value='null' disabled selected>please select the emp</option>
                              {
                              !employeeDataLoading && (
                                employeeData.map((emp)=>{
                                return <option value={emp.id} selected={ticket.employeeId == emp.id}>{emp.username}</option>
                              })
                              )
                              }
              </select>
            </td>
            <td>
              <button id={"assignbtn" + index} onClick={(ticket,index)=>{assignTicketToEmployee(ticket,index)}}>Assign</button>
            </td>
          </tr>
          )
          })
          }
        </tbody>
        
      </table>
            )
        }
    </div>
  )
}

export default ManagerDashboard;