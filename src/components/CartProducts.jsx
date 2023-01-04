import { FaTrashAlt } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { useCartAction } from "../Context/CartProvider";
import { AiOutlineMinus } from "react-icons/ai";
const CartProducts = ({ product }) => {
  const dispatch = useCartAction();
  const decrementHandler = (product) => {
    dispatch({ type: "DECREMENT_CART_ITEM", payload: product });
  };
  const incrementHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <div className=" mb-2 rounded-md shadow-lg flex items-center justify-between md:min-w-[36rem] ">
      <div className="w-32 h-32 h md:w-40 md:h-36 ml-2">
        <img className="w-full h-full" src={product.image} alt="cartImage" />
      </div>

      <div className="flex text-sm items-center justify-between">
        <div className="flex flex-col justify-center gap-y-2 md:min-w-[10rem]  w-24 ">
          <div>{product.name}</div>
          <div className="hidden mr-4 md:block text-sm text-gray-400 ">
            {product.description.map((p) => (
              <div>{p.support}</div>
            ))}
          </div>
          <div>{product.offPrice}هزار تومان</div>
        </div>
        <div className="ml-8 md:px-2 border border-slate-500 flex items-center justify-center mr-4 md:mr-10 gap-4">
          <button onClick={() => incrementHandler(product)}>
            <GrAdd />
          </button>
          <div>{product.quantity}</div>
          <button onClick={() => decrementHandler(product)}>
            {product.quantity === 1 ? <FaTrashAlt /> : <AiOutlineMinus />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
