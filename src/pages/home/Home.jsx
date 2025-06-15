import React, { useState } from 'react'
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import { usefavoriteStore } from '../../favourites';
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import car_img from '../../assets/Car.svg'


const Home = () => {
  const carData = [
    {
      id: 1,
      name: "Koenigsegg",
      category: "Sport",
      image:'../../assets/car1.png',
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
      image:"https://www.nissan.com.cy/content/dam/Nissan/nissan_europe/experience_nissan/performance/18tdieu-helios317.jpg",
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
      image:"https://moscowteslaclub.ru/upload/iblock/898/takkotjd10qxf5knu8is7wyvbibssmni.jpg",
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
      image:"https://modelistam.com.ua/images/tamiya_24210_3.jpg",
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
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHehE-XLInmJpzJp-9KTD3QCgCI8GzXfIe6w&s",
      fuel:"90l",
      transmission:"Manual",
      people:"4 people",
      price:"$74"
    },
    {
      id:6,
      name:"CR  - V",
      category:"Sedan",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVrGXFWfzp9v4LGKiZobl3JZVdmarnot_8Qx_59-Ili9dEk56Y6OtShADFgjT0UtqonU&usqp=CAU",
      fuel:"80l",
      transmission:"Manual",
      people:"4 people",
      price:"$80"
    },
    {
      id:7,
      name:"All New Terios",
      category:"Sedan",
      image:"https://imgcdn.zigwheels.lk/medium/gallery/color/5/33/daihatsu_terios_sky-blue.jpg",
      fuel:"90l",
      transmission:"Manual",
      people:"4 people",
      price:"$74"
    },
    {
      id:8,
      name:"CR  - V",
      category:"Sedan",
      image:"https://honda-kl.com/images/cr-v/honda-crv-lunar-silver-metallic.png",
      fuel:"80l",
      transmission:"Manual",
      people:"4 people",
      price:"$80"
    },
    {
      id:9,
      name:"MG ZX Exclusice",
      category:"Hatchback",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5GK0raK7Qv1oIFUnl1FSvQrd6lHeOXCadg&s",
      fuel:"70l",
      transmission:"Manual",
      people:"4 people",
      price:"$76"
    },
    {
      id:10,
      name:"New MG ZS",
      category:"Suv",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiU-3fum-058nw0Yv6kfN808-3721ZFT2mg&s",
      fuel:"80l",
      transmission:"Manual",
      people:"6 people",
      price:"$80"
    },
    {
      id:11,
      name:"MG ZX Excite",
      category:"Hetchback",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRTANFvOy_a9YQMXA-yEEVle3pL5chnKT6g&s",
      fuel:"90l",
      transmission:"Manual",
      people:"4 people",
      price:"$74"
    },
    {
      id:12,
      name:"New MG ZS",
      category:"Suv",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiU-3fum-058nw0Yv6kfN808-3721ZFT2mg&s",
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
    <section className="container mx-auto bg-white/50 py-4">
      <div className='flex flex-wrap gap-4 justify-center items-center lg:grid lg:grid-cols-2 lg:justify-between'>
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
         <img src={car.image} alt={car.name} className="max-w-[100%] h-40 object-cover my-6 rounded"/>
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