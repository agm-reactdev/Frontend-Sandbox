import { Routes, Route } from 'react-router-dom'
import Youtubetoggleicon from './Components/Youtubesidebarfeature/Youtubetoggleicon';

function App() {
 

  return (
    <div>
       <Routes>
        <Route path="/youtubesidebar" element={<Youtubetoggleicon />} />
       
      </Routes>
    </div>
    
  );
}

export default App
