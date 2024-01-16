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
      tourName: 'jan 19 tour',
      tourDescription: 'Tour on janurary 19th',
      tourImage: '/tour-jan19-small.webp',
      tourId: 1,
      tourPrice: 20000,
      tourSpots: 0,
      tourLink: 'https://smileytour.stores.jp/items/658aa16827d5b205f1c153d6',
    },
    {
      tourName: 'jan 26 tour',
      tourDescription: 'Tour on janurary 26th',
      tourImage: '/tour-jan26-small.webp',
      tourId: 2,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/658aa1b73cc7cf07c428e031',
    },
    {
      tourName: 'jan 29 tour',
      tourDescription: 'Tour on janurary 29th',
      tourImage: '/tour-jan29-small.webp',
      tourId: 3,
      tourPrice: 30000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/658aa2d13cc7cf071d28e048',
    },
    {
      tourName: 'feb 2 tour',
      tourDescription: 'Tour on febuary 2th',
      tourImage: '/tour-feb2.webp',
      tourId: 4,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/65a5456f1ebb490ecf2b9360',
    },
    {
      tourName: 'feb 9 tour',
      tourDescription: 'Tour on febuary 9th',
      tourImage: '/tour-feb9.webp',
      tourId: 5,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/65a54780b14f58002a4d0b96',
    },
    {
      tourName: 'feb 16 tour',
      tourDescription: 'Tour on febuary 16th',
      tourImage: '/tour-feb16.webp',
      tourId: 6,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/65a5498776f1c9002ada2c26',
    },
    {
      tourName: 'feb 27 tour',
      tourDescription: 'Tour on febuary 27th',
      tourImage: '/tour-feb27.webp',
      tourId: 7,
      tourPrice: 20000,
      tourSpots: 4,
      tourLink: 'https://smileytour.stores.jp/items/65a549d5e2dc7a00301255b3',
    },
    {
      tourName: 'Private Tour',
      tourDescription: 'Private Tour for at least 2 people',
      tourImage: '/private-tour.webp',
      tourId: 8,
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
    <div className=" bg-pink-400 w-full h-full flex flex-col relative">
      <Header />
      <div
        className='flex flex-col-reverse custom:flex-row w-full justify-between flex-grow'  
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
