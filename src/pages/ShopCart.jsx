import React, { Component } from "react";
import ShopHeader from "../components/ShopHeader";
import Footer from "../components/Footer";
import Orders from "../components/Orders";
import { Link } from "react-router-dom";
import Items from "../Shop/Items";
import CartList from "../ShopCart/CartList";
import ShopProvider from "../Shop/ShopProvider";
const ShopCart = () => {
    return (
        <>
            <ShopHeader />
            <div className="cc">
                <CartList />
            </div>
        </>
    );
};

export default ShopCart;
