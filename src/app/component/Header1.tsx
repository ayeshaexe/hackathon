"use client";
import { useState } from 'react';
import { IoCartOutline, IoSearchOutline} from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="logo flex-shrink-0 text-xl font-bold">
            Bandage
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="">Home</Link>
            <Link href="/product" className="">Product</Link>
            <Link href="/pricing" className="">Pricing</Link>
            <Link href="/contact" className="">Contact</Link>
          </div>

          {/* Icons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <IoSearchOutline className="w-6 h-6 cursor-pointer" />
            <IoCartOutline className="w-6 h-6 cursor-pointer" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
