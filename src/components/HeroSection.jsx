import React from "react";

function HeroSection() {
  return (
    <div className="hero-section flex justify-between items-center px-40">
      <div className="text-area">
        <h1
          className="text-[108px] font-extrabold leading-[102px] tracking-[-2.4px]
        "
        >
          YOUR FEET <br /> DESERVE <br />
          THE BEST
        </h1>
        <h6 className="text-base font-semibold py-3">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE
          HERE TO HELP YOU WITH OUR <br /> SHOES.
        </h6>
        <div className="btn flex gap-4 py-3">
          <button className="bg-red-700 text-white py-1 px-2 rounded-md">
            Shop Now
          </button>
          <button className="bg-white text-black border-2 border-black  py-1 px-2 rounded-md">
            Category
          </button>
        </div>
        <div>
          <p>Also available on</p>
          <div className="flex gap-4 py-3">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-iamge-area">
        <img
          className="hover:cursor-pointer"
          src="/images/hero-image.png"
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default HeroSection;
