import React from 'react'
import { usefavoriteStore } from '../favourites'
import { IoIosHeart } from "react-icons/io";

const Favorites = () => {
  const {favorite, removeFavorites} = usefavoriteStore()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
   {favorite && favorite.map(car=>(
    <div className="bg-white border rounded-lg shadow p-4">
      <button className='text-red-500' onClick={()=> removeFavorites(id)}><IoIosHeart/></button>
    <img
      src={car.image}
      alt="img"
      className="w-full h-40 object-cover rounded"
    />
    <h2 className="text-lg font-bold mt-2">{car.name}</h2>
    <p className="text-sm text-gray-500">{car.category}</p>
    <div className="flex justify-between text-sm text-gray-600 mt-2">
      <span>{car.fuel}</span>
      <span>{car.transmission}</span>
      <span>{car.people}</span>
    </div>
    <div className="flex justify-between items-center mt-4">
      <p className="text-blue-600 font-semibold">{car.price}</p>
      <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700">
        Rent Now
      </button>
    </div>
  </div>
  ))}
  </div>
  )
}

export default Favorites