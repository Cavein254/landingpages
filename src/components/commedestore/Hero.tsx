import HeroImg from "../../assets/hero.png";
const Hero = () => {
  return (
    <div className="flex flex-col bg-gray-200 justify-center items-center md:flex-row">
      <div className="w-2/3">
        <div className="flex flex-col justify-center items-center">
          <h3 className="italic text-gray-400 md:text-2xl">
            The latest gear from
          </h3>
          <h1 className="text-2xl font-bold uppercase md:text-4xl">
            comme de store
          </h1>
          <h3 className="text-sm">X</h3>
          <button className="px-6 py-2 border-2 border-orange-300 uppercase font-bold">
            view collection
          </button>
        </div>
      </div>
      <div className="w-1/3">
        <img src={HeroImg} alt="Hero image" className="" />
      </div>
    </div>
  );
};

export default Hero;
