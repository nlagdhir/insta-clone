import React from 'react'

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
        <img src="https://avatars.githubusercontent.com/u/17096384?v=4" className='h-16 rounded-full border p-[2px]' alt='user-image' />
        <div className='flex-1 ml-4'>
            <h2 className='font-bold'>nileshlagdhir</h2>
            <h3 className='text-gray-400 text-sm'>Welcome to instagram!</h3>
        </div>
        <button className='font-semibold text-blue-400 text-sm'>Sign out</button>
    </div>
  )
}

export default MiniProfile