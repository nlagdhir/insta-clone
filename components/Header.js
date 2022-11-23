import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <>
      {/* // Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt="logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            alt="logo"
            layout="fill"
            className="object-contain"
          />
        </div>

        <div className="relative">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5" />
          </div>
          <input type="text" placeholder="Search"  className="bg-gray-50 text-sm pl-10 border-gray-500 focus:ring-black focus:border-black rounded-md" />
        </div>

        {/* Right Side */}
      </div>
    </>
  );
}

export default Header;
