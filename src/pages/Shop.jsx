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
            {myPath === "/shop" ? (
                <>
                    <ShopHeader />
                    <div className="cc">
                        <Items />
                    </div>
                </>
            ) : (
                <ShopCart />
            )}
        </ShopProvider>
    );
};
export default Shop;
