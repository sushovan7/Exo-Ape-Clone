import React from "react";
import {motion} from 'framer-motion'
import { Expo } from "gsap";

function Landing() {
  return (
    <div className="w-full relative h-[110vh] sm:h-[250vh]">
      <div className="picture w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(jpeg):quality(70)"
        ></img>
      </div>
      <div className="absolute top-0 w-full  ">
        <div className="text max-w-screen-2xl mx-auto px-5 h-full text-white  py-5 sm:px-10 sm:ml-20">
          <div className="para mt-72 sm:mt-[25rem]">
            {[
              " Global digital design studio patnering",
              " with brands and businesses that create",
              "exceptional experiences where people",
              "live,work,and unwind.",
            ].map((item, i) => {
              return <p  className="font-md overflow-hidden origin-left sm:text-2xl "><motion.span initial={{
                opacity:0,
                rotate:100,
                y:100,
              }} animate={{opacity:1,rotate:0,y:0
              }} transition={{ease:Expo.easeInOut,duration:1,delay:i*.3}}>{item}</motion.span></p>;
            })}
          </div>
          <div className="headings mt-5 sm:mt-20">
            <h1 className="text-7xl sm:text-[17rem] tracking-tighter leading-none font-lighter">
              Digital
            </h1>
            <h1 className="text-7xl  sm:text-[17rem] sm:text-9xl tracking-tighter leading-none font-lighter">
              Design
            </h1>
            <h1 className="text-7xl sm:text-[17rem] sm:text-9xl tracking-tighter leading-none font-lighter">
              Experience
            </h1>
          </div>
          <div className="para-2 sm:w-1/3 mt-10">
            <p className=" text-lg sm:text-xl w-full">
              We help experience-driven cpmpanies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space.Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b-[.3px] border-zinc-100 sm:text-xl pb-1 sm:border-b-[1px] mt-5 inline-block"
              href="#"
            >
              Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
