import useItems from "./useItems";
import star from "../image/star.png";
import useShopActions from "../Shop/ShopActions";
export default function Items() {
    const items = useItems();
    const { addShopCart } = useShopActions();
    return (
        <main>
            <div className="Shopitems">
                {items.map((item) => {
                    const { id, price, stars, img } = item;
                    const click = () => {
                        addShopCart(id);
                    };
                    return (
                        <div key={id} className="Shopitem">
                            <div className="shopshop">
                                <div className="ShopitemImg">
                                    <img src={img} />
                                </div>

                                <div className="info">
                                    <h1 className="infotitle">{id}</h1>
                                    <h2 className="infoprice">{price}원</h2>
                                    <div>
                                        {[...Array(stars)].map((i) => {
                                            return (
                                                <img
                                                    src={star}
                                                    className="star"
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <button className="takeCart" onClick={click}>
                                장바구니에담기
                            </button>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
