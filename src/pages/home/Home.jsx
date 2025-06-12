import React from 'react'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'

const Home = () => {
  return (
    <section className="container mx-auto bg-white/50 py-4">
      <div className='flex gap-4 justify-between items-center'>
        <div className='bg-[#54A6FF] w-[600px] rounded-[10px] p-6 pb-18 relative'>
          <h1 className='text-[#FFFFFF] text-[32px] max-w-[270px]'>The Best Platform for Car Rental</h1>
          <p className='text-[#FFFFFF] text-[] max-w-[270px] py-4'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className='bg-[#3563E9] text-[#ffff] hover:bg-blue-700 py-2 px-5 rounded-md mb-2'>Rental Car</button>
          <img src={car1} alt="" className="absolute -bottom-6 w-108 right-12 rotate-[1.5deg]"/>
        </div>
        <div className='bg-[#3563E9] w-[600px] rounded-[10px] p-6 pb-18 relative'>
          <h1 className='text-[#FFFFFF] text-[32px] max-w-[270px]'>Easy way to rent a car at a low price</h1>
          <p className='text-[#FFFFFF] text-[] max-w-[270px] py-4'>Providing cheap car rental services and safe and comfortable facilities.</p>
          <button className='bg-[#54A6FF] text-[#ffff] hover:bg-blue-800 py-2 px-5 rounded-md mb-2'>Rental Car</button>
          <img src={car2} alt="" className="absolute -bottom-14 right-12 w-90 rotate-[1.5deg]" />
        </div>
      </div>
    </section>
  )
}

export default Home