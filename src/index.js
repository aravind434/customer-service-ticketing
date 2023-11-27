import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Login from './features/customer/Login';
import Dashoard from './features/dashboard/Dashoard';
import AddTicket from './features/dashboard/AddTicket';
import ListTickets from './features/dashboard/ListTickets';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"",
        element:<Login/>
      },
      {
        path:"/login",
        element:<Login/>
      },

      {
        path:'/dashboard',
        element:<Dashoard/>,
        children:[
          {
            path:'/dashboard/addticket',
            element:<AddTicket/>
          },
          {
            path:'',
            element:<ListTickets/>
          },
          {
            path:'/dashboard/listTickets',
            element:<ListTickets/>
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
