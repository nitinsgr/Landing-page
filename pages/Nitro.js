import Image from "next/image"
import Navbar from "../components/Navbar"
import DiscordLogo from '../images/DiscordLogo.png'
import EmojiImage from '../images/Emoji.svg'
import ProfileImage from '../images/profile.svg'
import BoostImage from '../images/Boost.svg'
import BadgeImage from '../images/Badge.svg'
import UploadImage from '../images/Upload.png'
import VideoImage from '../images/Video.png'
import Footer from "../components/Footer"


function Nitro() {
  return (
    <>
     <div>
        <Navbar/>
        <Banner/>
        <SectionContainers/>
        <ClassicBanner/>
        <Footer/>
    </div>
    </> 
   
  )
}

export default Nitro


export const Banner = () => {
  return(
    <div className="pt-32 bg-gradient-to-b from-pink-200 to-purple-300 h-[70vh] ">
      <div  className=" max-w-7xl mx-auto">
      <div className="flex gap-5">
       <Image src={DiscordLogo}/>
        </div>
        <h1 className="text-8xl pt-2 font-Bowlby text-white">Nitro</h1>

        <div className="flex pt-20  gap-5">
          <button className="p-4 bg-black text-white rounded-xl">$99.99 Per Year</button>
          <button className="p-4 bg-black text-white rounded-xl">$9.99 Per Month</button>
        </div>
      </div>

    </div>
  )
 
}


export const SectionContainers = () => {
  return(
    <div className="flex flex-col h-[140vh]">
      <div className="flex flex-col justify-items-center text-center items-center">
        <h1 className="text-black font-Bowlby text-5xl w-4/6 pt-10">DISCORD NITRO ENHANCES YOUR ALL-IN-ONE DISCORD VOICE, VIDEO AND TEXT CHAT</h1>
        <p className="pt-10 text-2xl">Check out all the perks you'll get</p>
      </div>
      <div>
        <GridContainer/>
      </div>
    </div>
  )
}


export const GridContainer = () => {
  return(
    <div className=" max-w-7xl mx-auto mt-32 h-[100vh]">
      <div className=" grid grid-cols-3 gap-5">
        <div className="p-24 bg-gradient-to-t from-green-200 to-cyan-400 text-center rounded-2xl">
          <h2 className=" text-2xl font-bold">Better Emojis</h2>
          <p className="text-sm pt-5 mb-10 text-black">Collect and create your own custom emojis</p>
          <Image src={EmojiImage} className=""/>
        </div>
        <div className="p-24 bg-gradient-to-b from-blue-500 to-sky-400 text-center rounded-2xl">
          <h2 className="text-2xl font-bold">Personal Profile</h2>
          <p className="text-sm pt-5 mb-10">Use an animated avatar and claim a custom tag.</p>
          <Image src={ProfileImage} />
        </div>
        <div className="p-24 bg-gradient-to-r from-blue-600 to-indigo-500 text-center rounded-2xl">
          <h2  className="text-black font-bold text-2xl">Support a server</h2>
          <p className="text-sm pt-5 mb-10">Get two boost and 30% off on extra boost</p>
          <Image src={BoostImage}/>
        </div>
        <div className="p-24 bg-gradient-to-br rounded-2xl from-purple-400 to-pink-400 text-center">
          <h2 className="text-black font-bold text-2xl">Rep Your support</h2>
          <p className="text-sm pt-5 mb-10">Profile badge shows how long you've supported Discord.</p>
          <Image src={BadgeImage} />
        </div>
        <div className="p-24 bg-gradient-to-b from-purple-300 to-orange-400 text-center rounded-2xl">
          <h2 className="text-2xl text-black font-bold">Bigger uploads</h2>
          <p className="text-sm pt-5 mb-10">100MB upload size for high-quality file sharing.
          </p>
          <Image src={UploadImage} width={200} height={120}/>
        </div>
        <div className="p-24 bg-gradient-to-t from-orange-200 to-amber-200 text-center rounded-2xl">
          <h2 className="text-2xl text-black font-bold">HD Video</h2>
          <p className="text-sm pt-5 mb-10">Hi-res video, screenshare, and Go Live streaming.</p>
          <Image src={VideoImage}/>
        </div>

      </div>
     
    </div>

  )
}

export const ClassicBanner = () => {
  return(
    <div className=" bg-gradient-to-br from-blue-500 to-purple-600 h-[50vh]">
      <div className=" max-w-7xl mx-auto">
        <div>
          
        </div>
         <div className="flex flex-col float-right pt-20 gap-5">
           <div className="flex flex-row gap-5">
           <Image src={DiscordLogo} width={50} height={50} />
            <h2 className="text-1xl font-Bowlby text-white">Discord</h2>
           </div>
          <div className="flex-col">
           <h1 className="text-7xl italic font-Bowlby text-white">Nitro</h1>
           <h3 className=" text-white  text-3xl">Classic</h3>
           <p className="text-white pt-5 text-1xl">Keep it simple — get the base chat perks without a Server Boost</p>
         </div>

         <div className="flex gap-5">
           <button className="p-5 text-white bg-black rounded-3xl">$49.99 per year</button>

           <button className="p-5 text-white bg-black  rounded-3xl">$4.99 per month</button>
         </div>
         </div>
        
      </div>
    </div>
  )
}