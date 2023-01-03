import Layout from "../layout/Layout";
import * as prod from "../data";
import Product from "../components/Product";
const HomePage = () => {
  return (
    <Layout>
      <section className="container grid sm:grid-cols-2 md:grid-cols-3  ">
        {prod.products.map((p) => (
          <Product product={p} />
        ))}
      </section>
    </Layout>
  );
};

export default HomePage;
