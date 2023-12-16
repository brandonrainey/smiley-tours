import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full flex justify-center border-b-2 border-pink-600 relative">
      <div className="w-full h-[200px] absolute bg-pink-100 filter blur-2xl opacity-50"></div>
      <Image
        src="/smiley-banner-transparent.png"
        width={800}
        height={200}
        alt="Banner image"
        priority={true}
        className="z-30"
      />
    </header>
  )
}
