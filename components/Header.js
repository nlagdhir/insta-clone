import Image from "next/image";
import React from "react";

function Header() {
  return (
    // Left

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
      Right Side
    </div>

    // Middle

    // Right
  );
}

export default Header;
