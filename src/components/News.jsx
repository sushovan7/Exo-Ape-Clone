import React from 'react'

function News() {
  return (
    <div className='w-full h-[55vh]  pt-8 flex flex-col items-center gap-5'>
        <div className='flex items-center gap-2 justify-center'>
        <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3 className="capitalize">In the media</h3>
        </div>
        <h1 className='text-6xl text-center'>Spread <br /> the News </h1>
        <p className='text-lg w-[65%] text-center leading-5'>Find out more about our work on these leading design and technology platforms</p>
        <h5 className='border-b-[1px] border-zinc-700'>Browse all news</h5>
    </div>
  )
}

export default News