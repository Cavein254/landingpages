const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-2 bg-gray-100 border-b-2 border-gray-200">
      <div></div>
      <div>
        <div className="border-4 text-center font-bold p-2 border-orange-400 rounded-full text-lg text-blue-900">
          <p className="p-0 m-0">ML</p>
          <p classNamw="p-0 m-0">LX</p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>
          <h4 className="text-blue-900 font-bold">My Account</h4>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
