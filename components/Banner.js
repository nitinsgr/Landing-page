
import { useState, useRef } from "react"
import { Parallax } from "react-scroll-parallax"
import { DownloadIcon } from "@heroicons/react/solid";
import {playlist} from '../pages/data'




function Banner({playlistItem}) {
  const [showModal, setShowModal] = useState(false);

  const openModalHandle = () => {
    setShowModal(true);
  }
  
  const closeModalHandle = () => {
    setShowModal(false);
  }


  const text = "Download for windows";
  

  return (

    <Parallax >
      <div  className=" h-[92vh] bg-no-repeat bg-cover bg-opacity-25  bg-AdobeImage pt-40 md:pt-52 ">  
        <div className=" max-w-7xl mx-auto">
         {showModal ? null : 
         <div className="">
            <div          
           className="text-center">
            <h1 className="text-4xl md:text-6xl font-Bowlby text-black">IMAGINE A PLACE </h1>
            {playlist.map(item => (
              <>
              <p className="font-serif mx-auto pt-10 text-center md:w-3/5 text-black">{item.headerText}</p>
              </>
          
            ))}
          <div className=" mx-auto flex max-w-fit space-x-4 pt-10">
            <div className="pt-5 flex md:flex-row flex-col">
            <button className=" p-2 m-2  bg-gray-800  flex gap-2 shadow-lg shadow-slate-250 rounded-full  transform transition duration-300 text-white ease-in-out hover:scale-105 text-sm" onClick={openModalHandle}>
             
             <DownloadIcon className=" md:h-6 md:w- md:visible hidden text-white"/>
             <p className="flex-grow p-1.5">Download for Windows</p>
             </button>
           
          
            <button className="text-white shadow-xl shadow-slate-250
            rounded-full bg-red-500 p-1 md:p-3 md:m-2">
              <p className="text-sm">Open Discord in Browser</p>
            </button>
             </div>
        </div>
      </div>
          </div>
          }
      {showModal ? <Modal closeModalHandle={closeModalHandle}/> : null}
     </div> 
    </div>
    </Parallax>
  )
}

export default Banner


const Modal = ({closeModalHandle}) => {
  return(
    <div>
        <div className="bg-white mx-auto rounded-xl p-5 w-2/4 transition transform duration-300 ease-in-out mt-20" 
        >
          <button onClick={closeModalHandle}>close</button>
         {playlist.map(item => (
           <>
           <h1>{item.headerText}</h1>
           <h2>{item.surname}</h2>
           </>
         ))}
        </div>  
      </div>
  )
}


export const getStaticProps = async () => {
  return{
    props: {
      playlistItem : playlist,
    }
  }
}

