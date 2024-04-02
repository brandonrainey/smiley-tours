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
    <div className="custom:hidden">
      {!isMobileMenuOpen ? (
        <button
          className="absolute right-0 cursor-pointer z-40 mr-2 mt-1"
          onClick={() => handleOpenMenu()}
        >
          <Hamburger />
        </button>
      ) : (
        <button
          className="absolute right-0 mr-2 z-40"
          onClick={() => handleCloseMenu()}
        >
          <XIcon />
        </button>
      )}
    </div>
  )
}
