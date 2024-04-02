import React from 'react'
import { useAreaStore } from '@/store/areas'

export default function MobileMenu() {
  const {
    tourRef,
    eventsRef,
    socialsRef,
    setIsMobileMenuOpen,
    isMobileMenuOpen,
  } = useAreaStore()

  const scrollToRef = (ref: any) => {
    const offsetTop = ref.current ? ref.current.offsetTop : 0
    const offset = offsetTop - 100 // adjust this value to the offset you want

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }

  function enableScroll() {
    document.body.style.overflow = ''
  }

  function handleTourClick() {
    setIsMobileMenuOpen(false)
    enableScroll()
    scrollToRef(tourRef)
  }

  function handleEventsClick() {
    scrollToRef(eventsRef)
    setIsMobileMenuOpen(false)
    enableScroll()
  }

  function handleSocialsClick() {
    scrollToRef(socialsRef)
    setIsMobileMenuOpen(false)
    enableScroll()
  }

  return (
    <nav
      className={`w-[77.5%] h-[100vh] fixed z-40 top-0 right-0 bg-pink-300 flex flex-col items-center justify-center ${
        isMobileMenuOpen ? 'animate-fade-left' : 'animate-fade-right'
      } animate-duration-200`}
    >
      <div className="flex justify-center items-center gap-16">
        <img src="/ganko.webp" alt="ganko image" className="h-[5rem]" />
        <img src="/bulma.webp" alt="bulma image" className="h-[4rem]" />
      </div>

      <ul className="flex flex-col justify-between text-white text-4xl h-[400px] mb-[150px] mt-[50px] font-bold ">
        <li
          className="flex items-center cursor-pointer group w-fit hover:text-pink-600"
          onClick={() => handleTourClick()}
        >
          <img
            src="/heart-icon.png"
            className="w-[50px] group-hover:animate-wiggle-more "
            alt="heart icon"
          />
          Tours
        </li>
        <li
          className="flex items-center cursor-pointer group w-fit hover:text-pink-600"
          onClick={() => handleEventsClick()}
        >
          <img
            src="/heart-icon.png"
            className="w-[50px] group-hover:animate-wiggle-more"
            alt="heart icon"
          />
          Events
        </li>
        <li
          className="flex items-center cursor-pointer group w-fit hover:text-pink-600"
          onClick={() => handleSocialsClick()}
        >
          <img
            src="/heart-icon.png"
            className="w-[50px] group-hover:animate-wiggle-more"
            alt="heart icon"
          />
          Community
        </li>
      </ul>
    </nav>
  )
}
