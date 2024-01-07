import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full flex justify-center border-b-2 border-pink-600 relative">
      <div className="w-full h-[200px] absolute bg-pink-200 filter blur-2xl opacity-70"></div>
      <img src="/smiley-banner-transparent.webp" alt="banner image" className='z-30 max-h-[200px] w-auto'/>
    </header>
  )
}
