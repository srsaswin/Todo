import React, { useState } from "react";
import Llist from "./components/Llist";
import "./App.css";
function App() {
  const [txt, saveTxt] = useState("");
  const [arr, list] = useState([]);
  function del(txt) {
    list(arr.filter((a) => a != txt));
  }
  return (
    <main>
      
      <h1>to do list</h1>
      <div className="input-bar">
        <input
          onChange={(e) => saveTxt(e.target.value)}
          type="text"
          value={txt}
        />
        <button onClick={() => list([...arr, txt])}>+</button>
      </div>
      <div>
        <h1>
        </h1>
      </div>
      <>
        {arr.map((a) => (
          <h1>{
            <Llist txt={a}
            
            onDelete={() => del(a)

            }/>
            
            }</h1>
        ))}
      </>
    </main>
  );
}

export default App;
