import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./component/Header"
import Body from './component/Body'
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout=()=>{
    return(
        <>
        <Head/>
        <Outlet/>
        <Footer/>
      </>
    )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu />,
      }
    ]
  },
  
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);