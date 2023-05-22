'use client';
import Image from "next/legacy/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-4">
        <div className="mt-2 ml-4 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={100}
            height={36}
            objectFit="contain"
            className="cursor-pointer"
            alt=""
          />
        </div>
        {/* Custom Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            placeholder="Search Amazon"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* Right Side */}
        <div className="flex text-white items-center text-xs space-x-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Sanu Islam</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
          <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm p-2 pl-6">
        <p className="link flex items-center">
            <Bars3Icon className="h-6 mr-1" />
            All
        </p>
        <p className="link">Today&apos;s Deals</p>
        <p className="link">Customer Service</p>
        <p className="link">Registry</p>
        <p className="link">Gift Cards</p>
        <p className="link">Sell</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
