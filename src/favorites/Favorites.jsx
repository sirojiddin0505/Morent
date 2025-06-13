import React from 'react'
import { usefavoriteStore } from '../favourites'
import { IoIosHeart } from "react-icons/io";

const Favorites = () => {
  const {favorite, removeFavorites} = usefavoriteStore()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {favorite && favorite.map(car=>(
      <div className="bg-white border border-gray-500 rounded-lg shadow py-4 px-4">
        <div className='flex justify-between items-center'>
          <span>
            <h2 className="text-xl font-bold">{car.name}</h2>
            <p className="text-sm text-gray-500 py-1">{car.category}</p>
          </span>
          <button className='text-[30px] cursor-pointer active:scale-85 duration-475 text-red-500' onClick={() => removeFavorites(car.id)}><IoIosHeart/></button>
        </div>
         <img src={car.image} alt="Koenigsegg" className="w-full h-40 object-cover rounded py-2"/>
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

  )
}

export default Favorites