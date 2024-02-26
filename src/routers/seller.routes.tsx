
import Home from "../pages/Home/Home";
import SellerDashboard from "../pages/seller/SellerDashboard";
import SellerSale from "../pages/seller/SellerSale";

export const sellerRoutes = [
        {
          name: "Home",
          path: "../",
          element:<Home/> ,
        },
        {
          name: "Dashboard",
          path: "dashboard",
          element:<SellerDashboard/>
        },
        {
          name: " Total Sale",
          path: "sale",
          element:<SellerSale/>
        },
        
        
      ];
      