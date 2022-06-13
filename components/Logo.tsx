import React, { useCallback } from 'react'
import logoHorizontal from '../public/assets/logo-horizontal.svg'
import logoVertical from '../public/assets/logo-vertical.svg'
import Image, { ImageProps } from 'next/image'

type Props = {
  width: ImageProps['width']
  height?: ImageProps['height']
  type: 'horizontal' | 'vertical'
}

const Logo = ({ width, height, type }: Props) => {

  const getLogo = useCallback(
    () => {
      switch (type) {
        case 'vertical':
          return logoVertical
        case 'horizontal':
          return logoHorizontal
        default:
          return logoHorizontal
      }
    },
    [type],
  )

  return (
    <Image width={width} height={height} src={getLogo()} alt="logo" />
  )
}

export default Logo