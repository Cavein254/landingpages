import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Ring from "../../assets/ring.png";
import Electron from "../../assets/electron.jpg";
import Man from "../../assets/man.png";
import Woman from "../../assets/women.jpg";

const FeaturedItems = () => {
  return (
    <div className="px-[10%] py-[2%] flex flex-col">
      <div className="md:flex md:flex-row">
        <div className="flex flex-col md:w-[50%]">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start bg-blue-100">
            <div className="md:m-8">
              <h4 className="font-bold text-2xl">Jewelery</h4>
              <Link
                to="/"
                className="flex flex-row justify-center items-center"
              >
                View Products <GoArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="">
              <img src={Ring} alt="ring" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-[50%] bg-white">
          <div className="flex flex-col justify-between items-center md:flex-row md:justify-between md:items-start">
            <div className="md:m-8">
              <h4 className="font-bold text-2xl">Electronics</h4>
              <Link
                to="/"
                className="flex flex-row justify-center items-center"
              >
                View Products <GoArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="">
              <img src={Electron} alt="Electron" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row">
        <div className="flex flex-col w-[50%]">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start bg-white">
            <div className="md:m-8">
              <h4 className="font-bold text-2xl">Women's Clothings</h4>
              <Link
                to="/"
                className="flex flex-row justify-center items-center"
              >
                View Products <GoArrowRight className="ml-2" />
              </Link>
            </div>
            <div>
              <img src={Woman} alt="ring" />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-blue-100 w-[50%]">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start">
            <div className="md:m-8">
              <h4 className="font-bold text-2xl">Men's Clothes</h4>
              <Link
                to="/"
                className="flex flex-row justify-center items-center"
              >
                View Products <GoArrowRight className="ml-2" />
              </Link>
            </div>
            <div>
              <img src={Man} alt="Electron" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
