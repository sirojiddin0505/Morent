import React from 'react'

const Footer = () => {
  return (
    <section className='container mx-auto px-8'>
        <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-12'>
            <div>
                <h1 className='text-[#3563E9] font-[700] text-[32px] py-4'>MORENT</h1>
                <p className='py-1 text-[#13131399] max-w-[300px]'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div>
                <h2 className="font-[600] text-xl text-[#1A202C] py-4">About</h2>
                <a href="#"><p className='py-1 text-[#13131399]'>How it works</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Features</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Partnership</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Bussiness Relation</p></a>
            </div>
            <div>
                <h2 className="font-[600] text-xl text-[#1A202C] py-4">Community</h2>
                <a href="#"><p className='py-1 text-[#13131399]'>Events</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Blog</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Podcats</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Invite a friend</p></a>
            </div>
            <div>
                <h2 className="font-[600] text-xl text-[#1A202C] py-4">Socials</h2>
                <a href="#"><p className='py-1 text-[#13131399]'>Discord</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Instagram</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Telegram</p></a>
                <a href="#"><p className='py-1 text-[#13131399]'>Facebook</p></a>
            </div>
        </div>
        <div className='max-w-[1400px] mx-auto pt-6 text-[#0e0e0e29] h-1'><hr /></div>
        <div className='flex flex-col justify-between sm:flex-row  gap-4 py-8 px-12'>
            <p>©2025 MORENT. All rights reserved</p>
            <span className='flex gap-4'>
                <p>Privacy & Policy</p>
                <p>Terms & Condition</p>
            </span>
        </div>
    </section>
  )
}

export default Footer