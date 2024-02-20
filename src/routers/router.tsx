import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import App from "../App";


export const router= createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/signup',
        element:<Register/>
    }
])