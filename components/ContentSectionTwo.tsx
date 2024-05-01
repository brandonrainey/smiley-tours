'use client'

import { useAreaStore } from '@/store/areas'
import { useInView } from 'react-intersection-observer'

export default function ContentSectionTwo() {
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  })

  const { area, prevArea } = useAreaStore()

  return (
    <article
      className="flex flex-col items-center custom:flex-row custom:py-4 py-0 custom:w-[1200px] custom:h-[640px] pt-10 bg-[#f086bd50] p-2 custom:p-4 custom:rounded-xl contentBackgroundBlur"
      data-testid="content-section-two"
    >
      {area === 'asakusa' ? (
        <img
          ref={ref3}
          src="/karaoke-crop.jpg"
          width={380}
          height={500}
          key={'karaoke1'}
          alt="karaoke image"
          className={`rounded mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 max-h-[500px] ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
        />
      ) : (
        <img
          ref={ref3}
          src="/shrine-small2.webp"
          width={400}
          height={560}
          key={'shrine1'}
          alt="shrine image"
          className={`rounded mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 max-h-[560px] ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
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
