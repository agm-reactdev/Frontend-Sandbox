import { useState } from "react";
import {Menu , X} from 'lucide-react';
import Youtubesidebartext from "./Youtubesidebartext";

function Youtubetoggleicon() {

    const [open , setOpen] = useState(false);

    function isopen () {
        setOpen(!open);
    }
    return (
        <div className="flex flex-col gap-4 mt-2 items-center">
            <button className="flex  gap-3 items-center" onClick={isopen}>        {open ? <X/> : <Menu/> } <img className="w-[100px] h-[20px]  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7B8IYvwl0lSvCMgLdeXIR-irI3mbjCb6LEI61gmZ5Jg&s=10" alt="" /></button>
            <div>
                 {open ? <Youtubesidebartext/> : null}
            </div>
            
     
        </div>
    )
}

export default Youtubetoggleicon;