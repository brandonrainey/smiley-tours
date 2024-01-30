import React from 'react'
import Image from 'next/image'
import AsakusaImage from '../public/asakusa-crop.webp'
import MusuemImage from '../public/museum.webp'

interface ContentSectionOneProps {
  area: string
  prevArea: string
  ref2: any
  inView2: boolean
}

export default function ContentSectionOne({
  area,
  prevArea,
  ref2,
  inView2,
}: ContentSectionOneProps) {
  return (
    <section className="flex flex-col custom:items-center bg-[#f382bc] p-2 rounded-xl contentSectionShadow">
      <div
        className={`custom:py-4 py-0 flex custom:flex-row flex-col-reverse custom:max-w-[1000px] pt-10  `}
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
              Embark on a whimsical journey to the National Museum of Nature and
              Science! 🌿
              <br />
              <br />
              Unveil the secrets of the natural world and be sure to catch a
              glimpse of the legendary Hachiko, the loyal pup who touched hearts
              worldwide. 🐾
              <br />
              <br />
              Let curiosity guide your steps and smiles brighten your adventure!
              ✨{' '}
            </p>
          )}
        </div>

        {area === 'asakusa' ? (
          <Image
            ref={ref2}
            src={AsakusaImage}
            alt="asakusa image"
            key={'asakusa1'}
            width={420}
            height={300}
            placeholder="blur"
            className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0  ${
              inView2 || area !== prevArea
                ? 'animate-fade-left animate-duration-[700ms] animate-ease-in-out opacity-100'
                : ''
            } `}
          />
        ) : (
          <Image
            ref={ref2}
            src={MusuemImage}
            alt="museum image"
            key={'ueno1'}
            width={420}
            height={300}
            placeholder="blur"
            className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 max-h-[340px] ${
              inView2 || area !== prevArea
                ? 'animate-fade-left animate-duration-[700ms] animate-ease-in-out opacity-100'
                : ''
            } `}
          />
        )}
      </div>
    </section>
  )
}
