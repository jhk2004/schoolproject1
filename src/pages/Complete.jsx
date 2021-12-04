import React, { Component, useState } from "react";
import { useLocation } from "react-router";
import ShopHeader from "../components/ShopHeader";
import Footer from "../components/Footer";
import Orders from "../components/Orders";
import { Link } from "react-router-dom";
import Items from "../Shop/Items";
import ShopProvider from "../Shop/ShopProvider";
import ShopCart from "./ShopCart";
const Shop = () => {
    const location = useLocation();
    let myPath = location.pathname;

    return (
        <ShopProvider>
            <ShopHeader />
            <div className="cc">
                <h1 className="tt">구매해주셔서 감사합니다.</h1>
            </div>
        </ShopProvider>
    );
};
export default Shop;
