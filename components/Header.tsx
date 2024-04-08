'use client'

import { useAreaStore } from '@/store/areas'
import MobileMenu from './MobileMenu'
import dynamic from 'next/dynamic'

const HamburgerButton = dynamic(() => import('./HamburgerButton'), {
  ssr: true,
})

export default function Header() {
  const { isMobileMenuOpen } = useAreaStore()

  return (
    <header className="w-full flex justify-center items-center border-b-2 border-pink-600 custom:relative bg-pink-300 sticky top-0 custom:z-0 z-50 custom:mb-[30px]">
      {isMobileMenuOpen && <MobileMenu />}

      <HamburgerButton />

      <div className="w-full h-full custom:h-[200px] absolute bg-white filter blur-2xl opacity-70 custom:-z-10"></div>
      {/* mobile */}

      <img
        src="/smiley-banner-transparent-mobile.webp"
        alt="banner image"
        className="z-30 max-h-[200px] w-auto custom:hidden"
      />

      {/* desktop */}
      <img
        src="/smiley-banner-transparent.webp"
        alt="banner image"
        className="z-30 max-h-[100px] w-auto hidden custom:inline-block mr-auto ml-8"
      />

      <div className="items-center gap-12 mr-8 hidden custom:flex">
        <img
          src="/ganko.webp"
          alt="ganko"
          className=" hidden custom:inline-block  z-30 w-[76px] h-[92px] "
        />

        <img
          src="/bulma.webp"
          alt="bulma image"
          className={` custom:w-[100px] w-[70px] h-[71px] hidden custom:inline-block`}
        />
      </div>
    </header>
  )
}
