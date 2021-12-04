import { Link } from "react-router-dom";
import cart from "../image/shopping-cart.png";
import { useMemo } from "react";
import useShopOrders from "../Shop/useShopOrders";
import useShopActions from "../Shop/ShopActions";
import CartCount from "../Shop/CartCount";
import useItems from "../Shop/useItems";

export default function ShopHeader() {
    const shopOrders = useShopOrders();
    const items = useItems();
    const countItem = useMemo(() => {
        return shopOrders.map((shopOrder) => {
            const { quantity } = shopOrder;
            const count = 1;
            return count * quantity;
        });
        // .reduce((l, r) => l + r, 0);
    }, [shopOrders]);
    return (
        <header className="shopheader">
            <Link to={{ pathname: "/shopcart" }}>
                <img src={cart} className="cart"></img>
                <CartCount></CartCount>
            </Link>
            <div>
                <Link to="/shop">
                    <h1>KulKul</h1>
                </Link>
            </div>
            <div className="shopToHome">
                <Link to="/">
                    <button>홈</button>
                </Link>
            </div>
        </header>
    );
}
