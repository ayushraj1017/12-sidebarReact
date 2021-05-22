import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = ({toggleSideBarHandle}) => {
  return <>
  <div className="flex bg-white h-screen px-4 text-lg pt-10">

  
      <div className="">
        {links.map((link)=>{
          const{url,id,text,icon}=link;
          return <ul key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </ul>
        })}
        <div className="flex mt-10 justify-between">
          {social.map((icons)=>{
          const{url,id,text,icon}=icons;
          return <ul  className="mr-4 bg-black text-white p-2"  key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </ul>
          })}
        </div>
      </div>
      <div className="text-red-600 mr-20">
      <FaTimes onClick={toggleSideBarHandle}
      className="ml-20"/>
      </div>
      </div>
  </>
}

export default Sidebar
