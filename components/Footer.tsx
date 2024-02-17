'use client'

import { useState } from 'react'
import Image from 'next/image'
import YoutubeIcon from './icons/YoutubeIcon'
import InstagramIcon from './icons/InstagramIcon'
import TwitterIcon from './icons/TwitterIcon'

export default function Footer() {
  const [copySuccess, setCopySuccess] = useState('')

  const copyToClipboard = async (text: string) => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(text)
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess(''), 1500)
      } catch (err) {
        setCopySuccess('Failed to copy text')
        setTimeout(() => setCopySuccess(''), 1500)
      }
    }
  }

  return (
    <footer
      className={` min-h-[250px] w-full flex flex-col justify-around items-center  relative `}
    >
      <div className="flex items-center gap-2 z-10 font-bold font-carter  ">
        <h1
          className={`text-5xl text-white custom:text-shadow-3 text-shadow-6`}
        >
          Follow Me!
        </h1>
        <Image
          src="/miley.webp"
          width={100}
          height={72}
          loading="lazy"
          alt="miley image"
          className=""
        />
      </div>

      <div className="flex sm:gap-24 gap-8 z-10">
        <a
          href="https://www.youtube.com/@smileytime"
          aria-label="youtube link"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-pink-100 rounded-xl socialsShadow  border-pink-300/50"
        >
          <YoutubeIcon />
        </a>

        <a
          href="https://www.instagram.com/mairie0828/"
          aria-label="instagram link"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-pink-100  rounded-xl socialsShadow border-pink-300/50"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/mairie0828"
          aria-label="twitter link"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-pink-100 rounded-xl socialsShadow border-pink-300/50"
        >
          <TwitterIcon />
        </a>
      </div>
      <p
        className="text-white text-xl tracking-wide text-shadow-1 underline cursor-copy py-2 z-30"
        onClick={() => copyToClipboard('engelmaikichi@gmail.com')}
      >
        engelmaikichi@gmail.com
      </p>
      {copySuccess && <div>{copySuccess}</div>}
    </footer>
  )
}
