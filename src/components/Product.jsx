import { useCartAction } from "../Context/CartProvider";

const Product = ({ product }) => {
  const dispatch = useCartAction();
  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div className=" flex items-center justify-center ">
      <div className="flex flex-col items-end justify-center mb-4 shadow-lg ">
        <div className="w-80 h-64">
          <img className="w-full h-full" src={product.image} alt="product" />
        </div>
        <div className="my-2  ">{product.price} هزار تومان</div>
        <button onClick={() => addToCartHandler(product)}>
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default Product;
