import CartProducts from "../components/CartProducts";
import Product from "../components/Product";
import { useCart } from "../Context/CartProvider";
import Layout from "../Layout/Layout";

const CartPage = () => {
  const { cart } = useCart();
  return (
    <Layout>
      <section className="flex">
        <div>
          {cart.length ? (
            cart.map((p) => <CartProducts product={p} />)
          ) : (
            <div>سبد خرید خالی است</div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
