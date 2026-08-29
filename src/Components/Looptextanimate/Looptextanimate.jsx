import { useEffect, useState } from "react";

function Looptextanimate() {

    const texts = [
    { text: "Abdul Ghaffar", color: "text-red-500" },
    { text: "Frontend developer", color: "text-blue-500" },
    { text: "Problem solver", color: "text-green-500" },
    { text: "Logic thinker", color: "text-yellow-500" }
    ];

    const [index , setIndex] = useState(0);

     useEffect(() => {
        const timer = setInterval(() => {

            setIndex((index) => index === texts.length - 1 ? 0 : index + 1)
            
        }, 2000);

        return () => clearInterval(timer)
     }, []);
      
      
    return (
        <div className="flex justify-center pt-30 text-4xl ">
            <h1 className={ texts[index].color}  >{texts[index].text} </h1>
        </div>
    )
}

export default Looptextanimate;