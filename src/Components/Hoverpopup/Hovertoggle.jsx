
import { useState } from "react";
import Hoverpopup from "./Hoverpopup";
import { ArrowDownNarrowWide } from "lucide-react";

function Hovertoggle() {
  const [hover, setHover] = useState(false);

  function ishover() {
    setHover(true);
  }

  function isleave() {
    setHover(false);
  }

  return (

    <>
    <div className="flex flex-col items-center mt-4 gap-4">
       
      <div>
        
        <button
          className="flex items-center gap-2 hover:border rounded-xl px-2 py-4 "
          onMouseEnter={ishover}
          onMouseLeave={isleave}
        >
          <img
            className="w-6 h-4"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZCaupQhxfpqew8CnsjkVWvQPNH1XGfmiCDYvuG0sOQ&s"
            alt=""
          />

          <span className="flex">
            EN
            <ArrowDownNarrowWide className=" w-5 h-3 mt-3" />
          </span>
        </button>
      </div>

      <div>{hover ? <Hoverpopup /> : null}</div>
    </div>


    
    </>
  );
}

export default Hovertoggle;
