import React, { useState } from 'react'
import { useTicketslistQuery, useUpdateTicketMutation } from '../../services/ticketsapi'
import { useGetAllEmployeesListQuery } from '../../services/userapi';

function ManagerDashboard() {
var {isLoading,data} = useTicketslistQuery();
var {isLoading:employeeDataLoading, data:employeeData} = useGetAllEmployeesListQuery();
var [selectedempId ,setselectedempId] = useState(null);
var [updatetktFn] = useUpdateTicketMutation()

function assignTicketToEmployee(tkt){
  var addempidtoassignedtkt = {...tkt, employeeId:selectedempId}
  updatetktFn(addempidtoassignedtkt);
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
            data.map((ticket)=>{
              return(
          <tr>
            <td>{ticket.issue}</td>
            <td>
              <select onChange={(e)=>(setselectedempId(e.target.value))}>
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
              <button onClick={()=>{assignTicketToEmployee(ticket)}}>Assign</button>
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