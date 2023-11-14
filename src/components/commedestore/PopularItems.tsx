import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../context/ProductsContext";
const ProductItem = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center md:w-[160px] md:h-[210px]">
      <div>
        <img
          src={item.image}
          alt="alt"
          className="w-[150px] h-[200px] object-fit"
        />
      </div>
      <div className="text-center">
        <h5 className="font-bold text-sm">{item.title}</h5>
        <p>$ {item.price}</p>
      </div>
    </div>
  );
};
const PopularItems = () => {
  const products = useContext(ProductContext);
  const allPopular = products.map((item) => (
    <ProductItem key={item.id} item={item} />
  ));
  return (
    <div className="bg-white pt-4">
      <div className="px-[7%]">
        <hr className="border-[1px] border-gray-400" />
      </div>
      <div className="px-[7%] py-4">
        <div className="flex flex-row justify-center items-center">
          <h4 className="uppercase text-2xl font-bold">Popular Products</h4>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between py-8">
          {allPopular}
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link
            to="/"
            className="border-2 border-orange-400 uppercase px-6 py-3"
          >
            view all products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
