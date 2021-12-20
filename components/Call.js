import Image from 'next/image'
import CallImage from '../images/Group 3.png'

function Call() {
  return (
    <div className=' bg-blue-500 pt-32 text-white '>
    <div className=' flex flex-col justify-items-center align-middle  '>
      <div className=' mx-auto items-center justify-items-center flex flex-col '>
        <h1 className='text-6xl font-Bowlby pb-20 text-white'>RELIABLE TECH FOR STAYING CLOSE</h1>
        <p className='  text-center transform w-full pb-10 text-white'>Low-latency voice and video feels like you’re in the same room.<br/>Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
        <Image src={CallImage}  className='mt-20 pl-52 scale-90 ' />

        <h1 className=' font-Bowlby text-2xl pt-10 pb-10'>Ready to start your journey?</h1>
        <button className='p-4 hover:mr-4 hover:transform hover:transition duration-500 ease-in-out hover:border-b-4 bg-red-500 text-white mb-20 shadow-xl rounded-full '>Download for Windows</button>
      </div>
    </div>
    </div>
    
  )
}

export default Call
