import React, { useState } from 'react'
import Image from 'next/image'

interface FooterProps {
  windowWidth: number
}

export default function Footer({ windowWidth }: FooterProps) {
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess('Copied!')
      setTimeout(() => setCopySuccess(''), 1500)
    } catch (err) {
      setCopySuccess('Failed to copy text')
      setTimeout(() => setCopySuccess(''), 1500)
    }
  }

  return (
    <footer
      className={`bg-pink-200 min-h-[250px] w-full flex flex-col justify-around items-center  relative`}
    >
      <div className="sm:w-full h-[250px]">
        <Image
          src="/background-banner.webp"
          fill
          alt="bulma image"
          className="absolute z-0 border-t-4 border-pink-500/50 object-cover opacity-70"
        />
      </div>

      <div className="flex items-center gap-2 z-10">
        <h1
          className={`text-5xl text-white  ${
            windowWidth > 1100 ? 'textShadow3' : 'followShadow'
          }`}
        >
          Follow Me!
        </h1>
        <Image
          src="/miley.webp"
          width={100}
          height={72}
          alt="miley image"
          className=""
        />
      </div>

      <div className="flex sm:gap-24 gap-8 z-10">
        <a
          href="https://www.youtube.com/@smileytime"
          aria-label='youtube link'
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-pink-200 rounded-xl newShadow "
        >
          <i className="fab fa-youtube sm:fa-5x fa-3x text-red-500 hover:scale-110 duration-150 "></i>
        </a>

        <a
          href="https://www.instagram.com/mairie0828/"
          aria-label='instagram link'
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-pink-200 rounded-xl newShadow"
        >
          <i className="fab fa-instagram sm:fa-5x fa-3x text-pink-500 hover:scale-110 duration-150"></i>
        </a>
        <a
          href="https://twitter.com/mairie0828"
          aria-label='twitter link'
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-pink-200 rounded-xl newShadow"
        >
          <i className="fab fa-twitter sm:fa-5x fa-3x text-blue-500 hover:scale-110 duration-150"></i>
        </a>
      </div>
      <p
        className="text-white text-xl tracking-wide textShadow underline cursor-copy py-2 z-30"
        onClick={() => copyToClipboard('engelmaikichi@gmail.com')}
      >
        engelmaikichi@gmail.com
      </p>
      {copySuccess && <div>{copySuccess}</div>}
    </footer>
  )
}
