import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

export default function MainContent() {
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
    <main className="h-full w-full flex flex-col px-10  mb-4  rounded-b-xl bg-pink-400 border-x-2 border-pink-600 border-b-2 ">
      <h1 className="text-5xl font-Varela text-center p-4 font-semibold tracking-wider  z-20 textGradient ">
        Tokyo Tour Guide
      </h1>
      <h2 className="text-center mb-10 text-3xl font-semibold tracking-wider text-white textShadow">
        <i className="fas fa-heart fa-sm text-pink-300 pr-1"></i>
        Asakusa & Akihabara
        <i className="fas fa-heart fa-sm text-pink-300 pl-1"></i>
      </h2>

      <div className="flex flex-col gap-10 items-center">
        <div className="flex w-full max-w-[1000px] gap-6">
          <div className="flex w-full max-w-[1000px] ">
            <Image
              ref={ref}
              src="/akiba-2.webp"
              alt="akiba image"
              width={400}
              height={500}
              className={`rounded mr-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView
                  ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          </div>

          <p className="text-white text-2xl textShadow font-medium my-auto">
            ❤️ Let&apos;s stroll through the vibrant streets of Akihabara, and
            I&apos;ll share interesting insights with you along the way.
            <br />
            <br />
            Enjoy the lively atmosphere as I guide you through this tech and
            entertainment hub! 🚶‍♂️🏙️
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="py-4 flex flex-row short-border max-w-[1000px]">
            <p className="text-white text-2xl textShadow font-medium my-auto">
              ❤️ Discover the story behind Asakusa through two must-visit spots:
              Kaminarimon Gate and Senso-ji Temple.
              <br />
              <br />
              Dive into the charm of these historical places, and don&apos;t
              forget to grab some cool videos to remember your fun-filled tour!
              🌟 Asakusa is a city of comedians! Take photos at Comedian Street.
              <br />
              <br />
            </p>

            <Image
              ref={ref2}
              src="/asakusa.webp"
              alt="asakusa image"
              width={350}
              height={300}
              className={`rounded ml-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView2
                  ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          </div>
        </div>

        <div className="flex py-4 short-border max-w-[1000px]">
          <Image
            ref={ref3}
            src="/karaoke.webp"
            width={220}
            height={500}
            alt="karaoke image"
            className={`rounded mr-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
              inView3
                ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                : ''
            }`}
          />
          <p className="text-white text-2xl textShadow font-medium p-2 my-auto">
            ❤️ Japan is the birthplace of karaoke! Immerse yourself in
            high-quality karaoke, and to make it even better, enjoy a
            complimentary drink bar! 🍵🎤✨
          </p>
        </div>

        <div className="flex w-full gap-6 short-border py-4 max-w-[1000px]">
          <p className="text-white text-2xl textShadow font-medium my-auto">
            ❤️ Have a maid cafe experience! Lunch is omelet rice with a drawing
            by the maid. ➕ You can take a video of the maid&apos;s spell!
            <br />
            <br />
            ⭐️If you watch this video before joining, the tour will be even
            more fun! I&apos;ll take you this world↓
            <br />
            <a
              href="https://youtu.be/5EKahCouIAU?si=Ms6R6WHCRHZmi02l"
              className="underline bg-[#e3a0d3b6]"
            >
              https://youtu.be/5EKahCouIAU?si=Ms6R6WHCRHZmi02l
            </a>
          </p>

          <Image
            ref={ref4}
            src="/maid.webp"
            alt="maid image"
            width={300}
            height={500}
            className={`mr-auto rounded border-dashed border-4 border-pink-200 p-2 opacity-0 ${
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
