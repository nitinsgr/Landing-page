import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Call from '../components/Call'
import Channels from '../components/Channels'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Roles from '../components/Roles'
import Voice from '../components/Voice'


export default function Home() {
  return (
   <>
   <div>
    <Navbar/>
    <Banner/>
     <Channels/>
    <Voice/>
    <Roles/>
    <Call/>
    <Footer/>
   </div>
   
   </>

  )
}
