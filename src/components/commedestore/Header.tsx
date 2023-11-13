import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-2 bg-gray-100 border-b-2 border-gray-200">
      <div className="flex w-1/3"></div>
      <div className="flex flex-row w-1/3 justify-center items-center">
        <div className="border-4 text-center font-bold px-3 py-1 border-orange-400 rounded-[100%] text-lg text-blue-900">
          <p className="p-0 m-0">ML</p>
          <p className="p-0 -mt-2">LX</p>
        </div>
      </div>
      <div className="flex flex-row justify-between border-black border-2 w-1/3">
        <div>
          <h4 className="text-blue-900 font-bold">My Account</h4>
        </div>
        <div className="flex flex-row text-blue-900 font-bold items-center">
          <span className="border-2 border-orange-400 rounded-[100%] px-2">
            <p>4</p>
          </span>
          <h4 className="ml-2">Cart</h4>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for product"
            className="relative py-2 px-4 border-2 border-blue-900"
          />
          <BsSearch className="absolute right-0 -mt-4 mr-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
