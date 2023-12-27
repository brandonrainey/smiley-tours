import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import AboutMe from './AboutMe'

interface MainContentProps {
  windowWidth: number
}

export default function MainContent({ windowWidth }: MainContentProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  })

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  })

  const [ref4, inView4] = useInView({
    triggerOnce: true,
  })

  return (
    <main className="custom:h-full h-auto py-12 w-full flex flex-col custom:px-10 px-4  mb-4  custom:rounded-b-xl bg-pink-400 custom:border-x-2 custom:border-pink-600 border-pink-500/50 custom:border-b-2 custom:border-t-0 border-y-4 custom:justify-normal  justify-center relative">
      <h1 className="text-5xl font-Varela text-center p-4 font-semibold tracking-wider  custom:z-20 textGradient ">
        Tokyo Tour Guide
      </h1>
      <h2
        className={`text-center mb-10 text-3xl font-semibold tracking-wider text-white ${
          windowWidth > 1100 ? 'textShadow3' : 'textShadow3Mobile'
        } `}
      >
        <i className="fas fa-heart fa-sm text-pink-300 custom:pr-1"></i>
        Asakusa
        <i className="fas fa-heart fa-sm text-pink-300 custom:pl-1"></i>
      </h2>

      <div className="flex flex-col gap-10 custom:items-center">
        <div className="flex custom:flex-row flex-col w-full custom:max-w-[1000px] gap-6 custom:pb-0 ">
          <div className="flex w-full max-w-[1000px] ">
            <Image
              ref={ref}
              src="/asakusa-2.webp"
              alt="asakusa image"
              width={350}
              height={500}
              className={`rounded custom:mr-auto custom:mx-0 mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView
                  ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          </div>

          <p className="text-white custom:text-2xl text-xl textShadow font-medium custom:my-auto ">
            ❤️ Embark on a delightful journey along the Sumida River and
            Komagata Street.
            <br />
            <br />
            Exploring the ancient roots of Asakusa dating back to the year 628,
            where history unfolds like a captivating tale! 🚢🌸
          </p>
        </div>

        <div className="flex flex-col custom:items-center">
          <div className="custom:py-4 py-0 flex custom:flex-row flex-col-reverse short-border custom:max-w-[1000px] pt-10">
            <p className="text-white custom:text-2xl text-xl textShadow font-medium my-auto custom:pt-0 pt-4 ">
              ❤️ Discover the story behind Asakusa through two must-visit spots:
              Kaminarimon Gate and Senso-ji Temple.
              <br />
              <br />
              Dive into the charm of these historical places and the Asakusa
              Yokocho, and take photogenic photos at a theme park based on the
              concept of Japanese festivals! 🎡🎢🎠
              {windowWidth > 1100 ? (
                <span>
                  <br />
                  <br />
                </span>
              ) : (
                ''
              )}
            </p>

            <Image
              ref={ref2}
              src="/asakusa.webp"
              alt="asakusa image"
              width={350}
              height={300}
              className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView2
                  ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          </div>
        </div>

        <div className="flex  custom:py-4 py-0 short-border custom:max-w-[1000px]  pt-10">
          <Image
            ref={ref3}
            src="/karaoke.webp"
            width={windowWidth > 1100 ? 220 : 200}
            height={500}
            alt="karaoke image"
            className={`rounded mr-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
              inView3
                ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                : ''
            }`}
          />
          <p className="text-white custom:text-2xl text-xl textShadow font-medium p-2 my-auto custom:px-8">
            ❤️ Japan is the birthplace of karaoke! Immerse yourself in
            high-quality karaoke, and to make it even better, enjoy a
            complimentary drink bar! 🍵🎤✨
          </p>
        </div>

        <div className="flex custom:flex-row flex-col-reverse w-full gap-6 short-border custom:py-4 custom:max-w-[1000px] pt-10">
          <p className="text-white custom:text-2xl text-xl textShadow font-medium custom:my-auto">
            ❤️ Monja is a very unique food born in Asakusa! It looks like vomit,
            but it tastes so delicious!
            <br />
            <br />
            ⭐️Guide will teach you how to make monja!
            <br />
          </p>

          <Image
            ref={ref4}
            src="/monja.webp"
            alt="monja image"
            width={300}
            height={500}
            className={`custom:mr-auto mx-auto rounded border-dashed border-4 border-pink-200 p-2 opacity-0 ${
              inView4
                ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                : ''
            }`}
          />
        </div>
      </div>
    </main>
  )
}
