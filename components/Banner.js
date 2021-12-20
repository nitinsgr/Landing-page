import { DownloadIcon } from "@heroicons/react/solid"
import { Parallax } from "react-scroll-parallax"
import background from '../images/backgroundSvg.svg'

function Banner() {
  return (
    <Parallax >
         <div className=" pt-52  pb-52 bg-BannerBackground bg-cover bg-no-repeat">  
      <div className=" max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-6xl font-Bowlby text-white">
          IMAGINE A PLACE
        </h1>
        <p className=" font-serif w-2/4 mx-auto pt-10 text-black ">
        ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
        </p>
        <div className=" mx-auto flex  max-w-fit space-x-4 pt-10">
          <div>
          <button className="p-4 bg-gray-100 flex gap-2 shadow-lg shadow-slate-250 rounded-full  transform transition duration-300 ease-in-out">
            <DownloadIcon className="h-6 w-6"/>
            Download for windows</button>
          </div>
        <button className="p-4  text-white shadow-xl shadow-slate-250
        rounded-full bg-yellow-400">Open Discord in your browser</button>
       </div>
      </div>
     
      
     </div>
    </div>
    </Parallax>
   
    

  )
}

export default Banner
