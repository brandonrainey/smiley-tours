'use client'

import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'
import { useAreaStore } from '@/store/areas'
import { useRef, useEffect, useState } from 'react'
import ContentSectionOne from './ContentSectionOne'
import ContentSectionTwo from './ContentSectionTwo'
import ContentSectionThree from './ContentSectionThree'

export default function SectionCarousel() {
  const { activeSection, handleNext, handlePrev } = useAreaStore()

  const sectionRef = useRef<HTMLDivElement>(null)

  const [firstLoad, setFirstLoad] = useState(true)

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
    } else if (sectionRef.current) {
      const offsetTop = sectionRef.current ? sectionRef.current.offsetTop : 0
      const offset = offsetTop - 20

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }, [activeSection])

  return (
    <div
      className="flex flex-col items-center justify-center mt-4 custom:h-[640px] custom:w-[1600px] z-20 custom:scale-[0.75] custom2:scale-100"
      ref={sectionRef}
    >
      <div className="flex items-center">
        <button
          className="rounded-full  w-[5rem] h-[3.5rem] aspect-square text-white custom:flex hidden items-center justify-center"
          onClick={handlePrev}
          aria-label="previous section"
        >
          <ArrowLeft />
        </button>

        <div className="relative">
          {activeSection === 1 && <ContentSectionOne />}
          {activeSection === 2 && <ContentSectionTwo />}
          {activeSection === 3 && <ContentSectionThree />}
        </div>

        <button
          className="rounded-full  w-[5rem] h-[3.5rem] text-white custom:flex hidden items-center justify-center"
          onClick={handleNext}
          aria-label="next section"
        >
          <ArrowRight />
        </button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button
          className="rounded-full  w-[5rem] h-[3.5rem] aspect-square text-white flex custom:hidden items-center justify-center "
          onClick={handlePrev}
          aria-label="previous section mobile"
        >
          <ArrowLeft />
        </button>
        <div
          className={`rounded-full border-2 border-pink-400 w-[0.75rem] h-[0.75rem] ${
            activeSection === 1 && 'bg-white'
          }`}
        ></div>
        <div
          className={`rounded-full border-2 border-pink-400 w-[0.75rem] h-[0.75rem] ${
            activeSection === 2 && 'bg-white'
          }`}
        ></div>
        <div
          className={`rounded-full border-2 border-pink-400 w-[0.75rem] h-[0.75rem] ${
            activeSection === 3 && 'bg-white'
          }`}
        ></div>
        <button
          className="rounded-full  w-[5rem] h-[3.5rem] text-white flex custom:hidden items-center justify-center"
          onClick={handleNext}
          aria-label="next section mobile"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}
