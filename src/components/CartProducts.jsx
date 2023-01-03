import { FaTrashAlt } from "react-icons/fa";
import { useCartAction } from "../Context/CartProvider";
const CartProducts = ({ product }) => {
  const dispatch = useCartAction();
  const decrementHandler = (product) => {
    dispatch({ type: "DECREMENT_CART_ITEM", payload: product });
  };
  return (
    <div className=" mb-2 rounded-md shadow-lg flex items-center justify-between ">
      <div className=" w-40 h-36 ml-2">
        <img className="w-full h-full" src={product.image} alt="cartImage" />
      </div>

      <div className="flex text-sm items-center justify-between">
        <div className="flex flex-col justify-center gap-y-2 ">
          <div>{product.name}</div>
          <div>
            {product.description.map((p) => (
              <div>{p.support}</div>
            ))}
          </div>
          <div>{product.price}هزار تومان</div>
        </div>
        <div className="ml-8 px-2 border border-slate-500 flex items-center justify-center mr-10 gap-4">
          <div>{product.quantity}</div>
          <button onClick={() => decrementHandler(product)}>
            {product.quantity === 1 ? <FaTrashAlt /> : "-"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
