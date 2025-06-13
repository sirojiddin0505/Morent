import React from 'react'
import { FaHeart, FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import person_img from "../../assets/person_img.jpg"
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between items-center px-8 gap-4 bg-white/100">
        <div className='flex gap-20 items-center'>
          <h1 className='text-blue-700 text-[32px] font-[700]'>MORENT</h1>
          <div className='w-[350px] flex items-center py-1.5 border-gray-500 px-4 gap-2 border rounded-full'><FaSearch className='text-gray-500 text-[20px]'/><input type="text" className='w-full text-gray-800 outline-none' placeholder='Search'/></div>
        </div>
        <div className='flex  items-center gap-4'>
          <NavLink to={'/favorites'}><FaHeart className='text-[26px] text-[red] cursor-pointer active:scale-90 duration-100'/></NavLink>
          <NavLink to={'/notifications'}><IoIosNotifications className='text-[32px] text-gray-600 cursor-pointer active:scale-90 duration-100'/></NavLink>
          <NavLink to={'/settings'}><IoIosSettings className='text-[32px] text-gray-600 cursor-pointer active:scale-90 duration-100'/></NavLink>
          <img src={person_img} className='rounded-full w-[50px] h-[50px] cursor-pointer' alt="user_img" />
        </div>
      </div>
    </section>
  )
}

export default Header