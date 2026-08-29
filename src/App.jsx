import { Routes, Route } from 'react-router-dom'
import Youtubetoggleicon from './Components/Youtubesidebarfeature/Youtubetoggleicon';
import Youtubenotificationtoggle from './Components/Youtubenotificationpopup/Youtubenotificationtoggle';
import Homepage from './Components/Homepage/Homepage';
import Hovertoggle from './Components/Hoverpopup/Hovertoggle';
import Carusalbuttons from './Components/Amazonbannarcarusal/Carusalbuttons';
import Loadingcircle from './Components/Loadingcircle/Loadingcircle';




function App() {
 

  return (
    <div>
  
       <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/youtubesidebar" element={<Youtubetoggleicon />} />
        <Route path='/youtubepopup' element={<Youtubenotificationtoggle/>} />
        <Route path='/hovertoggle' element={<Hovertoggle/>} />
        <Route path='/carusalbuttons' element={<Carusalbuttons/>} />
         <Route path='/loadingcricle' element={<Loadingcircle/>} />
      </Routes>
    </div>
    
  );
}

export default App
