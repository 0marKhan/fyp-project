import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { useState, useEffect } from "react";

const SellProduct = () => {
  const [pc, setPc] = useState("");
  const [address, setAddress] = useState("");
  const [isEffect, setEffect] = useState(0);

  return (
    <div>
      <Navbar />
      <h1 className="product-heading">Sell Product</h1>
      <div className="form">
        <div className="form-body">
          <div className="productid">
            <label className="form__label" for="productId">
              Enter Product Id
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
        </div>
        <div class="footer">
          <button type="submit" class="register-btn">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
