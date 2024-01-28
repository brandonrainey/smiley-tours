'use client'

import React, { useState, useEffect } from 'react'
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

  const [area, setArea] = useState('asakusa')

  const [prevArea, setPrevArea] = useState(area)

  useEffect(() => {
    setPrevArea(area)
  }, [area])

  console.log(area, prevArea)

  return (
    <main
      className="custom:h-fit h-auto pb-12 custom:pb-0  w-full flex flex-col custom:px-10 px-4  mb-4 bg-[#f382bc] custom:rounded-b-xl  custom:border-x-2 custom:border-pink-500 border-pink-500/50 custom:border-b-2 custom:border-t-0 border-y-2 custom:border-y-4 custom:justify-normal  justify-center relative bgImage custom:order-2 order-1"
      id="about"
    >
      <h1 className="text-5xl font-Varela text-center p-4 font-semibold tracking-wider  z-20 textGradient  custom:mb-10">
        Tokyo Tour Guide
      </h1>

      {/* About Me/ Intro */}
      <div className="flex flex-col gap-10 custom:items-center relative">
        <div className="flex custom:flex-row flex-col w-full custom:max-w-[1000px] gap-6 custom:pb-0 custom:items-baseline items-center ">
          <div className="flex w-full max-w-[1000px] ">
            <img
              src="/asakusa-2.webp"
              alt="featured miley image"
              ref={ref}
              className={`rounded custom:mr-auto custom:mx-0 mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 custom:min-w-[350px] max-h-[432px]  ${
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
            people in the area. Asakusa is a popular tourist destination, but
            the guides are aging and there are no young guides. So I decided to
            become a guide.
            <br />
            <br />I have been doing stage shows for a long time, so I would like
            to offer a new type of tour that combines the skill of a guide with
            the skill of entertainment.{' '}
            <span className="font-semibold textShadowNone textGradient ">
              My dream
            </span>{' '}
            is to make guides a popular profession and increase the number of
            young guides. I hope it can help realize sustainable tourism!
          </p>
        </div>

        <h2
          className={`flex items-center justify-center text-center  text-3xl font-semibold tracking-wider text-white z-30 mt-2 custom:text-shadow-3 text-shadow-7 gap-2`}
        >
          <p
            className={`${
              area === 'ueno' && 'opacity-50'
            } cursor-pointer transition-all duration-150 ease-in-out `}
            onClick={() => setArea('asakusa')}
          >
            {area === 'asakusa' ? (
              <i className="fa-solid fa-heart text-pink-200 animate-wiggle-more"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
            <span
              className={`${area !== 'ueno' && 'textGradient textShadowNone'} `}
            >
              Asakusa
            </span>
          </p>
          {area === 'asakusa' ? (
            <i className={`fa-solid fa-arrow-right `}></i>
          ) : (
            <i className="fa-solid fa-arrow-left"></i>
          )}

          <p
            className={`${
              area === 'asakusa' && 'opacity-50'
            } cursor-pointer transition-all duration-150 ease-in-out`}
            onClick={() => setArea('ueno')}
          >
            <span
              className={`${
                area !== 'asakusa' && 'textGradient textShadowNone'
              } `}
            >
              Ueno
            </span>
            {area === 'ueno' ? (
              <i className="fa-solid fa-heart text-pink-200 animate-wiggle-more"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </p>
        </h2>

        {/* Asakusa/Ueno */}
        <div className="flex flex-col custom:items-center ">
          <div
            className={`custom:py-4 py-0 flex custom:flex-row flex-col-reverse short-border custom:max-w-[1000px] pt-10  `}
          >
            <div
              className={`text-white custom:text-2xl text-xl textShadow font-medium my-auto custom:pt-0 pt-4 `}
            >
              {area === 'asakusa' ? (
                <p
                  className={`${
                    area !== prevArea
                      ? ''
                      : 'animate-fade animate-ease-in-out animate-delay-150'
                  }`}
                  key="asakusa"
                >
                  Embark on a delightful journey along the Sumida River and
                  Komagata Street. Exploring the ancient roots of Asakusa dating
                  back to the year 628, where history unfolds like a captivating
                  tale! 🚢🌸
                  <br />
                  <br />
                  ❤️ Discover the story behind Asakusa through two must-visit
                  spots: Kaminarimon Gate and Senso-ji Temple.
                  <br />
                  <br />
                  Dive into the charm of these historical places and the Asakusa
                  Yokocho, and take photogenic photos at a theme park based on
                  the concept of Japanese festivals! 🎡🎢🎠
                </p>
              ) : (
                <p
                  className={`${
                    area !== prevArea
                      ? ''
                      : 'animate-fade animate-ease-in-out animate-delay-150'
                  }`}
                  key="ueno"
                >
                  Embark on a whimsical journey to the National Museum of Nature
                  and Science! 🌿
                  <br />
                  <br />
                  Unveil the secrets of the natural world and be sure to catch a
                  glimpse of the legendary Hachiko, the loyal pup who touched
                  hearts worldwide. 🐾
                  <br />
                  <br />
                  Let curiosity guide your steps and smiles brighten your
                  adventure! ✨{' '}
                </p>
              )}
            </div>

            {area === 'asakusa' ? (
              <Image
                ref={ref2}
                src={'/asakusa.webp'}
                alt="asakusa image"
                key={'asakusa1'}
                width={420}
                height={300}
                className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0  ${
                  inView2 || area !== prevArea
                    ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                    : ''
                } `}
              />
            ) : (
              <Image
                ref={ref2}
                src={'/museum.webp'}
                alt="museum image"
                key={'ueno1'}
                width={420}
                height={300}
                className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0  ${
                  inView2 || area !== prevArea
                    ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                    : ''
                } `}
              />
            )}
          </div>
        </div>

        {/* Karaoke/Shrine */}
        <div className="flex flex-col custom:flex-row custom:py-4 py-0 short-border custom:max-w-[1000px]   pt-10">
          {area === 'asakusa' ? (
            <Image
              ref={ref3}
              src={'/karaoke-crop.jpg'}
              width={330}
              height={500}
              key={'karaoke1'}
              alt="karaoke image"
              className={`rounded  mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView3 || area !== prevArea
                  ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          ) : (
            <Image
              ref={ref3}
              src={'/shrine.webp'}
              width={330}
              height={500}
              key={'shrine1'}
              alt="shrine image"
              className={`rounded mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView3 || area !== prevArea
                  ? 'animate-fade-right animate-duration-[1200ms] animate-ease-in-out opacity-100'
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
                ❤️ Dive into the ultimate karaoke experience in the birthplace
                of this musical phenomenon, Japan!
                <br />
                <br />
                Belt out your favorite tunes in high-quality karaoke rooms, and
                as the notes soar, relish the added joy of a complimentary drink
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
                Step into the enchanting Ueno Toushogu Shrine and immerse
                yourself in the grandeur of the Shogun&apos;s sanctuary. Marvel
                at the intricate gold fortune papers that add a touch of magic
                to your spiritual journey!
                <br />
                <br />
                Experience the allure of Kiyomizu Kannondo, a stage hall
                inspired by the iconic Kiyomizu-dera Temple in Kyoto. Built in
                1631, let the echoes of history accompany you as you explore
                this architectural masterpiece. 🏯✨
              </p>
            )}
          </div>
        </div>

        {/* Monja/Ramen */}
        <div className="flex custom:flex-row flex-col-reverse w-full gap-6 short-border custom:py-4 custom:max-w-[1000px] pt-10">
          <div className="text-white custom:text-2xl text-xl textShadow font-medium custom:my-auto">
            {area === 'asakusa' ? (
              <p
                className={`${
                  area !== prevArea
                    ? ''
                    : 'animate-fade animate-ease-in-out animate-delay-150'
                }`}
                key={'monja1'}
              >
                ❤️ Monja, a delightfully unique dish born in the heart of
                Asakusa, may resemble a playful mess, but its taste is an
                absolute delight!
                <br />
                <br />
                I&apos;ll show you the ropes of making monja, turning this
                quirky culinary experience into a flavorful adventure. Get ready
                for a delicious journey as we explore the unconventional side of
                Asakusa&apos;s culinary treasures! 🍲✨
                <br />
              </p>
            ) : (
              <p
                className={`${
                  area !== prevArea
                    ? ''
                    : 'animate-fade animate-ease-in-out animate-delay-150'
                }`}
                key={'ramen1'}
              >
                Indulge in the ultimate relaxation with our footbath cafe
                experience. Savor tea time while pampering your feet, complete
                with a blissful 5-minute massage and a refreshing drink.
                It&apos;s a treat for your senses!
                <br />
                <br />
                Embark on a culinary adventure with my favorite ramen – the
                tantalizing Tomato Noodles! Delight in the perfect fusion of
                tomatoes, cheese, and garlic, creating a symphony of flavors
                that will leave your taste buds singing. 🍜🍅🧀
              </p>
            )}
          </div>

          {area === 'asakusa' ? (
            <Image
              ref={ref4}
              src={'/monja-food.webp'}
              alt="monja image"
              width={330}
              height={500}
              key={'monja2'}
              className={`custom:mr-auto mx-auto rounded border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView4 || area !== prevArea
                  ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          ) : (
            <Image
              ref={ref4}
              src={'/ramen.webp'}
              alt="monja image"
              width={330}
              height={500}
              key={'ramen2'}
              loading="lazy"
              className={`custom:mr-auto mx-auto rounded border-dashed border-4 border-pink-200 p-2 opacity-0 ${
                inView4 || area !== prevArea
                  ? 'animate-fade-left animate-duration-[1200ms] animate-ease-in-out opacity-100'
                  : ''
              }`}
            />
          )}
        </div>
      </div>
    </main>
  )
}
