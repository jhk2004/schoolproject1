import { useContext } from "react";
import ShopContext from "./ShopContext";

export default function useItems() {
    const { items } = useContext(ShopContext);
    return items;
}
// export default function useItems() {
//     const { items } = useContext(ShopContext);
//     return items;
// }
