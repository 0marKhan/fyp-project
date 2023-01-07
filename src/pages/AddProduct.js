import "./AddProduct.css";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { useState, useEffect } from "react";

const AddProduct = () => {
  const [pc, setPc] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [manufacturerName, setManufacturerName] = useState("");
  const [address, setAddress] = useState("");
  const [isEffect, setEffect] = useState(false);

  return (
    <div>
      <Navbar />
      <h1 className="product-heading">Add Product</h1>
      <div className="form">
        <div className="form-body">
          <div className="productid">
            <label className="form__label" for="productId">
              Product Id{" "}
            </label>
            <input
              className="form__input"
              type="number"
              value={pc}
              id="productId"
              placeholder="Product Id"
              style={{ marginLeft: "70px" }}
            />
          </div>
          <div className="productname">
            <label className="form__label" for="productName">
              Product Name{" "}
            </label>
            <input
              type="text"
              id="productName"
              value={name}
              className="form__input"
              placeholder="Product Name"
              style={{ marginLeft: "70px" }}
            />
          </div>
          <div className="productdate">
            <label className="form__label" for="productDate">
              Product Date{" "}
            </label>
            <input
              type="text"
              id="productDate"
              className="form__input"
              value={date}
              placeholder="Product Date"
              style={{ marginLeft: "70px" }}
            />
          </div>
          <div className="manufacturername">
            <label className="form__label" for="manufacturerName">
              Manufacturer Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="manufacturerName"
              value={manufacturerName}
              placeholder="Manufacturer Name"
              style={{ marginLeft: "70px" }}
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="register-btn">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
