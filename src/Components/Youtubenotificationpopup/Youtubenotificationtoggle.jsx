import { useState } from "react";
import { Bell } from "lucide-react";
import Youtubepopup from "./Youtubepopup";

function Youtubenotificationtoggle() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

  function isopen() {
    setOpen(!open);
    setCount(count === 1 ? null : count + 1);
  }
  return (
    <div className="flex flex-col items-center  mt-2">
      <span className="bg-red-500 text-white px-2 rounded-full border relative top-5 left-3">
        {count}
      </span>

      <button
        className="p-2 rounded-full bg-white text-black "
        onClick={isopen}
      >
        <Bell />{" "}
      </button>

      <div className="mt-10">{open ? <Youtubepopup /> : null}</div>
    </div>
  );
}

export default Youtubenotificationtoggle;
