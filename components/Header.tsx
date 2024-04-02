'use client'

import { useAreaStore } from '@/store/areas'
import MobileMenu from './MobileMenu'
import HamburgerButton from './HamburgerButton'

export default function Header() {
  const { isMobileMenuOpen } = useAreaStore()

  return (
    <header className="w-full flex justify-center border-b-2 border-pink-600 custom:relative bg-pink-400 sticky top-0 custom:z-0 z-50 custom:mb-[30px]">
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
        className="z-30 max-h-[200px] w-auto hidden custom:inline-block"
      />
    </header>
  )
}
