'use client'

import { useEffect } from 'react'
import { useAreaStore } from '@/store/areas'
import HeartSolid from './icons/HeartSolid'
import HeartSolid2 from './icons/HeartSolid2'

export default function AreaSelector() {
  const { area, setArea, setPrevArea, isOpen, setIsOpen } = useAreaStore()

  const handleAreaChange = (value: string) => {
    setArea(value)
    setIsOpen(false)
  }

  const toggleDropdown = () => setIsOpen(!isOpen)

  useEffect(() => {
    setPrevArea(area)
  }, [area])

  return (
    <nav
      className={`flex flex-col items-center justify-center text-center  text-3xl font-semibold tracking-wider text-white z-30 mt-2 custom:text-shadow-3 text-shadow-7 gap-2 bg-[#f382bc] rounded-xl w-fit p-2 border-4`}
    >
      <h1>Tour Activites</h1>

      <div className="flex gap-2">
        <h2 className={`transition-all duration-150 ease-in-out flex gap-1`}>
          <HeartSolid key={`${area} 1`} />
        </h2>

        <div className="dropdown relative">
          <button
            onClick={toggleDropdown}
            className="dropdownShadow rounded px-2 w-[150px]"
          >
            {area.charAt(0).toUpperCase() + area.slice(1)}
          </button>
          {isOpen && (
            <div className="absolute top-12  bg-[#f382bc]  newShadow rounded-lg z-40 w-[150px] textShadowNone">
              <div
                className="cursor-pointer hover:bg-pink-300 px-2 rounded-lg"
                onClick={() => handleAreaChange('ueno')}
              >
                Ueno
              </div>
              <div
                className="cursor-pointer hover:bg-pink-300 px-2 rounded-lg"
                onClick={() => handleAreaChange('asakusa')}
              >
                Asakusa
              </div>
            </div>
          )}
        </div>

        <h2 className={`transition-all duration-150 ease-in-out flex gap-1`}>
          <HeartSolid2 key={`${area} 2`} />
        </h2>
      </div>

      {/* <div className="flex gap-2">
        <h2
          className={`${
            area === 'ueno' && 'opacity-50'
          } cursor-pointer transition-all duration-150 ease-in-out flex gap-1`}
          onClick={() => setArea('asakusa')}
        >
          {area === 'asakusa' ? <HeartSolid /> : <HeartOutline />}
          <span
            className={`${area !== 'ueno' && 'textGradient textShadowNone'} `}
          >
            Asakusa
          </span>
        </h2>
        {area === 'asakusa' ? <ArrowRight /> : <ArrowLeft />}

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
          {area === 'ueno' ? <HeartSolid /> : <HeartOutline />}
        </h2>
      </div> */}
    </nav>
  )
}
