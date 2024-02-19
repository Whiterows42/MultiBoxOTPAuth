import { useState } from "react";
import "./App.css";
import PhoneLOgin from "./Componant/PhoneLOgin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1>Login With Phone</h1>
        <PhoneLOgin />
      </div>
    </>
  );
}

export default App;
