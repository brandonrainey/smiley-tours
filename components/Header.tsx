import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full flex justify-center border-b-2 border-black">
      <Image
        src="/smiley-banner-transparent.png"
        width={800}
        height={200}
        alt="Banner image"
        priority={true}
      />
    </header>
  )
}
