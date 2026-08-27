import { useState } from "react";

function Carusalbuttons() {

  const images = [
    "https://images.pexels.com/photos/33453958/pexels-photo-33453958.jpeg",
     "https://images.pexels.com/photos/30240905/pexels-photo-30240905.jpeg",
     "https://images.pexels.com/photos/39104783/pexels-photo-39104783.jpeg",
     "https://images.pexels.com/photos/29599654/pexels-photo-29599654.jpeg",
     "https://images.pexels.com/photos/39074232/pexels-photo-39074232.jpeg",
     "https://images.pexels.com/photos/38897361/pexels-photo-38897361.jpeg"
  ];
  
  const [index , setIndex] = useState(0);

  
  function Nextimage() {
     setIndex(index === images.length - 1 ? 0 : index + 1)   // last image than sift index 0 means first image and again continue plus one 
  }

  function Preveimage() {
    setIndex(index === 0 ? images.length - 1 : index -1)   // first image than sifht to last image and continue minus one 
  }

    return (
        <div className="w-full px-5 pt-10 rounded-2xl">
            <img src={images[index]} alt="" className="w-[100%] h-60 object-cover"/>
            <div className="flex justify-center gap-6 pt-5 ">
                
            <button className="bg-purple-300 text-white px-4 py-2 rounded-xs font-bold hover:bg-purple-500"  onClick={Nextimage}>Next image </button>
            <button className="bg-purple-300 text-white px-4 py-2 rounded-xs font-bold  hover:bg-purple-500"  onClick={Preveimage}>Preve image</button>   
            </div>
 
        </div>
    )
}

export default Carusalbuttons;