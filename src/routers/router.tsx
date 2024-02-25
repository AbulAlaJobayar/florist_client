import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
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
])