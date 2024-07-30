'use client'

import { useState } from 'react'
import { useAreaStore } from '@/store/areas'
import LocationDot from './icons/LocationDot'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

interface EventSidebarProps {
  postContent: any
}

const barEventDetails = [
  {
    id: 1,
    time: '18:00 - 18:45',
    link: 'https://smileywalk.shop/items/669dc11ca3a20c00c2cc6c39',
    soldOut: false
  },
  {
    id: 2,
    time: '18:50 - 19:35',
    link: 'https://smileywalk.shop/items/669dc175b71e150036233518',
    soldOut: false
  },
  {
    id: 3,
    time: '19:40 - 20:25',
    link: 'https://smileywalk.shop/items/669dc1c7d5019800392945bf',
    soldOut: true
  },
  {
    id: 4,
    time: '20:30 - 21:15',
    link: 'https://smileywalk.shop/items/669dc24a9d5f2b00ed699871',
    soldOut: false
  },
  {
    id: 5,
    time: '21:20 - 22:05',
    link: 'https://smileywalk.shop/items/669dc2bb87fb3701561091ae',
    soldOut: false
  },
]

export default function EventSidebar({ postContent }: EventSidebarProps) {
  const { eventsRef } = useAreaStore()

  const [eventSelected, setEventSelected] = useState(1)

  function handlePreviousEventTimeClick() {
    if (eventSelected > 1) {
      setEventSelected(eventSelected - 1)
    }
  }

  function handleNextEventTimeClick() {
    if (eventSelected < 5) {
      setEventSelected(eventSelected + 1)
    }
  }

  return (
    <section
      className="bg-transparent h-auto  basis-1/4 p-4  relative order-4 flex flex-col items-center"
      id="events"
      ref={eventsRef}
    >
      <h1 className="flex  w-fit items-center justify-center  shadow p-1 px-2 rounded-xl sm:text-4xl text-3xl text-white bg-gradient-to-r from-[#f382bc] to-[#ed3996] mb-4 relative contentBackgroundBlur2">
        Events
      </h1>

      <div className="flex flex-col custom:flex-row w-full max-w-[1400px] custom:gap-24 justify-center items-center">
        {/* Community Post */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl text-center text-white custom:text-shadow-1 text-shadow-5 font-semibold border-y-2 border-pink-300 w-fit px-2 mb-2 backdropFilterBlur relative">
            Recent Community Post
          </h2>

          <a
            href="https://www.youtube.com/@smileytime/community"
            className="flex flex-col items-center justify-center text-center"
          >
            <img
              src={
                postContent.error
                  ? '/smiley-yt-enhanced.jpg'
                  : postContent?.items[0]?.community[0]?.images[0]
                      ?.thumbnails[2].url
                  ? postContent?.items[0]?.community[0]?.images[0]
                      ?.thumbnails[2].url
                  : '/smiley-yt-enhanced.jpg'
              }
              alt="community post image"
              className="rounded tourShadow max-w-[300px] custom:w-full w-[300px]"
            />

            <div className="postWrapper relative max-w-[300px]">
              <h3 className="text-white custom:text-shadow-1 text-shadow-5 font-semibold">
                {postContent.error
                  ? 'Error loading post'
                  : postContent?.items[0].community[0]?.contentText[0].text.substring(
                      0,
                      90
                    )}
                ...
              </h3>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center justify-between max-w-[300px] h-[414px] mt-8 sm:mt-0">
          <h2 className="text-white text-2xl border-y-2 border-pink-300 text-center custom:text-shadow-1 text-shadow-5 font-semibold">
            Miley&apos;s Bar @ Belgian fries stand bintje.
          </h2>
          <img
            src="/miley-bar-special.webp"
            alt=""
            className="rounded max-w-[300px] custom:w-full w-[300px] tourShadow"
          />

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePreviousEventTimeClick()}
              className={`${eventSelected === 1 && 'opacity-50'}`}
              disabled={eventSelected === 1}
            >
              <ArrowLeft />
            </button>

            <a
              href={barEventDetails[eventSelected - 1].link}
              className={`text-white font-semibold bg-gradient-to-r from-[#f382bc] to-[#ed3996] rounded-lg p-1 ${barEventDetails[eventSelected - 1].soldOut && 'opacity-50 line-through'}`}
            >
              <span className=" border-2 border-white rounded-full px-1 mr-1">
                {barEventDetails[eventSelected - 1].id}
              </span>
              {barEventDetails[eventSelected - 1].time}
            </a>

            <button
              onClick={() => handleNextEventTimeClick()}
              className={`${eventSelected === 5 && 'opacity-50'}`}
              disabled={eventSelected === 5}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Miley's Bar */}
        <div className="text-center font-semibold flex flex-col items-center mt-8 sm:mt-0 sm:h-[414px]">
          <h2
            className={`text-center text-2xl tracking-wide font-semibold text-white border-y-2 border-pink-300 custom:text-shadow-1 text-shadow-5 py-1 mb-4`}
          >
            Miley&apos;s Bar
          </h2>

          <div className="flex flex-col items-center mt-auto">
            <img
              src="/bar.webp"
              alt="ninja bar"
              className="rounded max-w-[300px] custom:w-full w-[300px] tourShadow"
            />
          </div>

          <div
            className={`font-semibold rounded text-white custom:text-shadow-1 text-shadow-2 mt-2  max-w-[300px]  p-1 w-full flex flex-col items-center`}
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
