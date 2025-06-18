import React, { useState } from 'react'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import { usefavoriteStore } from '../../favourites';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import car_img from '../../assets/Car.svg'
import car_1 from '../../assets/car-1.png'
import car_3 from '../../assets/car-3.png'
import car_2 from '../../assets/car-2.png'
import car_4 from '../../assets/car-4.png'
import car_5 from '../../assets/car-5.png'
import car_6 from '../../assets/car-6.png'
import car_7 from '../../assets/car-7.png'
import car_8 from '../../assets/car-8.png'
import car_9 from '../../assets/car-9.png'
import car_10 from '../../assets/car-10.png'
import car_11 from '../../assets/car-11.png'
import car_12 from '../../assets/car-12.png'


const Home = () => {
  const carData = [
    {
      id: 1,
      name: "Koenigsegg",
      category: "Sport",
      image:car_1,
      transmission: "Manual",
      fuel:"80l",
      people: "2 People",
      price: "$96",
      onRent: "Rent Now",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      category: "Sport",
      image:car_2,      
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100",
      onRent: "Rent Now",
    },
    {
      id: 3,
      name: "Rolls-Royce",
      category: "Sedan",
      image:car_3,
      fuel: "70L",
      transmission: "Manual",
      people: "4 People",
      price: "$96",
      onRent: "Rent Now",
    },
    {
      id: 4,
      name: "Nissan GT-R",
      category: "Sport",
      image:car_4,
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100",
      onRent: "Rent Now",
    },
    {
      id:5,
      name:"All New Terios",
      category:"Sedan",
      image:car_5,
      fuel:"90l",
      transmission:"Manual",
      people:"4 people",
      price:"$74"
    },
    {
      id:6,
      name:"CR  - V",
      category:"Sedan",
      image:car_6,
      fuel:"80l",
      transmission:"Manual",
      people:"4 people",
      price:"$80"
    },
    {
      id:7,
      name:"All New Terios",
      category:"Sedan",
      image:car_7,
      fuel:"90l",
      transmission:"Manual",
      people:"4 people",
      price:"$74"
    },
    {
      id:8,
      name:"CR  - V",
      category:"Sedan",
      image:car_8,
      fuel:"80l",
      transmission:"Manual",
      people:"4 people",
      price:"$80"
    },
    {
      id:9,
      name:"MG ZX Exclusice",
      category:"Hatchback",
      image:car_9,
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$76"
    },
    {
      id:10,
      name:"New MG ZS",
      category:"Suv",
      image:car_10,
      fuel:"80l",
      transmission:"Manual",
      people:"6 people",
      price:"$80"
    },
    {
      id:11,
      name:"MG ZX Excite",
      category:"Hetchback",
      image:car_11,
      fuel:"90l",
      transmission:"Manual",
      people:"4 people",
      price:"$74"
    },
    {
      id:12,
      name:"New MG ZS",
      category:"Suv",
      image:car_12,
      fuel:"80l",
      transmission:"Manual",
      people:"6 people",
      price:"$80"
    },
  ];
  const {addFavorites, removeFavorites, isFavorite} = usefavoriteStore()
  const toggleFavorite = (car) => {    
    if (isFavorite(car.id)) {
      removeFavorites(car.id);
    } else {
      addFavorites(car);
    }
  }
  const {search} = usefavoriteStore()
  const searchCard = carData.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <section className="container mx-auto bg-white/50 py-4 pt-20">
      <div className='flex flex-col gap-4 justify-between items-center lg:grid lg:grid-cols-2 place-items-center-safe'>
        <div className='bg-[#54A6FF] max-w-[630px] rounded-[10px] p-6'>
          <h1 className='text-[#FFFFFF] text-center mx-auto text-[32px] font-[600] md:text-left md:mx-0 md:max-w-[270px]'>The Best Platform for Car Rental</h1>
          <p className='text-[#FFFFFF] text-center md:text-left mx-10 md:mx-0 md:max-w-[270px] py-4'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className='bg-[#3563E9] text-[#ffff] text-center mx-auto flex py-3 px-25 my-4 rounded-full hover:bg-blue-700 cursor-pointer md:text-start md:mx-0 md:py-2 md:px-5 md:rounded-md'>Rental Car</button>
          <img src={car1} alt="" className="text-center mx-auto py-4 mr-4 w-[320px] md:w-[400px] md:ml-34"/>
        </div>
        <div className='bg-[#54A6FF] max-w-[630px] rounded-[10px] p-6'>
          <h1 className='text-[#FFFFFF] text-center mx-auto text-[32px] font-[600] md:text-left md:mx-0 md:max-w-[270px]'>Easy way to rent a car at a low price</h1>
          <p className='text-[#FFFFFF] text-center md:text-left mx-10 md:mx-0 md:max-w-[270px] py-4'>Providing cheap car rental services and safe and comfortable facilities.</p>
          <button className='bg-[#4191e7] text-[#ffff] text-center mx-auto flex py-3 px-25 my-4 rounded-full hover:bg-blue-800 cursor-pointer md:text-start md:mx-0 md:py-2 md:px-5 md:rounded-md'>Rental Car</button>
          <img src={car2} alt="" className="text-center mx-auto mr-4 py-1 w-[320px] md:w-[400px] md:ml-34" />
        </div>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 pt-16">
      {searchCard && searchCard.map(car => (
      <div className="bg-[#ffff] rounded-lg shadow py-4 px-4 border border-gray-500">
        <div className='flex justify-between'>
          <span>
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p className="text-sm text-gray-500 py-1">{car.category}</p>
          </span>
          <button onClick={()=>toggleFavorite(car)} className='mb-3'>
          {isFavorite(car.id) ? <IoIosHeart className='text-red-500 text-[28px] font-bold cursor-pointer'/> : <IoIosHeartEmpty className='text-[28px] font-bold cursor-pointer'/>}
          </button>
        </div>
         <div><img src={car.image} alt={car.name} className="w-full h-50 object-contain my-4 rounded"/></div> 
        <div className="flex justify-around md:grid md:grid-cols-2 xl:grid-cols-3 text-gray-600 ">
          <span className='font-semibold text-gray-600 flex items-center gap-1'><BsFillFuelPumpFill/>{car.fuel}</span>
          <span className='font-semibold text-gray-600 flex items-center gap-1 xl:mr-6'><img src={car_img} alt="" />{car.transmission}</span>
          <span className='font-semibold text-gray-600 flex items-center gap-1'><IoPeopleSharp/>{car.people}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="font-[700] flex gap-1">{car.price}<p className='text-gray-700'>/day</p></p>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-800">Rent Now</button>
        </div>
       </div>
      ))}
    </div>
    </section>
  )
}

export default Home