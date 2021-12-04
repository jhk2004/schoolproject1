import { useContext } from "react";
import ShopContext from "../Shop/ShopContext";
export default function useShopOrders() {
    const { shopOrders } = useContext(ShopContext);
    return shopOrders;
}
