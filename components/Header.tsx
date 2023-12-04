import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full flex justify-center ">
      <Image
        src="/smiley-banner-transparent.png"
        width={800}
        height={200}
        alt="Banner image"
      />
    </header>
  )
}
