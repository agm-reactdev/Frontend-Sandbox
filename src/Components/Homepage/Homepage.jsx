import {Link} from 'react-router-dom'


function Homepage() {
    return (

        <div className='flex flex-col gap-5 items-center mt-4'>
            <div className='flex flex-col items-center'>
                  <h1 className='text-3xl'>Frontend Sandbox</h1>
            <p className='text-2xl text-shadow-gray-600'>Click any button and booom !</p>  
            </div>
            
        <div className='flex gap-4'>
            <Link to="/youtubesidebar"><bUtton className="bg-green-300 px-4 py-2 rounded-xl cursor-pointer ">Youtube Sidebar</bUtton></Link>
            <Link to="/youtubepopup"><bUtton className="bg-green-300 px-4 py-2 rounded-xl cursor-pointer ">Youtube Notification</bUtton></Link>
            <Link to="/hovertoggle"><button className="bg-green-300 px-4 py-2 rounded-xl cursor-pointer">Hover Popup</button></Link>
            <Link to="/carusalbuttons"><button className="bg-green-300 px-4 py-2 rounded-xl cursor-pointer">Amazon Carousal</button></Link>
              <Link to="/loadingcricle"><button className="bg-green-300 px-4 py-2 rounded-xl cursor-pointer">Loading Circle</button></Link>
        </div>
        </div>
    )
}

export default Homepage;