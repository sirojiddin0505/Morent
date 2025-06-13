import React from 'react'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import { usefavoriteStore } from '../../favourites';
import { FaRegHeart } from "react-icons/fa";


const Home = () => {
  const carData = [
    {
      id: 1,
      name: "Koenigsegg",
      category: "Sport",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJPchY5YZoiZnLZTOKcckpFy37P9ig22YCA&s",
      transmission: "Manual",
      fuel:"80l",
      people: "2 People",
      price: "$99.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      category: "Sport",
      image:"https://www.nissan.com.cy/content/dam/Nissan/nissan_europe/experience_nissan/performance/18tdieu-helios317.jpg",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      category: "Sedan",
      image:"https://moscowteslaclub.ru/upload/iblock/898/takkotjd10qxf5knu8is7wyvbibssmni.jpg",
      fuel: "70L",
      transmission: "Manual",
      people: "4 People",
      price: "$96.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 4,
      name: "Nissan GT-R",
      category: "Sport",
      image:"https://modelistam.com.ua/images/tamiya_24210_3.jpg",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id:5,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:6,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:7,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:8,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:9,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:10,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:11,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
    {
      id:12,
      name:"Rolls-Royce",
      category:"Sedan",
      image:"https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$96/day",
      isLiked:false,
    },
  ];
  const {addFavorites} = usefavoriteStore()
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {carData && carData.map(car=>(
      <div className="bg-white border border-gray-500 rounded-lg shadow py-4 px-4">
        <div className='flex justify-between'>
          <span>
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p className="text-sm text-gray-500 py-1">{car.category}</p>
          </span>
          <button className='text-[24px] cursor-pointer active:scale-85 duration-475' onClick={()=> addFavorites(car)} ><FaRegHeart/></button>
        </div>
         <img src={car.image} alt="Koenigsegg" className="w-full h-40 object-cover rounded"/>
        <div className="flex justify-around text-gray-600 py-3">
          <span className='font-semibold text-gray-600'>{car.fuel}</span>
          <span className='font-semibold text-gray-600'>{car.transmission}</span>
          <span className='font-semibold text-gray-600'>{car.people}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-blue-600 font-semibold">{car.price}</p>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-800">Rent Now</button>
        </div>
       </div>
      ))}
    </div>
    </section>
  )
}

export default Home