import React from 'react'
import Image from 'next/image'

export default function MainContent() {
  return (
    <div className="h-full w-full flex flex-col px-10  mb-4">
      <h1 className="text-5xl font-Varela text-center p-4 font-semibold tracking-wider text-white textShadow">
        Tokyo Tour Guide
      </h1>
      <h2 className="text-center mb-10 text-3xl font-semibold tracking-wider text-white textShadow">
        <i className="fas fa-heart fa-sm text-pink-500"></i>Asakusa & Akihabara
        <i className="fas fa-heart fa-sm text-pink-500"></i>
      </h2>

      <div className="flex flex-col gap-10">
        <div className="flex w-full gap-6">
          <Image
            src="/akiba.jpg"
            alt="akiba image"
            width={400}
            height={500}
            className="mr-auto rounded shadow-lg"
          />
          <p className="text-white text-xl textShadow font-medium">Let's stroll through the vibrant streets of Akihabara, and I'll share interesting insights with you along the way. Enjoy the lively atmosphere as I guide you through this tech and entertainment hub! 🚶‍♂️🏙️</p>
        </div>

        <div className="flex">
          <div className="p-2">
            <p className="text-white text-xl textShadow font-medium">
              Discover the story behind Asakusa through two must-visit spots:
              Senso-ji Temple and Asakusa Shrine.
              <br />
              <br />
              Dive into the charm of these historical places, and don't forget
              to grab some cool videos to remember your fun-filled tour! 🌟
              
              Asakusa is a city of comedians! Take photos at Comedian Street.
              <br />
              <br />
            </p>
            <div className="flex py-2 ">
              <Image
                src="/karaoke.jpg"
                width={200}
                height={500}
                alt="karaoke image"
                className="rounded shadow-lg mr-auto"
              />
              <p className="text-white text-xl textShadow font-medium p-2">
                Tea time♡ Japan is the birthplace of karaoke Experience Japan's
                high quality karaoke！+ free drink bar
              </p>
            </div>
          </div>

          <Image
            src="/asakusa.webp"
            alt="asakusa image"
            width={450}
            height={500}
            className="rounded shadow-lg ml-auto"
          />
        </div>

        <div className="flex w-full gap-6">
          <Image
            src="/maid.avif"
            alt="maid image"
            width={400}
            height={500}
            className="mr-auto rounded shadow-lg"
          />
          <p className="text-white text-xl textShadow font-medium">
            Have a maid cafe experience! Lunch is omelet rice with a drawing by
            the maid. ➕ You can take a video of the maid's spell!
            <br />
            <br />
            ⭐️If you watch this video before joining, the tour will be even
            more fun! I'll take you this world↓
            <br />
            <a
              href="https://youtu.be/5EKahCouIAU?si=Ms6R6WHCRHZmi02l"
              className="underline"
            >
              https://youtu.be/5EKahCouIAU?si=Ms6R6WHCRHZmi02l
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
