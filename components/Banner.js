
import { useState, useRef } from "react"
import { Parallax } from "react-scroll-parallax"


function Banner() {
  const [showModal, setShowModal] = useState(false);

  const openModalHandle = () => {
    setShowModal(true);
  }
  
  const closeModalHandle = () => {
    setShowModal(false);
  }

  return (

    <Parallax >
         <div  className=" pt-52 h-screen bg-newBackground bg-no-repeat bg-cover 
          bg-fixed
         ">  
      <div className=" max-w-7xl mx-auto">
        {showModal ? null : <div
          
      
         className="text-center bg-white p-12 shadow-2xl rounded-3xl">
        
          <h1 className="text-6xl font-Bowlby text-black">
            IMAGINE A PLACE
          </h1>
          <p className=" font-serif w-2/4 mx-auto pt-10 text-black ">
          ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>
          <div className=" mx-auto flex  max-w-fit space-x-4 pt-10">
            <div>
            <button className="p-4 bg-gray-100  flex gap-2 shadow-lg shadow-slate-250 rounded-full  transform transition duration-300 ease-in-out" onClick={openModalHandle}>
             
              {showModal === false ? 'Open model' : 'Close model'}
             </button>
            </div>
          
            <button className="p-4  text-white shadow-xl shadow-slate-250
            rounded-full bg-red-500">Open Discord in your browser</button>
        </div>
      </div>  }
       
    
      <div>
        {showModal ? 
        <div className="bg-white mx-auto rounded-xl p-5 w-2/4 transition transform duration-300 ease-in-out mt-20"
          
        >
        
          <button onClick={closeModalHandle}>close</button>
        </div>  
        
        : null}
      </div>
     
      
     </div> 
    </div>
    </Parallax>
   
    

  )
}

export default Banner
