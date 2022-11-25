import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useSession, signIn, signOut } from 'next-auth/react';

function Header() {
  const {data : session} = useSession();
  console.log(session);
  return (
    <>
      {/* // Left */}
      <div className="shadow-sm border-b sticky top-0 z-30 bg-white">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
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
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-50 text-sm pl-10 border-gray-500 focus:ring-black focus:border-black rounded-md"
            />
          </div>

          {/* Right Side */}

          {session ? 
            <div className="flex space-x-4 items-center">
            <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />

            <img
              onClick={signOut}
              src={session.user.image}
              alt="user-image"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
          : 
          <div onClick={signIn} className="cursor-pointer">Sign In</div>
          }
          
        </div>
      </div>
    </>
  );
}

export default Header;
