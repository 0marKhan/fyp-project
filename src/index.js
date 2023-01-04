import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductStatus from "./pages/ProductStatus";
import ShipProduct from "./pages/ShipProduct";
import RecieveReport from "./pages/RecieveReport";
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegisterAsManufacturer from "./pages/RegisterAsManufacturer";
import RegisterAsDistributer from "./pages/RegisterAsDistributer";
import RegisterAsRetailer from "./pages/RegisterAsRetailer";
<style>
  {" "}
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');{" "}
</style>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "add-product",
    element: <AddProduct />,
  },
  {
    path: "product-status",
    element: <ProductStatus />,
  },
  {
    path: "ship-product",
    element: <ShipProduct />,
  },
  {
    path: "recieve-report",
    element: <RecieveReport />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register-as-manufacturer",
    element: <RegisterAsManufacturer />,
  },
  {
    path: "register-as-distributer",
    element: <RegisterAsDistributer />,
  },
  {
    path: "register-as-retailer",
    element: <RegisterAsRetailer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
