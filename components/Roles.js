import Image from 'next/image'
import RolesImage from '../images/Group 2.png'

function Roles() {
  return (
  <div className=' max-w-7xl mx-auto'>
     <div className='flex h-[80vh] justify-evenly  mt-80'>
      <div>
        <Image src={RolesImage} />
      </div>
      <div className=' translate-x-1/4'>
        <h1 className='text-6xl w-2/4 font-Bowlby'>From few to a fandom</h1>
        <p className=' w-2/4 pt-5'>
        Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
        </p>
      </div>
    </div>
  </div>
   
  )
}



export default Roles
