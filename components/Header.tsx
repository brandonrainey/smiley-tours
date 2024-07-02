'use client'

import { useAreaStore } from '@/store/areas'
import MobileMenu from './MobileMenu'
import dynamic from 'next/dynamic'

const HamburgerButton = dynamic(() => import('./HamburgerButton'), {
  ssr: true,
})

export default function Header() {
  const { isMobileMenuOpen, eventsRef, tourRef } = useAreaStore()

  const scrollToRef = (ref: any) => {
    setTimeout(() => {
      const offsetTop = ref.current ? ref.current.offsetTop : 0
      const offset = offsetTop - 100

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }, 0)
  }

  return (
    <header className="w-full flex justify-center items-center border-b-2 border-pink-600 custom:relative bg-pink-300 fixed top-0 custom:z-0 z-50">
      {isMobileMenuOpen && <MobileMenu />}

      <HamburgerButton />

      <div className="w-full h-full custom:h-[200px] absolute bg-white filter blur-2xl opacity-70 custom:-z-10"></div>

      <div className="flex justify-center custom:justify-normal items-center z-30 w-screen custom:w-full custom:h-[100px] max-h-[200px] ">
        <img
          src="/miley.webp"
          width={100}
          height={72}
          alt="miley image"
          className="custom:max-h-[100px] max-h-[80px] w-auto"
        />
        <img
          src="/smiley-title.webp"
          alt="smiley tour title text"
          className=" p-2 pt-4 sm:max-h-[100px] max-h-[75px]  "
        />
      </div>

      <div className="items-center gap-4 hidden custom:flex w-full justify-end mr-6">
        <img
          src="/ganko.webp"
          alt="ganko"
          className=" hidden custom:inline-block z-30 w-[64px]  "
        />
        <p
          className="text-2xl text-pink-500 font-semibold cursor-pointer hover:bg-pink-200 hover:shadow p-1 rounded-xl"
          onClick={() => scrollToRef(eventsRef)}
        >
          Events
        </p>
        <img
          src="/bulma.webp"
          alt="bulma image"
          className={` custom:w-[80px] w-[70px] hidden custom:inline-block`}
        />
        <p
          className="text-2xl text-pink-500 font-semibold cursor-pointer hover:bg-pink-200 hover:shadow p-1 rounded-xl "
          onClick={() => scrollToRef(tourRef)}
        >
          Tours
        </p>
      </div>
    </header>
  )
}
