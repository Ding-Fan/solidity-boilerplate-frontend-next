import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'

type Props = {
  fixed?: boolean
}

const styles = {
  header: "w-full z-20 py-2 flex justify-between px-5 font-bold text-white bg-transparent",
  item: 'invisible self-center lg:px-7 md:px-5 py-3 md:visible cursor-pointer underline-animation',
  logo: 'self-center'
}

const Header = ({ fixed }: Props) => {
  return (
    <div className={styles.header + ' ' + (fixed ? 'fixed' : 'absolute')}>
      <div >
        <Link href='/' passHref >
          <a className="flex content-center">
            <Logo width={180} height={56} type="horizontal" />
          </a>
        </Link>
      </div>
      {/* <div className="test">
        <div className="outer">
          <div className="inner">
            inner
          </div>
        </div>
      </div> */}
      <div className="flex ">
        {
          [
            // [
            //   'Home',
            //   '/'
            // ],
            [
              'Part A',
              '/#partA'
            ],
            [
              'Part B',
              '/#partB'
            ],
            [
              'Part C',
              '/#partC'
            ],
          ].map(
            ([title, href]) => (
              <div key={title} className="self-center">
                <Link href={href}>
                  <span className={styles.item}>
                    {title}
                  </span>
                </Link>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Header