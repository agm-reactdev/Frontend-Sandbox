import { useState } from "react";
import { Bell } from "lucide-react";
import Youtubepopup from "./Youtubepopup";


function Youtubenotificationtoggle () {

    const [ open , setOpen] = useState(false);
    
    function isopen () {
        setOpen(!open);
    }
    return (
         <div className="flex flex-col items-center  mt-2">
            <button  className="p-2 rounded-full bg-white text-black hover:bg-gray-600 hover:text-white" onClick={isopen}><Bell/></button>
            {open ? <Youtubepopup/> : null}
         </div>
    )
}

export default Youtubenotificationtoggle;