import FeaturedItems from "./FeatureItems";
import PopularItems from "./PopularItems";
const Feature = () => {
  return (
    <>
      <div className="flex flex-row py-8 px-[10%] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h4 className="uppercase font-bold text-lg py-2">
            featured collections
          </h4>
          <p className="text-gray-400 text-center">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            massa eu tortor dignissim eleifend vitae quis nunc. Cras gravida
            euismod justo. Praesent fermentum pellentesque arcu, id laoreet dui
          </p>
        </div>
        <div></div>
      </div>
      <FeaturedItems />
      <PopularItems />
    </>
  );
};

export default Feature;
