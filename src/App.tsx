import MainCard from './components/MainCard';
function App() {
  return (
    <>
      <nav className="bg-black flex flex-row justify-between items-center px-4 py-4">
        <div className="">
          <h1 className="text-2xl text-white">Simple Designs</h1>
        </div>
        <div className="flex flex-row items-center space-around">
          <button className="px-2 py-1 rounded-md text-white bg-red-500">
            More
          </button>
        </div>
      </nav>
      <main>
        <MainCard />
      </main>
    </>
  );
}

export default App;
