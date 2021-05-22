import React, { useState } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {

  const [showModel,setShowModal]=useState(false);

  const [showSideBar,setShowSideBar]=useState(false)

  const showModalHandle=()=>{
    setShowModal(true);

  }

  const toggleSideBarHandle=()=>{
    setShowSideBar(!showSideBar)
  }

  return (
    <>
      <div 
      className="flex flex-row justify-between h-screen">
      
      <div className="ml-2 mt-2 sidebar-toggle"
      > <Home toggleSideBarHandle={toggleSideBarHandle}/>
      {showSideBar&&<Sidebar toggleSideBarHandle={toggleSideBarHandle}/>}
      </div>


      <div className="modal">

    <Modal 
     showModalHandle={showModalHandle} setShowModal={setShowModal} showModel={showModel}/>
      </div>
      
    
  </div>
  
  

  
    </>
  )
}

export default App
