import { ArrowDownIcon, ChevronDoubleDownIcon, FlagIcon } from "@heroicons/react/solid"
import Image from "next/image"
import UsaImage from '../images/um.svg'
import { FaBeer, FaFacebook, FaInstagram, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className="mx-auto items-center bg-slate-800 ">
      <div className="grid grid-cols-1 md:grid-cols-6 space-x-12 gap-y-10 lg:p-40  mx-auto ml-32 bg-slate-800  ">
        <div>
          <h1 className="text-5xl font-Bowlby text-white">Imagine a place</h1>
          <div className="flex pt-2 items-center space-x-2">
            <Image src={UsaImage} width={50} height={50}/>
            <p className="text-1xl text-white">English</p>
            <ChevronDoubleDownIcon className="h-5 w-5 text-white"/>
          </div>
          <div className="flex space-x-2 pt-20 text-white">
            <FaFacebook className="w-8 h-8"/>
            <FaInstagramSquare className="w-8 h-8"/>
            <FaTwitterSquare className="w-8 h-8"/>
            <FaYoutubeSquare className="w-8 h-8"/>
          </div>
        </div>
        <div className=" flex flex-col space-y-5">
          <h2 className="text-3xl  font-bold text-blue-400">Product</h2>
          <p className="text-1xl text-white font-semibold">Download</p>
          <p className="text-1xl text-white font-semibold">Nitro</p>
          <p className="text-1xl text-white font-semibold">Status</p> 
        </div>
        <div className=" flex flex-col space-y-5 ">
          <h2 className="text-3xl font-bold text-blue-400">Company</h2>
          <p className="text-1xl font-semibold text-white">About</p>
          <p className="text-1xl font-semibold text-white">Jobs</p>
          <p className="text-1xl font-semibold text-white">Branding</p>
          <p className="text-1xl font-semibold text-white">Newsroom</p>
        </div>
        <div className="flex flex-col space-y-5">
        <h2 className="text-3xl font-bold text-blue-400">Resources</h2>
          <p className="text-1xl font-semibold text-white">College</p>
          <p className="text-1xl font-semibold text-white">Support</p>
          <p className="text-1xl font-semibold text-white">Safety</p>
          <p className="text-1xl font-semibold text-white">Blog</p>
          <p className="text-1xl font-semibold text-white">Feedback</p>
          <p className="text-1xl font-semibold text-white">Developer</p>
          <p className="text-1xl font-semibold text-white">Streamkit</p>
        </div>
        <div className="flex flex-col space-y-5">
        <h2 className="text-3xl font-bold text-blue-400">Policies</h2>
          <p className="text-1xl font-semibold text-white">Terms</p>
          <p className="text-1xl font-semibold text-white">Privacy</p>
          <p className="text-1xl font-semibold text-white">Cookie Setting</p>
          <p className="text-1xl font-semibold text-white">Blog</p>
          <p className="text-1xl font-semibold text-white">Guidelines</p>
          <p className="text-1xl font-semibold text-white">Acknowledgment</p>
          <p className="text-1xl font-semibold text-white">Moderation</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
