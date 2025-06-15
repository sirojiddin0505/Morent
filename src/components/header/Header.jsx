import React, { useState } from 'react'
import { FaHeart, FaSearch } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings, IoMdMenu } from "react-icons/io";
import person_img from "../../assets/person_img.jpg"
import { NavLink } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { usefavoriteStore } from '../../favourites';



const Header = () => {
  // const clearSearch = 
  const {handleSearch} = usefavoriteStore()
  const [openModal, setOpenModal] = useState(false)

  return (
    <section>
      <div className="container mx-auto flex justify-between items-center py-2 px-6 gap-4 bg-white/100">
        <div className='flex gap-4 lg:gap-20 items-center'>
          <h1 className='text-blue-700 text-[24px] md:text-[32px] font-[700]'>MORENT</h1>
          <div className='hidden md:w-[350px] lg:w-[410px] sm:flex items-center py-1.5 border-gray-500 px-4 gap-2 border rounded-full'><FaSearch className='text-gray-500 text-[20px]'/><input type="text" className='w-full text-gray-800 outline-none' placeholder='Search' onChange={(e)=> handleSearch(e?.target.value)}/></div>
        </div>
        <div className='flex items-center gap-2 md:gap-4'>
          <NavLink to={'/favorites'}><FaHeart className='text-[26px] text-[red] cursor-pointer active:scale-90 duration-100'/></NavLink>
          <NavLink to={'/notifications'}><IoIosNotifications className='text-[32px] text-gray-600 cursor-pointer active:scale-90 duration-100 hidden sm:flex'/></NavLink>
          <NavLink to={'/settings'}><IoIosSettings className='text-[32px] text-gray-600 cursor-pointer active:scale-90 duration-100 hidden sm:flex'/></NavLink>
          <NavLink to={'/user'}><img src={person_img} className='rounded-full w-[50px] h-[50px] cursor-pointer hidden sm:flex' alt="user_img" /></NavLink>
          <button className='font-bold text-[35px] text-gray-600 cursor-pointer sm:hidden' onClick={()=>setOpenModal(true)}><IoMdMenu/></button>
        </div>
      </div>

    <div className="flex items-center justify-center bg-gray-200 relative">
      {/* Overlay */}
      {openModal && (
        <div className="fixed inset-0 bg-opacity-40 z-40" onClick={() => setOpenModal(false)}></div>
      )}
      {/* O'ng tomondan chiqadigan modal */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-200 shadow-lg z-50 transform transition-transform duration-350 ${openModal ? "translate-x-0" : "translate-x-full"}`}>
        {/* Kontent */}
        {openModal && (
        <div className='max-w-[300px] h-[350px] py-4 pl-4 flex flex-col space-y-3'>
          <div className='flex items-center justify-between gap-2'>
            <div className='w-[230px] flex items-center py-1.5 border-gray-500 px-4 gap-2 border rounded-full'><FaSearch className='text-gray-500 text-[20px]'/><input type="text" className='w-full text-gray-800 outline-none' placeholder='Search' onChange={(e)=>handleSearch(e.target.value)}/></div>
            <div onClick={()=> setOpenModal(false)} className="text-gray-600 font-bold hover:text-black text-4xl"><IoClose/></div>
          </div>
          <NavLink to={'/user'}>
          <div className='flex items-center gap-4'>
            <img src={person_img} className='rounded-full w-[40px] h-[40px] cursor-pointer' alt="user_img" />
            <h3 className='text-gray-700 font-semibold text-xl'>User Profil</h3>
          </div>
          </NavLink>
          <NavLink to={'/notifications'}>
          <div className='flex items-center gap-4'>
            <IoIosNotifications className='text-[40px] text-gray-600 cursor-pointer active:scale-90 duration-100'/>
            <h3 className='text-gray-700 font-semibold text-xl'>Notification</h3>
          </div>
          </NavLink>
          <NavLink to={'/settings'}>
          <div className='flex items-center gap-4'>
            <IoIosSettings className='text-[40px] text-gray-600 cursor-pointer active:scale-90 duration-100'/>
            <h3 className='text-gray-700 font-semibold text-xl'>Settings</h3>
          </div>
          </NavLink>
        </div>
      )}
      </div>
    </div>
    </section>
  )
}

export default Header