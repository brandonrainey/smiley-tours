'use client'

import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'
import { useAreaStore } from '@/store/areas'
import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ContentSectionOne = dynamic(() => import('./ContentSectionOne'), { ssr: true})
const ContentSectionTwo = dynamic(() => import('./ContentSectionTwo'), { ssr: true})
const ContentSectionThree = dynamic(() => import('./ContentSectionThree'), { ssr: true})

export default function SectionCarousel() {
    const { activeSection, setActiveSection, handleNext, handlePrev } = useAreaStore()

    const sectionRef = useRef<HTMLDivElement>(null);

    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (firstLoad) {
          setFirstLoad(false);
        } else if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [activeSection]);

  return (
    <div className="flex flex-col items-center justify-center custom:h-[700px] custom:w-[1000px]" ref={sectionRef}>
      <div className="flex items-center">
        <button
          className="rounded-full  w-[5rem] h-[3.5rem] aspect-square text-white custom:flex hidden items-center justify-center "
          onClick={handlePrev}
        >
          <ArrowLeft />
        </button>

        <div >
          {activeSection === 1 && <ContentSectionOne />}
          {activeSection === 2 && <ContentSectionTwo />}
          {activeSection === 3 && <ContentSectionThree />}
        </div>

        <button
          className="rounded-full  w-[5rem] h-[3.5rem] text-white custom:flex hidden items-center justify-center"
          onClick={handleNext}
        >
          <ArrowRight />
        </button>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button
          className="rounded-full  w-[5rem] h-[3.5rem] aspect-square text-white flex custom:hidden items-center justify-center "
          onClick={handlePrev}
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
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}


