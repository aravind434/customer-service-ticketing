import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const ticketApi = createApi({
  reducerPath: 'ticketApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/tickets' }),
  endpoints: (builder) => ({

    addticket: builder.mutation({
        query:(ticket)=>{
            return{
                method:'POST',
                body:ticket
            }
        }
      }),

    ticketslist:builder.query({
        query:()=>{
            return `/`
        }
    }),

    ticketslistByCustomerId:builder.query({
      query:(cid)=>{
          return `?customerId=${cid}`
      }
  }),
  updateTicket: builder.mutation({
    query:(updatedtkd) => {
      return {
        url:`/${updatedtkd.id}`,
        method:'PUT',
        body:updatedtkd

      }
    }
  })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddticketMutation,useTicketslistQuery,useLazyTicketslistQuery,useTicketslistByCustomerIdQuery,useUpdateTicketMutation } = ticketApi;