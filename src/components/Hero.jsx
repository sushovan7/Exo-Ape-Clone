import React from "react";

function Hero() {
  return (
    <div className="w-screen relative h-screen bg-black  text-white ">
        <div className="w-48  sm:w-[30vw] overflow-hidden aspect-video  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <video className="w-full scale-[1.2] h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" autoPlay loop muted src="https://obys.agency/wp-content/uploads/2022/11/Obys-Showreel-2022.mp4"></video>
        </div>
      <div className="overlay sm:px-32 absolute w-full h-full flex flex-col py-20 justify-between ">
        <div className="flex w-full  items-center justify-center gap-3">
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
          <h3 className="capitalize text-sm">work in motion</h3>
        </div>
        <h1 className="text-4xl sm:text-9xl flex items-center sm:justify-between w-full justify-center gap-32">
          <div>Play</div>
          <div>Reel</div>
        </h1>
        <p className="px-10 sm:text-sm text-xs text-center">
          Our work is best experience in motion . Don't <br /> forget to put on your
          headphone
        </p>
      </div>
    </div>
  );
}

export default Hero;
