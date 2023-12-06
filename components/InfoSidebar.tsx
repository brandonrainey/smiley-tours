import React from 'react'
import Image from 'next/image'

export default function InfoSidebar() {
  return (
    <div className='bg-pink-200 h-auto w-80 p-4 font-Varela relative'>
      <Image src='/ganko.png' width={100} height={72} alt='bulma image' className='absolute -top-16 left-44' />
      <h1 className='text-center text-4xl font-bold mb-6 mt-4 text-white' style={{ textShadow: '4px 2px 8px rgba(243, 15, 133, 0.8)' }}>Events</h1>
    </div>
  )
}
