import Login from "../components/loginpageone/Login";
import LoginTwo from "../components/loginpageone/LoginTwo";
function App() {
  return (
    <>
      <div className="h-[100vh] flex space-between pt-[7%] flex-row bg-gradient-to-br from-blue-100 to-purple-300">
        <Login />
        <LoginTwo />
      </div>
    </>
  );
}

export default App;
