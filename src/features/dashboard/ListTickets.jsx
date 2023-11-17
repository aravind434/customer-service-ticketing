import React, { useEffect } from 'react'
import { useTicketslistQuery,useLazyTicketslistQuery, useTicketslistByCustomerIdQuery } from '../../services/ticketsapi'

function ListTickets() {
    var cid = JSON.parse(window.localStorage.getItem("user"))[0].id;
    var {isLoading,data}=useTicketslistByCustomerIdQuery(cid);
    // var {isLoading,data} = useTicketslistQuery();
    var [updatedTicketsFn] = useLazyTicketslistQuery();
    useEffect(()=>{
        updatedTicketsFn();
    },[])
  return (
    <div>
        <h1>ListTickets</h1>
        {
            isLoading && (<h3>loading...</h3>)
        }
        {
            !isLoading && (
                <ul>
                    {
                    data.map(ticket=>
                        <li>{ticket.issue}</li>
                    )
                    }
                </ul>
            )
        }
    </div>
  )
}

export default ListTickets