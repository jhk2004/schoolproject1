import { useContext } from "react";
import ShopContext from "../Shop/ShopContext";

export default function useShopActions() {
    const { addShopCart } = useContext(ShopContext);
    return { addShopCart };
}
