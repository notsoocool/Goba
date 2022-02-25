import type { NextPage } from 'next'
import Landing from '../components/Landing'
import Header from '../components/Header'
import Footer from '../components/Footer'



const Home: NextPage = () => {
  return (
    <div className="  w-full h-full flex flex-col">
 
        <Header />
 
    
        <Landing />
     
       
    </div>
  )
}

export default Home
