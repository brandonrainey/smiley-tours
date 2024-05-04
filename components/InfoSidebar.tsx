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
      className="bg-transparent h-auto  basis-1/4 p-4  relative order-4 flex flex-col items-center"
      id="events"
      ref={eventsRef}
    >
      <h1 className="flex  w-full items-center justify-center font-hammersmithone tracking-wide">
        <img src='/eventsText.webp' alt='events' className='w-[170px] custom:pb-0 pb-4'/>
        {/* <span className="relative top-0 w-full justify-center flex bg-gradient-to-r h-20 items-center from-pink-600 via-pink-400 to-pink-200 bg-clip-text text-[2.5rem] font-bold text-transparent">
          Events
        </span> */}
      </h1>

      <div className="flex flex-col custom:flex-row w-full max-w-[1400px] custom:gap-24 justify-center items-center">
        {/* Community Post */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center text-white custom:text-shadow-1 text-shadow-5 font-semibold border-b-2 border-pink-300 w-fit px-2 mb-2 backdropFilterBlur relative">
            Recent Community Post
          </h2>
          <a
            href="https://www.youtube.com/@smileytime/community"
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="postWrapper relative max-w-[300px]">
              <h3 className="text-white custom:text-shadow-1 text-shadow-5 font-semibold">
                {postContent.error
                  ? 'Error loading post'
                  : postContent?.items[0].community[0].contentText[0].text.substring(
                      0,
                      90
                    )}
                ...
              </h3>
            </div>

            <img
              src={
                postContent.error
                  ? '/smiley-yt-enhanced.jpg'
                  : postContent?.items[0].community[0].images[0]?.thumbnails[2]
                      .url
                  ? postContent?.items[0].community[0].images[0]?.thumbnails[2]
                      .url
                  : '/smiley-yt-enhanced.jpg'
              }
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
      </div>
    </section>
  )
}
