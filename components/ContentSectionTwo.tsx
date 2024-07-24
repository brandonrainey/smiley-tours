'use client'

import { useAreaStore } from '@/store/areas'
import { useInView } from 'react-intersection-observer'

export default function ContentSectionTwo() {
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  })

  const { area, prevArea } = useAreaStore()

  return (
    <div className="flex custom:flex-row flex-col max-w-[1000px] gap-6  ">
      {area === 'asakusa' ? (
        <img
          ref={ref3}
          src="/tourContents/karaoke-crop.jpg"
          width={380}
          height={500}
          key={'karaoke1'}
          alt="karaoke image"
          className={`sm:rounded-xl mx-auto opacity-0 max-h-[500px] shadow-lg ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
        />
      ) : null}

      {area === 'ueno' ? (
        <img
          ref={ref3}
          src="/tourContents/shrine-small2.webp"
          width={400}
          height={560}
          key={'shrine1'}
          alt="shrine image"
          className={`sm:rounded-xl mx-auto opacity-0 max-h-[560px] shadow-lg ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
        />
      ) : null}

      {area === 'shinjuku' ? (
        <img
          ref={ref3}
          src="/tourContents/izakaya.webp"
          width={400}
          height={560}
          key={'izakaya1'}
          alt="izakaya image"
          className={`sm:rounded-xl mx-auto opacity-0 max-h-[560px] shadow-lg ${
            inView3 || area !== prevArea
              ? 'animate-fade-right animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
        />
      ) : null}

      <article
        className="flex items-center  justify-center  custom:items-center bg-[#f086bd50] custom:border-cyan-700/10 custom:border-2 p-2 custom:p-4 custom:rounded-xl contentBackgroundBlur  relative"
        data-testid="content-section-one"
      >
        <div className="text-white custom:text-2xl text-xl font-medium p-2 my-auto custom:px-8">
          {area === 'asakusa' ? (
            <p
              className={`${
                area !== prevArea
                  ? ''
                  : 'animate-fade animate-ease-in-out animate-delay-150'
              }`}
              key={'karaoke2'}
            >
              Dive into the ultimate karaoke experience in the birthplace of
              this musical phenomenon, Japan!
              <br />
              <br />
              Belt out your favorite tunes in high-quality karaoke rooms, and as
              the notes soar, relish the added joy of a complimentary drink
              bar—because in Japan, every karaoke session is a symphony of fun
              with a refreshing twist! 🎤🎶
            </p>
          ) : null}

          {area === 'ueno' && (
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
              Experience the allure of Kiyomizu Kannondo, a stage hall inspired
              by the iconic Kiyomizu-dera Temple in Kyoto. Built in 1631, let
              the echoes of history accompany you as you explore this
              architectural masterpiece. 🏯✨
            </p>
          )}

          {area === 'shinjuku' && (
            <p
              className={`${
                area !== prevArea
                  ? ''
                  : 'animate-fade animate-ease-in-out animate-delay-150'
              }`}
              key={'izakaya2'}
            >
              Step back in time and savor unique Japanese food and drinks 🍻 at a restaurant themed like a vintage izakaya from over 50 years ago.
              
              <br />
              <br />
               Enjoy a drink with classic dishes like yakitori 🍢, oden 🍢, and yakisoba 🍜. For the adventurous, you can even try eating a frog 🐸! Cheers to an unforgettable culinary experience!
              <br />
              <br />
              
              
            </p>
          )}
        </div>
      </article>
    </div>
  )
}
