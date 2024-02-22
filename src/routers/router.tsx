import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import App from "../App";
import { routeGenerator } from "../utils/routesGenerater";
import { managerRoutes } from "./manager.routes";


export const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/manager',
        element:<App/>,
        children:routeGenerator(managerRoutes)
    },
    
    {
        path:'/login',
        element:<Login/>
    },
   
    {
        path:'/signup',
        element:<Register/>
    }
])