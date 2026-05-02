import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Dashboard() {
  return (
    <nav>
        <Link to={"profile"}>Profile</Link>
        <Link to={"setting"}>Setting</Link>
        <Outlet/>
    </nav>
    
  )
}

export default Dashboard