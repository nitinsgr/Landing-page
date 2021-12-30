import Image from 'next/image'
import RolesImage from '../images/9.jpg'

function Roles() {
  return (
  <div className=' max-w-7xl mx-auto'>
     <div className='flex h-[80vh] justify-evenly  mt-80'>
      <div className=' scale-75 transform -translate-x-1/4'>
        <Image src={RolesImage} />
      </div>
      <div className=' transform -translate-x-1/4'>
        <h1 className='text-6xl w-3/4 font-Bowlby'>From few to a fandom</h1>
        <p className=' w-3/4 pt-5'>
        Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
        </p>
      </div>
    </div>
  </div>
   
  )
}



export default Roles
