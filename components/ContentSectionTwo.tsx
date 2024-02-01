import React from 'react'
import Image from 'next/image'
import KaraokeImage from '../public/karaoke-crop.jpg'
import ShrineImage from '../public/shrine-small.webp'

interface ContentSectionTwoProps {
  area: string
  prevArea: string
  ref3: any
  inView3: boolean
}

export default function ContentSectionTwo({
  area,
  prevArea,
  ref3,
  inView3,
}: ContentSectionTwoProps) {
  return (
    <article className="flex flex-col custom:flex-row custom:py-4 py-0 custom:max-w-[1000px] pt-10 bg-[#f382bc] p-2 rounded-xl contentSectionShadow">
      {area === 'asakusa' ? (
        <Image
          ref={ref3}
          src={KaraokeImage}
          width={312}
          height={383}
          key={'karaoke1'}
          alt="karaoke image"
          placeholder="blur"
          className={`rounded  mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0  ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
        />
      ) : (
        <Image
          ref={ref3}
          src={ShrineImage}
          width={312}
          height={408}
          key={'shrine1'}
          alt="shrine image"
          placeholder="blur"
          className={`rounded mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0  ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
        />
      )}

      <div className="text-white custom:text-2xl text-xl textShadow font-medium p-2 my-auto custom:px-8">
        {area === 'asakusa' ? (
          <p
            className={`${
              area !== prevArea
                ? ''
                : 'animate-fade animate-ease-in-out animate-delay-150'
            }`}
            key={'karaoke2'}
          >
            Dive into the ultimate karaoke experience in the birthplace of this
            musical phenomenon, Japan!
            <br />
            <br />
            Belt out your favorite tunes in high-quality karaoke rooms, and as
            the notes soar, relish the added joy of a complimentary drink
            bar—because in Japan, every karaoke session is a symphony of fun
            with a refreshing twist! 🎤🎶
          </p>
        ) : (
          <p
            className={`${
              area !== prevArea
                ? ''
                : 'animate-fade animate-ease-in-out animate-delay-150'
            }`}
            key={'shrine2'}
          >
            Step into the enchanting Ueno Toushogu Shrine and immerse yourself
            in the grandeur of the Shogun&apos;s sanctuary. Marvel at the
            intricate gold fortune papers that add a touch of magic to your
            spiritual journey!
            <br />
            <br />
            Experience the allure of Kiyomizu Kannondo, a stage hall inspired by
            the iconic Kiyomizu-dera Temple in Kyoto. Built in 1631, let the
            echoes of history accompany you as you explore this architectural
            masterpiece. 🏯✨
          </p>
        )}
      </div>
    </article>
  )
}
