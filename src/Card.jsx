import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { usefavoriteStore } from './favourites';


const Card = () => {
  const carData = [
    {
      id: 1,
      name: "Koenigsegg",
      category: "Sport",
      image:
        "https://koenigsegg-cdn-g7eehhd6f0ewcaff.z02.azurefd.net/drupal/styles/514x550/azure/2023-01/Koenigsegg%20CC850%20-%201.jpg?h=41c0849e&itok=nWOy_eeq",
      fuel: "90L",
      transmission: "Manual",
      people: "2 People",
      price: "$99.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
    {
      id: 2,
      name: "Nissan GT-R",
      category: "Sport",
      image:
        "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/b4caffb0c71aaa6d62e0a41e35b97981950c9969",
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
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbfwXfXoiGhigpU1fYHoanPBwqAddzLpLFg&s",
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
      image:
        "https://cdn.dealeraccelerate.com/bagauction/15/2707/118616/1920x1440/2021-nissan-gt-r-nismo",
      fuel: "80L",
      transmission: "Manual",
      people: "2 People",
      price: "$100.00/day",
      isLiked: false,
      onRent: "Rent Now",
    },
  ];

  const {addFavorites} = usefavoriteStore()
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {carData && carData.map(car=>(
    <div className="bg-white border rounded-lg shadow p-4">
      <button onClick={()=> addFavorites(car)}><FaRegHeart/></button>
    <img
      src={car.image}
      alt="Koenigsegg"
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

export default Card