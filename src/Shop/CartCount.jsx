import { useMemo } from "react";
import useShopOrders from "../Shop/useShopOrders";

export default function CartCount() {
    const shopOrders = useShopOrders();
    const countItem = useMemo(() => {
        return shopOrders
            .map((shopOrder) => {
                const { quantity } = shopOrder;
                const count = 1;
                return count * quantity;
            })
            .reduce((l, r) => l + r, 0);
    }, [shopOrders]);
    if (shopOrders.length === 0) {
        return <div></div>;
    } else {
        return <div className="cartcount">{countItem}</div>;
    }
}
