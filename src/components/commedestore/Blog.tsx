import { BlogUsers } from "./blogUsers";
const Person = ({ item }) => {
  return (
    <div className="flex flex-col justify-center items-center w-3/4 my-4">
      <img
        src={item.url}
        alt={item.title}
        className="rounded-[100%] flex flex-row justify-center items-center object-cover"
      />
      <h5 className="text-center mt-4">{item.title}</h5>
      <h6 className="text-gray-400 mt-2">{item.date}</h6>
      <p className="text-gray-400 text-center flex mt-4">
        {" "}
        Duis id faucibus purus. Morbi feugiat, mi ut varius faucibus, massa
        ipsum iaculis massa, et finibus nulla mauris eu erat. Phasellus ut
        pharetra risus.{" "}
      </p>
    </div>
  );
};
const Blog = () => {
  const users = BlogUsers.map((item) => {
    return <Person key={item.id} item={item} />;
  });
  return (
    <div className="mx-[7%] bg-blue-100 my-8 flex flex-col justify-center items-center">
      <div className="py-4">
        <h5 className="font-bold uppercase text-center text-xl">
          Fresh from the blog
        </h5>
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row">
        {users}
      </div>
    </div>
  );
};

export default Blog;
