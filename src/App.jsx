import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "yellow" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 text-black rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
