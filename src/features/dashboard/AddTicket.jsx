import { useFormik } from 'formik'
import React from 'react'
import { useAddticketMutation } from '../../services/ticketsapi'

function AddTicket() {
    var [addtktFn] = useAddticketMutation();
    var ticketForm = useFormik({
        initialValues: {
            issue:'',
            productName:'',
            image:'',
            date:Date.now(),
            customerId: JSON.parse(window.localStorage.getItem('user'))[0].id
        },
        onSubmit : values =>{
            addtktFn(values).then(res=>{
                alert("Tkt added successfully")
            }).
            catch(err=>{
                alert(JSON.stringify(err))
            });
            ticketForm.resetForm();
        }

    })
  return (
    <div>
        <h1>AddTicket</h1>
        <form onSubmit={ticketForm.handleSubmit}>
            <label for="issue">Issue:</label>&nbsp;&nbsp;
            <textarea name='issue' onChange={ticketForm.handleChange} style={{resize:'both'}}></textarea><br/><br/>
            <label for="productname">ProductName:</label>&nbsp;
            <input type='text' name='productName' onChange={ticketForm.handleChange}></input><br/><br/>
            <button>Raise Ticket</button>
      </form>
    </div>
  )
}

export default AddTicket