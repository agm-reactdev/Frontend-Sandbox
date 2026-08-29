import { useState } from "react";
import { Menu, X } from "lucide-react";
import Popup from "./Popup";

function Loadingcircle() {
  const [loading, setLoading] = useState(false);
  const [showpopup, setShowpopup] = useState(false);

  function isloading() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowpopup(true);
    }, 3000);
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <button onClick={isloading}>{showpopup ? null : <Menu />}</button>
      </div>

      <div>
        {loading && (
          <div className=" relative top-60 w-6 h-6 rounded-full border border-t-purple-500 animate-spin"></div>
        )}
      </div>

      <div>
        {showpopup && (
          <button
            className="relative top-55 left-90 cursor-pointer"
            onClick={() => setShowpopup(false)}
          >
            <X />
          </button>
        )}
        {showpopup && <Popup />}
      </div>
    </div>
  );
}

export default Loadingcircle;
