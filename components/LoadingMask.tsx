import anime from 'animejs'
// import { AnimeInstance } from 'animejs'
import React, { useEffect, useState } from 'react'
import SectionBox from './layouts/SectionBox'
import MainLogoSVG from './SVG/MainLogoSVG'

type Props = {}

const LoadingMask = (props: Props) => {


  // const [animationRef, setAnimationRef] = useState<AnimeInstance>()

  useEffect(() => {
    // anime({
    //   targets: ['.main-logo-svg-mask path'],
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'easeInCirc',
    //   duration: 1500,
    //   delay: function (el, i) { return i * 500 },
    //   direction: 'alternate',
    //   loop: true
    // })

    anime({
      targets: ".loading-mask",
      easing: "easeOutCirc",
      duration: 3000,
      opacity: [
        { value: 1, duration: 0 },
        { value: 1, duration: 1500 },
        { value: 0, duration: 3000 }
      ]
    })


    return () => {
    }
  }, [])


  return (
    <SectionBox layout="center" className="loading-mask fixed top-0 left-0 z-40">
      <div className="bg-black absolute w-full h-full"></div>
      {/* <MainLogoSVG className="main-logo-svg-mask z-50" /> */}
      slogan
    </SectionBox>
  )
}

export default LoadingMask