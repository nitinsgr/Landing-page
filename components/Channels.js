import Image from "next/image"
import ChannelImage from '../images/7.png'



function Channels() {
  return (
   <div className="flex mx-auto  items-center justify-evenly max-w-7xl h-screen">
     <div className=" scale-75 -translate-x-1/4 transform ">
       <Image src={ChannelImage}/>
     </div>
     <div className=" w-4/12">
       <h1 className=" text-6xl font-Bowlby">Create an invite-only place where you belong</h1>
       <p className=" w-9/12 pt-5 font-sans">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
     </div>
   </div>
  )
}

export default Channels
