import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <article
      className={`w-full lg:min-h-[400px] flex lg:flex-row flex-col items-center justify-around gap-8 px-4 lg:my-0 my-4 custom:pt-0 custom:before:border-none short-border pt-10`}
    >
      <div className=" text-center basis-1/3 bg-pink-400/40 rounded-xl newShadow max-w-[520px] relative">
        <Image
          src="/low-background.webp"
          fill
          sizes="(max-width: 1100px) 100vw, 520px"
          alt="smiley image"
          className="rounded-xl absolute top-0 left-0 opacity-70 object-cover -z-20"
        />

        <figure className="max-w-screen-md p-2 ">
          <svg
            className="h-8 pl-10 mr-auto mb-3 text-pink-800 "
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-white textShadowMobile2">
              &quot;I had a wonderful time at the Tour and will definitely be
              back in tokyo again next year. Hopefully we&apos;ll meet again
              soon. Cheers!😊&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3"></figcaption>
        </figure>
      </div>

      <div className=" text-center basis-1/3 bg-pink-400/40 rounded-xl newShadow max-w-[520px] relative">
        <Image
          src="/low-background.webp"
          fill
          sizes="(max-width: 1100px) 100vw, 520px"
          alt="smiley image"
          className="rounded-xl absolute top-0 left-0 opacity-80 object-cover -z-20"
        />

        <figure className="max-w-screen-md p-2">
          <svg
            className="h-8 pl-10 mr-auto mb-3 text-pink-800"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-white textShadowMobile2">
              &quot;The Karaoke segment is so wonderful because it allows Miley
              to include HER top-notch professional Japanese singing and dancing
              performance within her tour. Her singing, alone, is worth the
              price. Miley is such a wonderful person to spend time with.&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3"></figcaption>
        </figure>
      </div>

      <div className=" text-center basis-1/3 bg-pink-400/40 rounded-xl newShadow max-w-[520px] relative">
        <Image
          src="/low-background.webp"
          fill
          sizes="(max-width: 1100px) 100vw, 520px"
          alt="smiley image"
          className="rounded-xl absolute top-0 left-0 opacity-80 object-cover -z-20"
        />

        <figure className="max-w-screen-md p-2">
          <svg
            className="h-8 pl-10 mr-auto mb-3 text-pink-800"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-white textShadowMobile2">
              &quot;Experiencing Smiley&apos;s tour around Asakusa and Akihabara
              was a true highlight! Miley&apos;s positive energy and the
              delightful moments captured made the tour an absolute pleasure.
              Can&apos;t wait for the next adventure! 😊🌟&quot;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3"></figcaption>
        </figure>
      </div>
    </article>
  )
}
