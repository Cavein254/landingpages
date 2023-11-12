import { Link } from "react-router-dom";
import { LinksData } from "../data/linksData";
const MainCard = () => {
  // const { url, img, title, tagline, description } = LinksData;
  return (
    <Link
      to={LinksData[0].url}
      className="w-[250px] m-4 w-3/5 flex flex-col justify-center items-center rounded-md shadow-md bg-gray-100 hover:bg-blue-100 hover:shadow-lg"
    >
      <div>
        <img src={LinksData[0].img} className="contain rounded-t-lg" />
      </div>
      <div className="text-center m-4">
        <h2 className="text-2xl text-gray-400">{LinksData[0].title}</h2>
        <p className="text-sm">{LinksData[0].tagline} </p>
        <p className="text-sm font-bold">description</p>
      </div>
    </Link>
  );
};

export default MainCard;
