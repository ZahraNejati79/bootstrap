import CartProducts from "../components/CartProducts";
import Product from "../components/Product";
import { useCart } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { cart, total } = useCart();
  const originalTotalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  return (
    <Layout>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
        <section>
          <div className="">
            {cart.length ? (
              cart.map((p) => <CartProducts product={p} />)
            ) : (
              <div>سبد خرید خالی است</div>
            )}
          </div>
        </section>
        <section>
          <div className="shadow-lg rounded-md w-60 h-60 py-4 flex flex-col items-center justify-between md:mr-8">
            <div className="w-full flex flex-col items-center">
              <h3 className="font-bold">صورت حساب</h3>
              <div className="px-4 mt-4 flex  items-center justify-between  text-sm  w-full ">
                <span>قیمت کل</span>
                <span className="font-bold">
                  {originalTotalPrice} هزارتومان
                </span>
              </div>
              <div className="px-4 mt-4 flex  items-center justify-between  text-sm  w-full ">
                <span>تخفیف</span>
                <span className="font-bold">
                  {originalTotalPrice - total} هزارتومان
                </span>
              </div>
              <div className="px-4 mt-4 flex  items-center justify-between  text-sm  w-full ">
                <span>قیمت پرداختی</span>
                <span className="font-bold">{total} هزارتومان</span>
              </div>
            </div>
            <div>
              <button className="bg-black text-white px-4 py-2 rounded-md">
                پرداخت سفارش
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CartPage;
