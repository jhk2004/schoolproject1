import { useMemo } from "react";
import useShopOrders from "../Shop/useShopOrders";
import useItems from "../Shop/useItems";
import Orders from "../components/Orders";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

export default function CartList() {
    const shopOrders = useShopOrders();

    // const items = location.state;
    const items = useItems();
    const totalitemprice = useMemo(() => {
        return shopOrders
            .map((shopOrder) => {
                const { id, quantity } = shopOrder;
                const item = items.find((p) => p.id === id);
                return item.price * quantity;
            })
            .reduce((l, r) => l + r, 0);
    }, [shopOrders, items]);
    if (shopOrders.length === 0) {
        return <div className="tt">장바구니가 비어있습니다.</div>;
    } else {
        return (
            <aside className="cc">
                <div>
                    {shopOrders.map((shopOrder) => {
                        const { id, quantity } = shopOrder;
                        const item = items.find((p) => p.id === id);
                        return (
                            <div key={id} className="Shopitem">
                                <div className="shopshop">
                                    <div className="ShopitemImag">
                                        <img
                                            src={item.img}
                                            className="cartlistimg"
                                        />
                                    </div>
                                    <h1 className="infotitle">{item.id}</h1>
                                </div>
                                <div className="cccccccccc">
                                    <h2 className="cartlistprice">
                                        {item.price}원
                                    </h2>
                                    <h2 className="cartlistprice">
                                        X {quantity}
                                    </h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="tt">총 가격 {totalitemprice}원</div>
                <Link to="/complete">
                    <button>구매하기</button>
                </Link>
            </aside>
        );
    }
}
