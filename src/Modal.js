import React ,{useRef} from 'react'
import { FaTimes } from 'react-icons/fa'


const Modal = ({showModalHandle,showModel,setShowModal}) => {


  return <div>
  {showModel? (<div className= "modal-container  shadow-2xl ">
      <h1>Modal</h1>
      <button onClick={()=>setShowModal(false)}
      className="close-modal-btn"
      ><FaTimes/></button>
    </div>):(<button onClick={showModalHandle}
    className="btn">
    SHOW MODAL

    </button>)}
  
      
      
      
   

  </div>
}

export default Modal
