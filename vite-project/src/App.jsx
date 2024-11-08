import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";

function App() {
  const [count, setCount] = useState(0);

  //object
  const userData = {
    name: "kevin",
    age: 30,
    phoneNo: 76587665,
  };

  return (
    <>
      <div>
        <a href="javascript:void(0)">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="javascript:void(0)">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>hello</h1>

      <User
        name={userData.name}
        age={userData.age}
        MobileNo={userData.phoneNo}
      />
    </>
  );
}

export default App;
