import Layout from "../Layout/Layout";
import * as prod from "../data";
import Product from "../components/Product";
const HomePage = () => {
  return (
    <Layout>
      <section className=" grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-16 md:gap-y-10 ">
        {prod.products.map((p) => (
          <div key={p.id}>
            <Product product={p} />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default HomePage;
