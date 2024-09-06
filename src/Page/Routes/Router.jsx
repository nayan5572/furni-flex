import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../Login/Login";
import OrderItem from "../OrderItem/OrderItem";
import Home from "./../../Components/Home/Home/Home";
import SignUp from "./../SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "orderItem/:category",
        element: <OrderItem></OrderItem>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
