import React from 'react'

function Footer() {
  return (
    <div className='w-100% h-screen bg-black px-7 py-16 flex flex-col items-start gap-4 text-[#E0CCBB]'>
        <div className='flex items-center gap-2 mb-7'>
            <h1 className='w-40% text-6xl '>Our Story</h1>
            <video src=""></video>
        </div>
        <p className='text-lg w-full mb-4'> The story behind Exo Ape is one of exploration,creativity and curiosity.</p>
        <h5 className='border-b-[1px] border-zinc-700 font-semibold'>Our Story</h5>
        <div className='w-full h-[1px] rounded-md bg-[#e0ccbb] mt-6'></div>

        <div className='flex items-center gap-28 mt-6'>
            <div className='flex flex-col items-start gap-2'>
                <p>Work</p>
                <p>Studio</p>
                <p>News</p>
                <p>Contact</p>
            </div>
            <div className='flex flex-col items-start gap-2'>
                <p>Behance</p>
                <p>Dribble</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>

    </div>
  )
}

export default Footer