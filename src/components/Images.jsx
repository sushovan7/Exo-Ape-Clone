import React from "react";

function Images() {
  return (
    <div className="w-full overflow-hidden h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center">
      <div className="w-[40%] sm:h-[70%] h-1/2 sm:w-[30%] relative">
        <div className="absolute sm:w-[20vh] sm:h-[25vh] w-[8vh] h-[12vh] -right-[25%] top-6">
            <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(jpeg):quality(70)" alt="" />
        </div>
        <div className="absolute sm:h-[25vh] sm:aspect-video sm:scale-[1.4] sm:w-[25vh] -left-[53%] sm:top-[30%] top-[35%] aspect-video w-[15vh] h-[9vh]">
            <video className="w-full h-full scale-[1.2]" autoPlay loop muted src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
        </div>
        <div className="absolute -left-[75%] -bottom-[15%] sm:w-[30vh] sm:h-[25vh] w-[18vh] sm:-bottom-[30%] sm:-left-[50%] h-[9vh]">
        <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(jpeg):quality(70)" alt="" />
        </div>
        <div className="absolute aspect-[1.5/1] w-[20vh] sm:w-[30vh] sm:h-[32vh] h-[15vh] -right-[75%] -bottom-[29%] sm:-right-[50%]">
            <video className="" autoPlay loop muted src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(jpeg):quality(70)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
