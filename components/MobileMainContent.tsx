import React from 'react'
import Image from 'next/image'

export default function MainContent() {
  return (
    <main className="h-auto py-12 w-full flex flex-col px-4  mb-4 bg-pink-300  border-pink-700 border-y-2 justify-center">
      <h1 className="text-5xl font-Varela text-center p-4 font-semibold tracking-wider text-white textShadow ">
        Tokyo Tour Guide
      </h1>
      <h2 className="text-center mb-10 text-3xl font-semibold tracking-wider text-white textShadow">
        <i className="fas fa-heart fa-sm text-pink-500"></i>Asakusa & Akihabara
        <i className="fas fa-heart fa-sm text-pink-500"></i>
      </h2>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col w-full gap-6 pb-4">
          <Image
            src="/akiba-2.webp"
            alt="akiba image"
            width={400}
            height={500}
            className="mx-auto rounded border-dashed border-4 border-pink-500 p-2"
          />
          <p className="text-white text-xl textShadow font-medium">
            ❤️ Let&apos;s stroll through the vibrant streets of Akihabara, and
            I&apos;ll share interesting insights with you along the way. Enjoy
            the lively atmosphere as I guide you through this tech and
            entertainment hub! 🚶‍♂️🏙️
          </p>
        </div>

        <div className="flex flex-col">
          <div className=" flex flex-col pb-4 short-border pt-10">
            <Image
              src="/asakusa.webp"
              alt="asakusa image"
              width={350}
              height={300}
              className="rounded mx-auto border-dashed border-4 border-pink-500 p-2"
            />
            <p className="text-white text-xl textShadow font-medium my-auto pt-2">
              ❤️ Discover the story behind Asakusa through two must-visit spots:
              Senso-ji Temple and Asakusa Shrine.
              <br />
              <br />
              Dive into the charm of these historical places, and don&apos;t
              forget to grab some cool videos to remember your fun-filled tour!
              🌟 Asakusa is a city of comedians! Take photos at Comedian Street.
              <br />
            </p>
          </div>
          <div className="flex py-2  pb-4 short-border pt-10">
            <Image
              src="/karaoke.jpg"
              width={200}
              height={500}
              alt="karaoke image"
              className="rounded mr-auto border-dashed border-4 border-pink-500 p-2"
            />
            <p className="text-white text-xl textShadow font-medium p-2 my-auto">
              ❤️ Japan is the birthplace of karaoke! Immerse yourself in
              high-quality karaoke, and to make it even better, enjoy a
              complimentary drink bar! 🍵🎤✨
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-6 short-border pt-10">
          <Image
            src="/maid.webp"
            alt="maid image"
            width={300}
            height={500}
            className="mx-auto rounded border-dashed border-4 border-pink-500 p-2"
          />
          <p className="text-white text-xl textShadow font-medium">
            ❤️ Have a maid cafe experience! Lunch is omelet rice with a drawing
            by the maid. ➕ You can take a video of the maid&apos;s spell!
            <br />
            <br />
            ⭐️If you watch this video before joining, the tour will be even
            more fun! I&apos;ll take you this world↓
            <br />
            <a
              href="https://youtu.be/5EKahCouIAU?si=Ms6R6WHCRHZmi02l"
              className="underline bg-[#d462b75b]"
            >
              https://youtu.be/5EKahCouIAU?si=Ms6R6WHCRHZmi02l
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
