import { Outlet } from "react-router-dom";
import Login from "./features/customer/Login";
import Header from "./features/landing/Header";

function App() {
  return(
    <div>
      <Header/>
      {/* <h1>welcome to the customer service and ticket raise application</h1> */}
      {/* <Login/> */}
      <Outlet/>
    </div>
  )

}

export default App;
