import React from 'react'

function Footer() {
  return (
    <div className='w-100% h-screen overflow-hidden bg-black px-7 py-16 sm:p-20 flex flex-col items-start justify-center gap-4 text-[#E0CCBB]'>
        <div className='flex items-center gap-4 overflow-hidden rounded-md mb-7'>
            <h1 className='w-40% sm:text-9xl text-6xl '>Our Story</h1>
            <video autoPlay loop muted className='w-50% sm:w-[50%]' src="https://cdn.dribbble.com/users/4210486/screenshots/18120551/media/9adb3522e6ae76a0126db802da4be6d5.mp4"></video>
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