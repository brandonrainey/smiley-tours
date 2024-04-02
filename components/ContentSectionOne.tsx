'use client'

import { useAreaStore } from '@/store/areas'
import { useInView } from 'react-intersection-observer'

export default function ContentSectionOne() {
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  })

  const { area, prevArea } = useAreaStore()
  return (

    <article className="flex flex-col items-center justify-center custom:h-[640px] custom:items-center bg-[#f177b6] p-2 custom:p-4 rounded-xl contentSectionShadow realtive" data-testid='content-section-one'>
        <div
        className={`custom:py-4 py-0 flex custom:flex-row flex-col-reverse custom:max-w-[1000px] pt-4  `}
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
              Discover the story behind Asakusa through two must-visit spots:
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
          <img
            ref={ref2}
            src="/asakusa-crop.webp"
            alt="asakusa image"
            key={'asakusa1'}
            className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 max-h-[572px]  ${
              inView2 || area !== prevArea
                ? 'animate-fade-left animate-duration-[700ms] animate-ease-in-out opacity-100'
                : ''
            } `}
          />
        ) : (
          <img
            ref={ref2}
            src="/museum.webp"
            alt="museum image"
            key={'ueno1'}
            className={`rounded custom:ml-auto mx-auto border-dashed border-4 border-pink-200 p-2 opacity-0 max-h-[420px]  ${
              inView2 || area !== prevArea
                ? 'animate-fade-left animate-duration-[700ms] animate-ease-in-out opacity-100'
                : ''
            } `}
            loading="lazy"
          />
        )}
      </div>
      
    </article>
  )
}
