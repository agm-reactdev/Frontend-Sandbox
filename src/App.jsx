import { Routes, Route } from 'react-router-dom'
import Youtubetoggleicon from './Components/Youtubesidebarfeature/Youtubetoggleicon';
import Youtubenotificationtoggle from './Components/Youtubenotificationpopup/Youtubenotificationtoggle';
import Homepage from './Components/Homepage/Homepage';
import Hovertoggle from './Components/Hoverpopup/Hovertoggle';


function App() {
 

  return (
    <div>
    
       <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/youtubesidebar" element={<Youtubetoggleicon />} />
        <Route path='/youtubepopup' element={<Youtubenotificationtoggle/>} />
         <Route path='/hovertoggle' element={<Hovertoggle/>} />
       
      </Routes>
    </div>
    
  );
}

export default App
