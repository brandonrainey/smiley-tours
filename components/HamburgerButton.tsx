'use client'

import Hamburger from './icons/Hamburger'
import { useAreaStore } from '@/store/areas'
import XIcon from './icons/XIcon'

export default function HamburgerButton() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useAreaStore()

  function disableScroll() {
    document.body.style.overflow = 'hidden'
  }

  function enableScroll() {
    document.body.style.overflow = ''
  }

  function handleOpenMenu() {
    disableScroll()

    setIsMobileMenuOpen(true)
  }

  function handleCloseMenu() {
    enableScroll()
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="custom:hidden absolute top-0 right-0 z-50 mr-1">
      <button
        className="text-white w-10 h-10 relative focus:outline-none cursor-pointer"
        onClick={isMobileMenuOpen ? handleCloseMenu : handleOpenMenu}
      >
        <span className="sr-only">Open main menu</span>
        <div className="flex w-full h-full justify-center items-center">
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-[25px] bg-current transform transition duration-300 ease-in-out ${
              isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-[25px] bg-current transform transition duration-300 ease-in-out ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block absolute h-[3px] w-[25px] bg-current transform transition duration-300 ease-in-out ${
              isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          ></span>
        </div>
      </button>
    </div>
  )
}
