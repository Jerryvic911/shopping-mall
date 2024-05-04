import Navbar from "@/components/Navbar";
import Image from "next/image";
import Man from "@/Images/Man.png";
import Shoe from "@/Images/Shoe.png";
import Bag from "@/Images/Bag.jpg"
import Watch from "@/Images/Watch.jpg"
import React from "react";

function Landingpage() {
  return (
    <div className="bg-[#fef7f1]">
      <Navbar />

      <div className=" mt-28 ml-10">
      <Image
            src={Man}
            alt="//"
            width={500}
            height={500}
            className=" ml-[35rem] mb-[30rem] float-right"
          />
        <div className="">
          <p className=" font-semibold text-5xl">
            Better
            <br /> Way To Start
            <br />
            The Shopping
          </p>
          
        </div>

        <div className="">
          <div className="">
          
          <p className="pt-3 text-md text-[#eae4dd]">
            Make the new experience of shopping,get the
            <br />
            high qulity products from your favorite brands.
          </p>

          <button className=" bg-[#ed9e2d] rounded-md px-5 py-2 mt-7 text-white">
            Shop now
          </button>
         
          </div>
          

         
        </div>
      </div>

      <div className="mt-[20rem] ml-10">
        <h2 className=" text-4xl font-semibold">
          <span className="underline">Our</span> Collection
        </h2>

<div className="flex gap-5 rounded-md mt-10">
        <div className="rounded-md">
          <div className="bg-[#fbebd4] w-[22rem] h-[25rem] rounded-md">
            <Image
            src={Bag}
            width={300}
            height={300}
            alt="/"
            className="ml-5 pt-1"
            />
          
          <div className="mt-[1rem]  bg-blue-500 w-[10rem] h-[5rem] ">
            <h1>shop now</h1>
          </div>
          </div>
        </div>

        

        <div className="">
          <div className="bg-[#fbebd4] w-[22rem] h-[20rem] rounded-md">  <Image
            src={Shoe}
            width={150}
            height={100}
            alt="/"
            className="ml-5 pt-1"
            />
          
          <div className="mt-[2.5rem] pt-5 bg-white w-[10rem] h-[5rem]">
            <h1>shop now</h1>
          </div>
          </div>
        </div>
        <div className="">
          <div className="bg-[#fbebd4] w-[22rem] h-[20rem] rounded-md">  <Image
            src={Watch}
            width={300}
            height={100}
            alt="/"
            className="ml-5 pt-1 object-fill"
            />
          
          <div className="mt-[2.5rem] pt-5 bg-white w-[10rem] h-[5rem]">
            <h1>shop now</h1>
          </div>
          </div>
        </div>

       
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
