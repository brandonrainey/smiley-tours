import React from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

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
    <main className="custom:h-fit h-auto pb-12 custom:pb-0  w-full flex flex-col custom:px-10 px-4  mb-4 bg-pink-400 custom:rounded-b-xl  custom:border-x-2 custom:border-pink-500 border-pink-500/50 custom:border-b-2 custom:border-t-0 border-y-4 custom:justify-normal  justify-center relative ">
      
      <img src='/hearts-shrink.webp' alt="background hearts" className='absolute object-cover w-full h-full opacity-40 left-0'/>
      
      
      <h2
        className={`text-center  text-3xl font-semibold tracking-wider text-white z-30 mt-2 ${
          windowWidth > 1100 ? 'textShadow3' : 'textShadow3Mobile'
        } `}
      >
        {/* <i className="fas fa-heart fa-sm text-pink-300 custom:pr-1"></i> */}
        ~Asakusa~
        {/* <i className="fas fa-heart fa-sm text-pink-300 custom:pl-1"></i> */}
      </h2>

      <h1 className="text-5xl font-Varela text-center p-4 font-semibold tracking-wider  custom:z-20 textGradient  mb-10">
        Tokyo Tour Guide
      </h1>

      {/* Asakusa History */}
      <div className="flex flex-col gap-10 custom:items-center relative">
        
      
        <div className="flex custom:flex-row flex-col w-full custom:max-w-[1000px] gap-6 custom:pb-0 ">
          <div className="flex w-full max-w-[1000px] items-center">
            <Image
              ref={ref}
              src="/asakusa-2.webp"
              alt="asakusa image"
              width={330}
              height={500}
              className={`rounded custom:mr-auto custom:mx-0 mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 custom:min-w-[330px] custom:max-h-[407px] ${
                inView
                  ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          </div>

          <p className="text-white  max-w-[600px] text-xl custom:text-2xl textShadow font-medium custom:my-auto z-30">
            Hi I&apos;m{' '}
            <span className="font-semibold textShadowNone textGradient ">
              Miley
            </span>
            , I am a ninja apprentice! Former Japanese idol and voice actress.
            I&apos;ve been working in the entertainment industry for over 10
            years, but my work suddenly decreased due to corona.
            <br />
            <br />
            So just two years ago, I started working in{' '}
            <span className="font-semibold textShadowNone textGradient">
              Asakusa
            </span>
            . I heard a story from a local person while getting to know various
            people in the area.{' '}
            <span className="font-semibold textShadowNone textGradient">
              Asakusa
            </span>{' '}
            is a popular tourist destination, but the guides are aging and there
            are no young guides. So I decided to become a guide.
            <br />
            <br />I have been doing stage shows for a long time, so I would like
            to offer a new type of tour that combines the skill of a guide with
            the skill of entertainment. My dream is to make guides a popular
            profession and increase the number of young guides. I hope it can
            help realize sustainable tourism!
          </p>
        </div>

        {/* Sensoji and Kaminarimon */}
        <div className="flex flex-col custom:items-center">
          <div className="custom:py-4 py-0 flex custom:flex-row flex-col-reverse short-border custom:max-w-[1000px] pt-10">
            <p className="text-white custom:text-2xl text-xl textShadow font-medium my-auto custom:pt-0 pt-4 ">
              Embark on a delightful journey along the Sumida River and Komagata
              Street. Exploring the ancient roots of Asakusa dating back to the
              year 628, where history unfolds like a captivating tale! 🚢🌸
              <br />
              <br />
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

        {/* Karaoke */}
        <div className="flex flex-col custom:flex-row custom:py-4 py-0 short-border custom:max-w-[1000px]   pt-10">
          <Image
            ref={ref3}
            src="/karaoke-crop.jpg"
            width={windowWidth > 1100 ? 280 : 260}
            height={500}
            alt="karaoke image"
            className={`rounded mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
              inView3
                ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                : ''
            }`}
          />
          <p className="text-white custom:text-2xl text-xl textShadow font-medium p-2 my-auto custom:px-8">
            ❤️ Dive into the ultimate karaoke experience in the birthplace of
            this musical phenomenon, Japan!
            <br />
            <br />
            Belt out your favorite tunes in high-quality karaoke rooms, and as
            the notes soar, relish the added joy of a complimentary drink
            bar—because in Japan, every karaoke session is a symphony of fun
            with a refreshing twist! 🎤🎶
          </p>
        </div>

        {/* Monja */}
        <div className="flex custom:flex-row flex-col-reverse w-full gap-6 short-border custom:py-4 custom:max-w-[1000px] pt-10">
          <p className="text-white custom:text-2xl text-xl textShadow font-medium custom:my-auto">
            ❤️ Monja is a very unique food born in Asakusa! It looks like vomit,
            but it tastes so delicious!
            <br />
            <br />
            ⭐️I&apos;ll teach you how to make monja, turning this quirky
            culinary experience into a flavorful adventure! 🍲✨
            <br />
          </p>

          <Image
            ref={ref4}
            src="/monja-food.webp"
            alt="monja image"
            width={340}
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
