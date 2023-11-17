import { useFormik } from 'formik'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function CustomerDashboard() {

  return (
    <div>
      <h1>CustomerDashboard</h1>
      <div>
        <Link to='addticket'>Add Tickets</Link>&nbsp;
        <Link to='listTickets'>List of Tickets</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default CustomerDashboard