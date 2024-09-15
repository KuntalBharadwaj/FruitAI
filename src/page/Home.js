import React from 'react'
import HomeComponent from '../component/HomeComponent'

function Home() {
  return (
    <div className='pt-[54px] bg-custom-gradient min-h-screen'>
        <h1 className='font-Dosis text-center text-[30px] font-[550] text-[#FFFFFF]'>Fruit.Ai</h1> 
        <h1 className='pt-[20px] font-Dosis text-center text-[15px] font-[700] text-[#FFFFFF]'>"Be Healthy!"</h1> 
        <div className='pt-[20px]'>
            <HomeComponent/>
        </div>
    </div>
  )
}

export default Home
