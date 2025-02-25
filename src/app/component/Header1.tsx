"use client";
import { useState } from 'react';
import { IoCartOutline, IoSearchOutline} from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-[1440px] mx-[15px] sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <div className='flex gap-[120px]'>
          <div className="logo flex-shrink-0 text-xl font-bold">
            Bandage
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 justify-center">
            <Link href="/" className="font-bold text-[#737373] text-[14px]">Home</Link>
            <Link href="/" className="text-[#252B42] text-[14px] font-medium">Shop</Link>
            <Image src="/drop.png" alt='pic' height="20" width="10" className='text-[#252B42] mr-[10px]'></Image>
            <Link href="/about" className="font-bold text-[#737373] text-[14px]">About</Link>
            <Link href="/team" className="font-bold text-[#737373] text-[14px]">Blog</Link>
            <Link href="/contact" className="font-bold text-[#737373] text-[14px]">Contact</Link>

          </div>
          </div>


          {/* Icons for Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-[#23A6F0]">
          <MdOutlinePersonOutline className="w-4 h-4 cursor-pointer"/>
          <Link href="#" className='text-[14px] font-bold '>Login / Register</Link>
            <IoSearchOutline className="w-4 h-4 cursor-pointer" />
            <IoCartOutline className="w-4 h-4 cursor-pointer" />
            <p>1</p>
            <CiHeart className="w-4 h-4 cursor-pointer"/>
            <p>1</p>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 links text-[30px] font-normal leading-[50px] flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center text-center'>
            <Link href="/" className="">Home</Link>
            <Link href="/product" className="block ">Product</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/contact" className="block">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
