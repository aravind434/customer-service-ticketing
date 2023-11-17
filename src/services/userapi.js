import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),

  endpoints: (builder) => ({

    authenticateuser: builder.query({
      query: (userdetails) => `?username=${userdetails.username}&password=${userdetails.password}`,
    }),

    getAllEmployeesList: builder.query({
      query:()=>{
        console.log("employee details");
        return `?role=employee`
      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAuthenticateuserQuery,useLazyAuthenticateuserQuery,useGetAllEmployeesListQuery } = userApi;