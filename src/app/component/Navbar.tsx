"use client";
import { useState } from 'react';
import { IoCartOutline, IoSearchOutline} from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-[1440px] lg:mx-[55px] mx-[20px] sm:px-6 mt-[20px]">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <div className='flex gap-[120px]'>
          <div className="logo flex-shrink-0 text-xl font-bold">
            Bandage
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 justify-center">
            <Link href="/" className="font-bold text-[#737373] text-[14px]">Home</Link>
            <Link href="/product" className="font-bold text-[#737373] text-[14px]">Product</Link>
            <Link href="/pricing" className="font-bold text-[#737373] text-[14px]">Pricing</Link>
            <Link href="/contact" className="font-bold text-[#737373] text-[14px]">Contact</Link>

          </div>
          </div>


          {/* Icons for Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-[#23A6F0]">
          <MdOutlinePersonOutline className="w-4 h-4 cursor-pointer"/>
          <Link href="#" className='text-[14px] font-bold '>Login</Link>
          <div className='lg:flex lg:justify-center lg:items-center'>
          <div className='h-[52px] w-[215px] bg-[#23A6F0] hover:bg-[#4b93bd] rounded-md cursor-pointer'>
            <button className='text-[14px] font-bold text-white pt-[15px] pl-[30px]'>Become a memeber</button>
          </div>
          <div className='relative right-[40px]'>
          <Image src="/for.png" alt='for' height="10" width="15" className=''/>
          </div>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
          <div className="px-4 flex space-x-4 icons">
            <IoSearchOutline className="w-6 h-6 cursor-pointer" />
            <IoCartOutline className='w-6 h-6' />
          </div>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <BiMenuAltRight className="w-6 h-6 icon1" />
              ) : (
                <BiMenuAltRight className="w-6 h-6 icon1" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 links text-[30px] font-normal leading-[50px] flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center text-center'>
            <Link href="/" className="">Home</Link>
            <Link href="/product" className="">Product</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/contact" className="block">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
