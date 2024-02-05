'use client'

import { useEffect } from 'react'
import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'
import HeartOutline from './icons/HeartOutline'
import ArrowRight from './icons/ArrowRight'
import ArrowLeft from './icons/ArrowLeft'

export default function AreaSelector() {

  const { area, setArea, setPrevArea } = useAreaStore()

  useEffect(() => {
    setPrevArea(area)
  }, [area])

  return (
    <nav
      className={`flex flex-col items-center justify-center text-center  text-3xl font-semibold tracking-wider text-white z-30 mt-2 custom:text-shadow-3 text-shadow-7 gap-2 bg-[#f382bc] rounded-xl w-fit p-2 border-4`}
    >
      <h1>Tour Activites</h1>

      <div className="flex gap-2">
        <h2
          className={`${
            area === 'ueno' && 'opacity-50'
          } cursor-pointer transition-all duration-150 ease-in-out flex gap-1`}
          onClick={() => setArea('asakusa')}
        >
          {area === 'asakusa' ? (
            <HeartSolid />
            
          ) : (
            <HeartOutline />
          )}
          <span
            className={`${area !== 'ueno' && 'textGradient textShadowNone'} `}
          >
            Asakusa
          </span>
        </h2>
        {area === 'asakusa' ? (
          <ArrowRight />
        ) : (
          <ArrowLeft />
        )}

        <h2
          className={`${
            area === 'asakusa' && 'opacity-50'
          } cursor-pointer transition-all duration-150 ease-in-out flex gap-1`}
          onClick={() => setArea('ueno')}
        >
          <span
            className={`${
              area !== 'asakusa' && 'textGradient textShadowNone'
            } `}
          >
            Ueno
          </span>
          {area === 'ueno' ? (
            <HeartSolid />
          ) : (
            <HeartOutline />
          )}
        </h2>
      </div>
    </nav>
  )
}
