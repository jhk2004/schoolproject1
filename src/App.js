import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Complete, Home, Shop, ShopCart } from "./pages/Pagesindex";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/shop" element={<Shop />} />
                    <Route exact path="/shopcart" element={<Shop />} />
                    <Route exact path="/complete" element={<Complete />} />
                </Routes>
            </Router>
        );
    }
}
export default App;
