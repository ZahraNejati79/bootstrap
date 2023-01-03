const CartProducts = ({ product }) => {
  return (
    <div className="flex items-center justify-between gap-x-12">
      <div className="flex flex-col justify-center gap-y-4 ">
        <div>
          {product.description.map((p) => (
            <div>{p.support}</div>
          ))}
        </div>
        <div>{product.price}هزار تومان</div>
      </div>
      <div className="w-40 h-36 ">
        <img className="w-full h-full" src={product.image} alt="cartImage" />
      </div>
    </div>
  );
};

export default CartProducts;
