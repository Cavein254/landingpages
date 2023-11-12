import { Link } from "react-router-dom";
const MainCard = () => {
  return (
    <Link
      to="/pageone"
      className="w-[250px] m-4 w-3/5 flex flex-col justify-center items-center rounded-md shadow-md bg-gray-100 hover:bg-blue-100 hover:shadow-lg"
    >
      <div>
        <img
          src="https://images.unsplash.com/photo-1635602739175-bab409a6e94c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="contain rounded-t-lg"
        />
      </div>
      <div className="text-center m-4">
        <h2 className="text-2xl text-gray-400">Login Screen One</h2>
        <p className="text-sm">A user registration and login screen </p>
        <p className="text-sm font-bold">
          The design is based on a pintrest card by{" "}
          <a
            href="https://www.pinterest.com/pin/794392821801990251/"
            className="underline text-blue-900"
          >
            Muzli
          </a>
        </p>
      </div>
    </Link>
  );
};

export default MainCard;
