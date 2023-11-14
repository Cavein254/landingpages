import { useContext } from "react";
import ProductContext from "../../context/ProductsContext";
const ProductItem = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src={item.image} alt="alt" />
      </div>
      <div>
        <h5>PullOver</h5>
        <p>$ 56.78</p>
      </div>
    </div>
  );
};
const PopularItems = () => {
  const products = useContext(ProductContext);
  console.log(products);
  const allPopular = products.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));
  return (
    <>
      <div className="px-[10%]">
        <hr className="border-[1px] border-gray-400" />
      </div>
      <div className="px-[10%] py-4">
        <div className="flex flex-row justify-center items-center">
          <h4 className="uppercase text-2xl font-bold">Popular Products</h4>
        </div>
        <div>{allPopular}</div>
      </div>
    </>
  );
};

export default PopularItems;
