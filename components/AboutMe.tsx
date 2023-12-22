import React from 'react'
import Image from 'next/image'

export default function AboutMe() {
  return (
    <div className="bg-pink-500 border-2 h-fit rounded-2xl px-2 mb-4">
      <h1 className="text-center p-1 text-2xl text-white font-semibold textShadow">
        About Me
      </h1>
      <div>
        <p className='text-white textShadow text-lg'>
        Hi I&apos;m Miley I am a ninja apprentice! Former Japanese idol and voice
        actress. I&apos;ve been working in the entertainment industry for over 10
        years, but my Work suddenly decreased due to corona. So just two years
        ago, I started working in Asakusa. I heard a story from a local person
        while getting to know various people in the area. Asakusa is a popular
        tourist destination, but the guides are aging and there are no young
        guides. So I decided to become a guide. 
        <br />
        <br />
        I have been doing stage shows
        for a long time, so I would like to offer a new type of tour that
        combines the skill of a guide with the skill of entertainment. My dream
        is to make guides a popular profession and increase the number of young
        guides. I hope it can help realize sustainable tourism!
      </p>
      <Image  src="/idol-concert.webp" width={100} height={72} alt="miley image" className="" />
      </div>
      
    </div>
  )
}
