import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-bold font-2xl text-blue-400">
        This is a sample text
      </div>
    </>
  );
}

export default App;
