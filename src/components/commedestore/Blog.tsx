const Person = () => {
  return (
    <div className="flex flex-col justify-center items-center w-3/4">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <h5>Joe Hishi: Interview</h5>
      <h6 className="text-gray-400">Aug 23 2023</h6>
      <p className="text-gray-400 text-center">
        {" "}
        Duis id faucibus purus. Morbi feugiat, mi ut varius faucibus, massa
        ipsum iaculis massa, et finibus nulla mauris eu erat. Phasellus ut
        pharetra risus. Maecenas in commodo quam. Proin porttitor, dolor eu
        sollicitudin vehicula, nunc augue placerat lorem, ac lobortis sem augue
        nec metus. Suspendisse id quam fel
      </p>
    </div>
  );
};
const Blog = () => {
  return (
    <div className="mx-[7%] bg-blue-100 my-8 flex flex-col justify-center items-center">
      <div className="py-4">
        <h5 className="font-bold uppercase text-center text-xl">
          Fresh from the blog
        </h5>
      </div>
      <Person />
    </div>
  );
};

export default Blog;
