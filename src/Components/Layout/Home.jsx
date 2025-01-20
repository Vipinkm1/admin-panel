import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
    const [issidebar, setSidebar] = useState     (false);
    
      const toggleSidebar = () => {
        setSidebar(prevState => !prevState);
      };
  return (
    <div className="homepage">
    <Sidebar isOpen={issidebar} />
    <div className={`dynamic ${issidebar ? 'dynamic-shrink' : ''}`}>
      <Navbar toggleSidebar={toggleSidebar} />
      <div>
      <Outlet />
      </div>

    </div>
  </div>
  )
}

export default Home