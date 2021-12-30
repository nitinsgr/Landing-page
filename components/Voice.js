import VoiceIllustration from '../images/8.png'
import Image from 'next/image'

function Voice() {
  return (
    <div className='bg-gray-100 h-[80vh] items-center justify-items-center flex'>
       <div className="flex justify-evenly mx-auto mt-20 max-w-7xl  ">
      <div className="">
        <h1 className=" text-black text-6xl w-2/4 font-Bowlby">Where hanging out is easy</h1>
        <p className=" w-2/4 pt-10">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
      </div>
      <div className='mx-auto  scale-75 transform  translate-x-1/4'>
        <Image src={VoiceIllustration} />
      </div>
      
    </div>
    </div>
   
  )
}

export default Voice
