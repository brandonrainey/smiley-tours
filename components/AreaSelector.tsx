
import React from 'react'

interface AreaSelectorProps {
  area: string
  setArea: any
}

export default function AreaSelector({ area, setArea }: AreaSelectorProps) {
  return (
    <h1
      className={`flex items-center justify-center text-center  text-3xl font-semibold tracking-wider text-white z-30 mt-2 custom:text-shadow-3 text-shadow-7 gap-2 bg-[#f382bc] rounded-xl w-fit p-2 border-4`}
    >
      <p
        className={`${
          area === 'ueno' && 'opacity-50'
        } cursor-pointer transition-all duration-150 ease-in-out `}
        onClick={() => setArea('asakusa')}
      >
        {area === 'asakusa' ? (
          <i className="fa-solid fa-heart text-pink-200 animate-wiggle-more"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
        <span
          className={`${area !== 'ueno' && 'textGradient textShadowNone'} `}
        >
          Asakusa
        </span>
      </p>
      {area === 'asakusa' ? (
        <i className={`fa-solid fa-arrow-right `}></i>
      ) : (
        <i className="fa-solid fa-arrow-left"></i>
      )}

      <p
        className={`${
          area === 'asakusa' && 'opacity-50'
        } cursor-pointer transition-all duration-150 ease-in-out`}
        onClick={() => setArea('ueno')}
      >
        <span
          className={`${area !== 'asakusa' && 'textGradient textShadowNone'} `}
        >
          Ueno
        </span>
        {area === 'ueno' ? (
          <i className="fa-solid fa-heart text-pink-200 animate-wiggle-more"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </h1>
  )
}
