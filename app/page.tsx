'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoSidebar from '@/components/InfoSidebar'
import MainContent from '@/components/MainContent'
import TourSidebar from '@/components/TourSidebar'
import React, { useState, useEffect } from 'react'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1101)

  const [tours, setTours] = useState([
    
    {
      tourName: 'jan 12 tour',
      tourDescription: 'Tour on janurary 12th',
      tourImage: '/tour-jan12.webp',
      tourId: 2,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/658aa0a1b2c71d06168f2746',
    },
    {
      tourName: 'jan 19 tour',
      tourDescription: 'Tour on janurary 19th',
      tourImage: '/tour-jan19.webp',
      tourId: 3,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/658aa16827d5b205f1c153d6',
    },
    {
      tourName: 'jan 26 tour',
      tourDescription: 'Tour on janurary 26th',
      tourImage: '/tour-jan26.webp',
      tourId: 4,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/658aa1b73cc7cf07c428e031',
    },
    

    {
      tourName: 'Private Tour',
      tourDescription: 'Private Tour for at least 2 people',
      tourImage: '/private-tour.webp',
      tourId: 6,
      tourPrice: 'TBD',
      tourSpots: 'TBD',
      tourLink: 'https://smileytour.stores.jp/items/649e31d385e3630037cff96e',
    },
  ])

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])

  return (
    <div className=" bg-pink-300 w-full h-full flex flex-col relative">
      <Header />
      <div
        className={`flex  ${
          windowWidth < 1100 ? 'flex-col-reverse' : 'flex-row'
        } w-full justify-between flex-grow   `}
      >
        <InfoSidebar windowWidth={windowWidth} />

        <MainContent windowWidth={windowWidth} />

        <TourSidebar tours={tours} windowWidth={windowWidth} />
      </div>
      <Testimonials windowWidth={windowWidth} />
      <Footer windowWidth={windowWidth} />
    </div>
  )
}
