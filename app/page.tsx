'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import React, { useRef, useState, useEffect } from 'react'
import Testimonials from '@/components/Testimonials'
import MobileNav from '@/components/MobileNav'
import { useInView } from 'react-intersection-observer'
import ContentSectionOne from '@/components/ContentSectionOne'
import ContentSectionTwo from '@/components/ContentSectionTwo'
import ContentSectionThree from '@/components/ContentSectionThree'
import AreaSelector from '@/components/AreaSelector'

export default function Home() {
  const tourRef = useRef(null)

  const eventsRef = useRef(null)

  const [ref5, inView] = useInView({
    triggerOnce: true,
  })

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  })

  const [ref3, inView3] = useInView({
    triggerOnce: true,
  })

  const [ref4, inView4] = useInView({
    triggerOnce: true,
  })

  const [area, setArea] = useState('asakusa')

  const [prevArea, setPrevArea] = useState(area)

  useEffect(() => {
    setPrevArea(area)
  }, [area])

  return (
    <div className="  w-full h-full flex flex-col relative">
      <Header />

      <MobileNav tourRef={tourRef} eventsRef={eventsRef} />

      <div className="flex flex-col custom:flex-row w-full justify-between flex-grow">
        <InfoSidebar eventsRef={eventsRef} />

        <div className="flex flex-col items-center custom:order-2 order-1 gap-8">
          <MainContent ref5={ref5} inView={inView} />

          <AreaSelector area={area} setArea={setArea} />

          <ContentSectionOne
            area={area}
            prevArea={prevArea}
            ref2={ref2}
            inView2={inView2}
          />
          <ContentSectionTwo
            area={area}
            prevArea={prevArea}
            ref3={ref3}
            inView3={inView3}
          />
          <ContentSectionThree
            area={area}
            prevArea={prevArea}
            ref4={ref4}
            inView4={inView4}
          />
        </div>

        <TourSidebar tourRef={tourRef} />
      </div>

      <Testimonials />

      <Footer />
    </div>
  )
}
