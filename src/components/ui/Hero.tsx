"use client"
import React from "react";
import bgImage from "@/assets/Rectangle 4281.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
<section className="relative dark:bg-gray-800 dark:text-gray-100">
<Image
  src={bgImage}
  alt="Background Image"
  layout="fill"
  objectFit="full"
  
/>
<div className="absolute inset-0 bg-white opacity-80"></div>
  <div className="container mx-auto flex flex-col items-center relative px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
    <h1 className="text-5xl font-bold sm:text-xl">
      I Grow By Helping People In Need
    </h1>
    <div className="flex flex-wrap justify-center mt-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-white"
        />
        <button className="bg-red-500 text-white py-2 px-4 rounded-r-md">
          {/* Assuming you have a bag icon, you can use an SVG or an icon library */}
          🛍️ Search
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Hero;
