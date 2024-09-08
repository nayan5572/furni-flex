import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../Login/Login";
import OrderDetails from "../OrderDetails/OrderDetails";
import OrderItem from "../OrderItem/OrderItem";
import Home from "./../../Components/Home/Home/Home";
import SignUp from "./../SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "orderItem/:category",
        element: (
          <PrivateRoutes>
            <OrderItem></OrderItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/orderDetails",
        element: <OrderDetails></OrderDetails>,
      },
    ],
  },
]);
