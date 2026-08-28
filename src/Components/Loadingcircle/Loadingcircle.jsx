import { useState } from "react";

import Popup from "./Popup";

function Loadingcircle() {
  const [isloading, setIsloading] = useState(false);

  function isloadingclick() {
    setIsloading(true);

    setTimeout(() => {
      setIsloading(false);
    }, 3000);
  }
  return (
    <div className="flex flex-col items-center gap-5 mt-10 ">
      <button
        onClick={isloadingclick}
        className="bg-yellow-200 w-40  px-4 py-1 rounded-2xl"
      >
        {isloading ? (
          <div className="ml-12 w-6 h-6 rounded-full border-t-orange-500 animate-spin border ">
            {" "}
          </div>
        ) : (
          <span>Add to cart</span>
        )}
      </button>

      <div>{isloading ? null : <Popup />}</div>
    </div>
  );
}

export default Loadingcircle;
