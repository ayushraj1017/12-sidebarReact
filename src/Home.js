import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from './Sidebar'

const Home = ({toggleSideBarHandle}) => {
  return (
      <div className="bg-white">
      <button onClick={toggleSideBarHandle}>
        <FaBars/>
      </button>
      </div>
  )
}

export default Home
