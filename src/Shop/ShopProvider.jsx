import { useState, useCallback } from "react";
import ShopContext from "./ShopContext";
const ShopProvider = ({ children }) => {
    const [items] = useState([
        {
            id: "잠이 솔솔 수면 이불",
            price: 22222,
            stars: 5,
            img: "http://www.nubizio.co.kr/shopimages/nubizio777/073002000014.jpg?1615378840",
        },
        {
            id: "핑크핑크 공주님 침대",
            price: 22222,
            stars: 3,
            img: "https://img.marieclairekorea.com/2021/03/mck_604de11c02bac.jpg",
        },
        {
            id: "마약 베개",
            price: 333333,
            stars: 4,
            img: "https://contents.sixshop.com/thumbnails/uploadedFiles/13907/product/image_1516206582255_750.jpg",
        },
        {
            id: "모던 침대",
            price: 4444444,
            stars: 1,
            img: "http://m.monohouse.co.kr/web/product/big/201703/540_shop1_904697.jpg",
        },
    ]);
    const [shopOrders, setShopOrders] = useState([]);
    const addShopCart = useCallback((id) => {
        setShopOrders((shopOrders) => {
            const shopFinded = shopOrders.find(
                (shopOrder) => shopOrder.id === id
            );
            if (shopFinded === undefined) {
                return [...shopOrders, { id, quantity: 1 }];
            } else {
                return shopOrders.map((shopOrder) => {
                    if (shopOrder.id === id) {
                        return {
                            id,
                            quantity: shopOrder.quantity + 1,
                        };
                    } else {
                        return shopOrder;
                    }
                });
            }
        });
    }, []);

    return (
        <ShopContext.Provider value={{ items, shopOrders, addShopCart }}>
            {children}
        </ShopContext.Provider>
    );
};
export default ShopProvider;
