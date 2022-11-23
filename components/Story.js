import React from 'react'

function Story({img, username, images, placeholder}) {
  return (
    <div>
        <img src={img} alt={username} className="h-12 rounded-full p-[1.5px] border-2 border-red-500 hover:scale-110 transition-transform duration-200 ease-out" />
        <p className='text-xs w-14 truncate'>{username}</p>
    </div>
  )
}

export default Story