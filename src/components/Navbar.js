import React from "react";
import Input from "./Input";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center pt-5">
        
     <div className="ml-9 cursor-pointer">
        <ul className="flex gap-5 text-[#7c6037] text-lg font-bold">
            <li className="hover:underline hover:ease-in hover:duration-300">Home</li>
            <li className="hover:underline" >New</li>
            <li className="hover:underline">Blog</li>
            <li className="hover:underline">Sale</li>
            <li className="hover:underline">Features</li>
        </ul>
     </div>
         
         <div className="text-center">
            <Link href="/" className="text-[#ed9e2d] font-extrabold text-2xl">BWE</Link>
         </div>



        <div className=" float-right mr-9">
            <Input/>
        </div>
    </div>
  );
}

export default Navbar;
