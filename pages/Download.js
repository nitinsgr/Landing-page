import Image from "next/image"
import Navbar from "../components/Navbar"
import BannerImage from '../images/downloadbackground.png'
import IOSImage from '../images/IOS.svg'
import AndroidImage from '../images/Android.svg'
import Footer from "../components/Footer"


function Download() {
  return (
    <div>
      <Navbar className=""></Navbar>
      <Banner/>
      <GridSection/>
      <Footer/>
    </div>
  )
}

export default Download



export const Banner = () => {
  return(
    <div className=" bg-secondary_color h-[80vh]">
      <div className="flex pt-20 justify-between max-w-7xl mx-auto items-center justify-items-center">
        <div className="pt-36 text-7xl w-2/4 ">
          <h1 className="text-black font-Bowlby">GET DISCORD FOR ANY DEVICE</h1>
          <p className="text-lg  text-black font-Krona">An adventure awaits. Hang out with your friends on our desktop app and keep the conversation going on mobile.</p>

          <button className="p-4 bg-black text-white text-sm rounded-full hover:scale-110 transform transition-all duration-200">
            <h1 className=" font-Krona">Download for Windows</h1>
          </button> 
        </div>
        <div className="pt-20">
      
        </div>
      </div>
    </div>
  )
}


export const GridSection = () => {
  return(
    <div className="h-[100vh] mb-20">
      <div className=" grid grid-cols-2 text-center m-32">
        <div className="flex flex-col bg-primary_color h-[90vh] w-[60vh] lg:m-20 md:rounded-3xl items-center justify-items-center pt-10 pb-10">
          <h1 className="text-5xl font-Krona p-5 text-white">IOS</h1>
          <button className=" bg-black w-3/6 text-white font-Krona text-1xl p-4 mb-10">Download for IOS</button>
          <div className="relative w-[40vh] h-[80vh]">
          <Image src={IOSImage} layout="fill"/>
          </div>
        </div>
        
        <div className="flex flex-col bg-primary_color h-[70vh] w-[60vh] md:rounded-3xl items-center justify-items-center pt-10 pb-10">
        <h1 className="text-4xl font-Krona p-5 text-white">Android</h1>
          <button className=" bg-black w-2/4 text-white font-Krona text-1xl mb-10 p-4">Download for Android</button>
          <div className="relative w-[40vh] h-[80vh]">
          <Image src={AndroidImage} layout="fill"/>
          </div>
        </div>
      </div>
    </div>  

  )
}


