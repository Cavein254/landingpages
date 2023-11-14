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
    <>
      <div className="mx-[7%] bg-blue-100 my-8 flex flex-col justify-center items-center py-8">
        <div className="py-4">
          <h5 className="font-bold uppercase text-center text-xl">
            Fresh from the blog
          </h5>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row">
          {users}
        </div>
        <div className="w-full mx-[7%] flex justify-center">
          <hr className="border-[1px] border-gray-300 w-[80%] my-6" />
        </div>
        <div className="w-full flex-col justify-center items-center">
          <h5 className="uppercase font-bold text-2xl text-center">
            The minimal story
          </h5>
          <div className="md:flex md:flex-row">
            <div className="bg-blogbg bg-no-repeat bg-top bg-fit h-[350px] md:bg-contain w-full md:h-[70vh] md:w-1/2">
              <div className="flex flex-col h-full w-full">
                <div className="flex flex-col justify-center items-center mt-[15%] font-bold text-4xl italic text-orange-200">
                  <h5>CAPRE</h5>
                  <h5>DIEM</h5>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:flex-row flex flex-col">
              <div className=" flex flex-col justify-center items-center md:flex-row md:ml-[4%] md:w-[65%] mx-4">
                <p>
                  <span className="font-bold text-4xl">L</span>
                  orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  euismod purus ut felis dictum consequat. Duis condimentum sem
                  ut aliquet dignissim. Duis volutpat sem eu laoreet tempor.
                  Aliquam vel rhoncus orci, eu luctus metus. Ut sit amet risus
                  massa. Donec vel elementum metus, eu semper felis. Maecenas
                  urna lorem, pellentesque vitae pulvinar sit amet, commodo sed
                  odio. Maecenas at ante nec arcu luctus suscipit. Suspendisse
                  orci elit, faucibus id ultricies eu, molestie id turpis.
                  Aliquam erat volutpat. Nunc fringilla ligula in mauris
                  vestibulum imperdiet. Curabitur sit amet vestibulum erat.
                  Curabitur ac volutpat mi. Phasellus vel sapien dignissim,
                  pellentesque ex ut, eleifend ligula. Proin eu ligula eget nibh
                  commodo pharetra pellentesque id dui. Vestibulum auctor erat
                  et dui fringilla rhoncus. Morbi sed leo vulputate, rhoncus
                  nisi sit amet, cursus risus. Pellentesque venenatis est porta
                  erat vehicula gravida. Suspendisse et ligula sit amet est
                  tempus vestibulum quis eget lectus. Fusce tincidunt metus eu
                  rutrum sodales. Suspendisse eget urna metus. Donec sed ligula
                  in augue dapibus placerat. In cursus leo sed fringilla luctus.
                  Donec felis justo, porta vel est at, vestibulum ullamcorper
                  ligula. Nulla facilisi. Cras aliquet risus turpis, at varius
                  dui pharetra sit amet. Praesent consequat ipsum non lorem
                  eleifend euismod. Aenean accumsan tempus nisl vel blandit.
                </p>
              </div>
              <div className="border-[1px] border-gray-400 flex flex-col p-4 mt-4 mx-8 md:w-[35%] h-fit">
                <div className="flex justify-center items-center">
                  <img
                    src="https://images.unsplash.com/photo-1559629819-638a8f0a4303?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="my image"
                    className="w-[150px] h-[150px] rounded-full"
                  />
                </div>
                <hr className="border-[1px] border-b-gray-400 -mx-4" />
                <div>
                  <p className="text-gray-400 text-xs">
                    {" "}
                    Phasellus est nulla, scelerisque sed mi sed, varius tempor
                    quam. Duis malesuada tempus iaculis. In sit amet massa ac
                    lorem dignissim dictum sed vel enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
