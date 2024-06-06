'use client'

import { useAreaStore } from '@/store/areas'
import { useInView } from 'react-intersection-observer'

export default function ContentSectionThree() {
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  })

  const { area, prevArea } = useAreaStore()

  return (
    <div className="flex custom:flex-row flex-col-reverse max-w-[1000px] gap-6  ">
      <article
        className="flex items-center  justify-center  custom:items-center bg-[#f086bd50] custom:border-cyan-700/10 custom:border-2 p-2 custom:p-4 custom:rounded-xl contentBackgroundBlur  relative"
        data-testid="content-section-one"
      >
        <div className="text-white custom:text-2xl text-xl textShadow font-medium custom:my-auto custom:p-4">
          {area === 'asakusa' ? (
            <p
              className={`${
                area !== prevArea
                  ? ''
                  : 'animate-fade animate-ease-in-out animate-delay-150'
              }`}
              key={'monja1'}
            >
              Monja, a delightfully unique dish born in the heart of Asakusa,
              may resemble a playful mess, but its taste is an absolute delight!
              <br />
              <br />
              I&apos;ll show you the ropes of making monja, turning this quirky
              culinary experience into a flavorful adventure. Get ready for a
              delicious journey as we explore the unconventional side of
              Asakusa&apos;s culinary treasures! 🍲✨
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
              with a blissful 5-minute massage and a refreshing drink. It&apos;s
              a treat for your senses!
              <br />
              <br />
              Embark on a culinary adventure with my favorite ramen – the
              tantalizing Tomato Noodles! Delight in the perfect fusion of
              tomatoes, cheese, and garlic, creating a symphony of flavors that
              will leave your taste buds singing. 🍜🍅🧀
            </p>
          )}
        </div>
      </article>
      {area === 'asakusa' ? (
        <img
          ref={ref4}
          src="/tourContents/monja-food.webp"
          alt="monja image"
          width={450}
          height={330}
          key={'monja2'}
          className={`mr-auto mx-auto rounded-lg  opacity-0 max-h-[450px] shadow-lg ${
            inView4 || area !== prevArea
              ? 'animate-fade-left animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
        />
      ) : (
        <img
          ref={ref4}
          src="/tourContents/ramen-small2.webp"
          alt="monja image"
          width={400}
          height={500}
          key={'ramen2'}
          className={`mr-auto mx-auto rounded-lg opacity-0 max-h-[500px] shadow-lg ${
            inView4 || area !== prevArea
              ? 'animate-fade-left animate-duration-[700ms] animate-ease-in-out opacity-100'
              : ''
          }`}
          loading="lazy"
        />
      )}
    </div>
  )
}
