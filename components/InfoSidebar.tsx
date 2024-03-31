'use client'

import { useAreaStore } from '@/store/areas'
import LocationDot from './icons/LocationDot'

interface InfoSidebarProps {
  postContent: any
}

export default function InfoSidebar({ postContent }: InfoSidebarProps) {
  const { eventsRef } = useAreaStore()

  return (
    <section
      className="bg-transparent h-auto  basis-1/4 p-4  custom:before:border-none short-border relative custom:order-1 order-3 flex flex-col items-center"
      id="events"
      ref={eventsRef}
    >
      <img
        src="/ganko.webp"
        alt="ganko"
        className="absolute hidden custom:inline-block custom:-top-20 custom:-right-10 -top-16 right-26 z-30 w-[76px]"
      />

      <h1
        className={`text-center text-4xl font-bold mb-6 mt-4 text-white bg-pink-400/40 rounded-xl w-fit px-2 py-1 mx-auto font-hammersmithone italic custom:text-shadow-3 text-shadow-4 custom:tracking-wide border-dotted border-2 backdropFilterBlur`}
      >
        Events
      </h1>

      {/* Community Post */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl text-center text-white custom:text-shadow-1 text-shadow-5 font-semibold border-x-2 border-pink-400 w-fit px-2 mb-2 rounded backdropFilterBlur relative">
          Recent Community Post
        </h2>
        <a
          href="https://www.youtube.com/@smileytime/community"
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="postWrapper relative max-w-[300px]">
            <h3 className="text-white custom:text-shadow-1 text-shadow-5 font-semibold">
              {postContent.items[0].community[0].contentText[0].text.substring(
                0,
                90
              )}
              ...
            </h3>
          </div>

          <img
            src={postContent.items[0].community[0].images[0].thumbnails[2].url}
            alt="community post image"
            className="rounded tourShadow max-w-[300px] custom:w-full w-[300px]"
          />
        </a>
      </div>

      {/* Miley's Bar */}
      <div className="text-center font-semibold flex flex-col items-center mt-8">
        <h2
          className={`text-center text-xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
        >
          Miley&apos;s Bar
        </h2>
        <div className="flex flex-col items-center">
          <img
            src="/bar.webp"
            alt="ninja bar"
            className="rounded max-w-[300px] custom:w-full w-[300px] tourShadow"
          />
          <div
            className={`bg-pink-400/60 rounded text-white custom:text-shadow-1 text-shadow-5 mt-2  max-w-[300px] border-2 border-pink-500 p-1 w-full flex flex-col items-center`}
          >
            <div className="flex gap-2 items-center">
              <p>Open :18:00- 23:00</p>
              <a
                href="https://maps.app.goo.gl/PJndiVJPRv4bTWQSA"
                aria-label="Miley bar location"
              >
                <LocationDot />
              </a>
            </div>
            <p>🌟Charge ¥500/1h</p>
            <p>🌟Drinks ¥800〜</p>
          </div>
        </div>
      </div>
    </section>
  )
}
