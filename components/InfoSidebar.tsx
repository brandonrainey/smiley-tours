import React from 'react'
import Image from 'next/image'

interface InfoSidebarProps {
  windowWidth: number
}

export default function InfoSidebar({ windowWidth }: InfoSidebarProps) {
  return (
    <section className="bg-pink-200 h-auto basis-1/4 p-4 font-Varela  relative ">
      <Image
        src="/ganko.webp"
        width={76}
        height={72}
        alt="ganko image"
        className="absolute custom:-top-12 custom:-right-12 -top-16 right-26 z-30"
      />
      <h1
        className={`text-center text-4xl font-bold mb-6 mt-4 text-white ${
          windowWidth > 1100 ? 'textShadow3' : 'textShadow3Mobile'
        } `}
      >
        Events
      </h1>

      <div className="text-center font-semibold flex flex-col items-center">
        <h2
          className={`text-center text-xl underline tracking-wide font-semibold text-white ${
            windowWidth > 1100 ? 'textShadow3' : 'textShadow3Mobile'
          } pb-2`}
        >
          Miley&apos;s Bar
        </h2>

        <div className="flex flex-col items-center ">
          <Image
            src="/ninja-bar.webp"
            width={288}
            height={288}
            alt="ninja bar image"
            className="rounded"
          />
          <div
            className={`bg-pink-300 rounded text-white ${
              windowWidth > 1100 ? 'textShadow' : 'textShadowMobile2'
            }   mt-2 max-w-[288px] newShadow`}
          >
            <p>Open :18:00- 23:00</p>
            <a href="https://maps.app.goo.gl/1eivcwBZiR1D2ok46">
              <p className="hover:text-pink-800">
                2 Chome-4-3 Asakusa, Taito City, Tokyo 111-0032
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold mt-8 flex flex-col items-center ">
        <h2
          className={`text-center text-xl underline tracking-wide font-semibold text-white ${
            windowWidth > 1100 ? 'textShadow' : 'textShadow3Mobile'
          }   pb-2`}
        >
          New Year&apos;s Tour
        </h2>

        <div className="flex flex-col items-center ">
          <Image
            src="/new-years.webp"
            width={288}
            height={288}
            alt="new years tour image"
            className="rounded "
          />
          <div
            className={`bg-pink-300 rounded text-white ${
              windowWidth > 1100 ? 'textShadow' : 'textShadowMobile2'
            } mt-2 max-w-[288px] newShadow `}
          >
            <p>2024.1.1 4am JST</p>
            <a
              href="https://www.youtube.com/watch?v=PTcD-rJ0z1E"
              className="hover:text-pink-800 break-all"
            >
              <p>https://www.youtube.com/watch?v=PTcD-rJ0z1E</p>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center font-semibold mt-8 flex flex-col items-center">
        <h2
          className={`text-center text-xl underline tracking-wide font-semibold text-white ${
            windowWidth > 1100 ? 'textShadow' : 'textShadow3Mobile'
          }   pb-2`}
        >
          Idol Concert
        </h2>

        <div>
          <Image
            src="/idol-concert.webp"
            width={288}
            height={288}
            alt="idol concert image"
            className="rounded "
          />
          <div
            className={`bg-pink-300 rounded text-white ${
              windowWidth > 1100 ? 'textShadow' : 'textShadowMobile2'
            } mt-2 newShadow`}
          >
            <p>March 11th</p>
            <p>Akihabara</p>
          </div>
        </div>
      </div>
    </section>
  )
}
