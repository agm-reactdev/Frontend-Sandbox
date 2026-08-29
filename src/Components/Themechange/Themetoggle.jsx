import { Moon, Sun } from "lucide-react";
import { useState } from "react";

function Themetoggle() {
  const [open, setOPen] = useState(false);

  function isopen() {
    setOPen(!open);
  }
  return (
    <div className="flex justify-center mt-50 text-white">
      <button
        onClick={isopen}
        className=" border rounded-full border-t-green-500 animate-spin p-2"
      >
        {open ? <Moon /> : <Sun />}
      </button>

      {open ? (
        <body className=" bg-amber-400"></body>
      ) : (
        <body className=" bg-black "></body>
      )}
    </div>
  );
}

export default Themetoggle;
