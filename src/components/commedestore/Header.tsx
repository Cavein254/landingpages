import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-gray-100 border-b-2 border-gray-200">
        <div className="flex md:w-1/3"></div>
        <div className="flex flex-row justify-center items-center md:w-1/3">
          <div className="border-4 text-center font-bold px-3 py-1 border-orange-400 rounded-[100%] text-lg text-blue-900">
            <p className="p-0 m-0">ML</p>
            <p className="p-0 -mt-2">LX</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm w-full md:w-1/3">
          <div className="flex flex-row items-center justify-around py-2">
            <div>
              <h4 className="text-blue-900 font-bold mr-4">My Account</h4>
            </div>
            <div className="flex flex-row text-blue-900 font-bold items-center justify-around">
              <div className="flex flex-row justify-center items-center">
                <div>
                  <h4 className="mr-2">Cart</h4>
                </div>
                <div className="flex md:mr-4">
                  <span className="border-2 border-orange-400 rounded-[100%] px-2">
                    <p>4</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Search for product"
              className="relative py-2 px-4 rounded-md w-full bg-gray-100 border-2 border-blue-400"
            />
            <BsSearch className="absolute right-0 -mt-6 mr-7" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center items-center shadow-md py-3">
        <nav className="flex flex-row justify-center align-center text-sm uppercase text-blue-900 font-bold flex-wrap">
          <div className="mr-4">home</div>
          <div className="mr-4">catalog</div>
          <div className="mr-4">about</div>
          <div className="mr-4">documentation</div>
          <div className="mr-4">blog</div>
          <div className="mr-4">contact</div>
        </nav>
      </div>
    </>
  );
};

export default Header;
