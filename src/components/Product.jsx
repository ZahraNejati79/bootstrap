import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useCartAction } from "../Context/CartProvider";
import checkInCart from "../utils/checkInCart";

const Product = ({ product }) => {
  const dispatch = useCartAction();
  const { cart } = useCart();
  const addToCartHandler = (product) => {
    toast.success(` با موفقیت به سبد خرید اضافه شد ${product.name}`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div className=" flex items-center justify-center ">
      <div className="flex flex-col items-end justify-center mb-4 shadow-lg ">
        <div className="w-80 h-64">
          <img className="w-full h-full" src={product.image} alt="product" />
        </div>
        <div className="my-2  ">{product.price} هزار تومان</div>
        <div>
          {checkInCart(cart, product) ? (
            <Link to="/cart">ادامه سفارش </Link>
          ) : (
            <button onClick={() => addToCartHandler(product)}>
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
