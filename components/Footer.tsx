'use client'

import { useState } from 'react'
import YoutubeIcon from './icons/YoutubeIcon'
import InstagramIcon from './icons/InstagramIcon'
import TwitterIcon from './icons/TwitterIcon'
import { useAreaStore } from '@/store/areas'

export default function Footer() {
  const { socialsRef } = useAreaStore()

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
      className={` min-h-[250px] w-full flex flex-col justify-center items-center relative gap-2`}
      ref={socialsRef}
    >
      <div className="flex items-center gap-2 z-10 font-bold font-hammersmithone  ">
        <img
          src="/smileytime-sharp.webp"
          width={250}
          height={72}
          alt="miley image"
          className="custom:w-[300px]"
        />
      </div>

      <div className="flex sm:gap-24 gap-8 z-10">
        <a
          href="https://www.youtube.com/@smileytime"
          aria-label="youtube link"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-transparent  rounded-full shadow-xl border-2 border-pink-400"
        >
          <YoutubeIcon />
        </a>
        <a
          href="https://www.instagram.com/mairie0828/"
          aria-label="instagram link"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-transparent  rounded-full shadow-xl border-2 border-pink-400"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://twitter.com/mairie0828"
          aria-label="twitter link"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-transparent rounded-full shadow-xl border-2 border-pink-400"
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
