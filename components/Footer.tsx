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
    <div
      className={`bg-pink-200 min-h-[250px] w-full flex flex-col justify-around items-center ${
        windowWidth < 1100 ? 'short-border' : ''
      } `}
    >
      <h1 className="text-5xl text-white textShadow pt-4">FOLLOW ME!</h1>
      <div className="flex sm:gap-12 gap-8">
        <a
          href="https://www.youtube.com/@smileytime"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-[#cb67dc23] rounded-xl"
        >
          <i className="fab fa-youtube sm:fa-5x fa-3x text-red-500"></i>
        </a>

        <a
          href="https://www.instagram.com/mairie0828/"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-[#cb67dc23] rounded-xl"
        >
          <i className="fab fa-instagram sm:fa-5x fa-3x text-pink-500"></i>
        </a>
        <a
          href="https://twitter.com/mairie0828"
          className="sm:w-[100px] w-[80px] sm:h-[100px] h-[80px] flex justify-center items-center bg-[#cb67dc23] rounded-xl"
        >
          <i className="fab fa-twitter sm:fa-5x fa-3x text-blue-500 "></i>
        </a>
      </div>
      <p
        className="text-white text-xl tracking-wide textShadow underline"
        onClick={() => copyToClipboard('engelmaikichi@gmail.com')}
      >
        engelmaikichi@gmail.com
      </p>
      {copySuccess && <div>{copySuccess}</div>}
    </div>
  )
}
