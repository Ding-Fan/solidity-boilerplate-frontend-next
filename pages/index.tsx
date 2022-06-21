import Head from 'next/head'
import Image from 'next/image'
import { ReactElement, useEffect } from 'react'
import Layout from '../components/layouts/Layout'
import SectionBox from '../components/layouts/SectionBox'
import { useMask } from '../context/MaskContext'
import { NextPageWithLayout } from './_app'
import heroImage from '../public/assets/bg.jpg'
import Link from 'next/link'

const Home: NextPageWithLayout = () => {

  const { setHasMask } = useMask()

  useEffect(() => {

    setHasMask(true)
    const id = setTimeout(() => {
      setHasMask(false)
    }, 3000)

    return () => {
      clearTimeout(id)
    }
  }, [])

  const bookmarks =
  {
    sections: [
      {
        name: '',
        icon: '',
        items: [
          {
            "title": "Telegram",
            "description": "",
            "icon": "fab fa-telegram",
            "url": "https://web.telegram.org/k/",
            "target": "newtab",
            "color": "#25a4e2",
            "id": "2_1381_telegram"
          },
          {
            "title": "Mastodon",
            "description": "",
            "icon": "fab fa-mastodon",
            "url": "https://mastodon.online/",
            "target": "newtab",
            "color": "#2b90d9",
            "id": "0_1381_mastodon"
          }
        ]
      },
      {
        name: '',
        icon: '',
        items: [
          {
            "title": "tailwindCSS",
            "url": "https://tailwindcss.com/docs/visibility#making-elements-invisible",
            "id": "5_278_tailwindcss"
          }
        ]
      }
    ]
  }



  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionBox layout='center' className='relative'>
        <div className="z-10">
          <h1 className="text-6xl font-bold">
            This is a full screen{" "}
            <span className="text-warning underline-animation" >
              SectionBox
            </span>
          </h1>
        </div>
        <div className="absolute w-full h-full blur brightness-65">
          {/* <Image layout="responsive" className="invisible lg:visible h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={heroImage} /> */}
          {/* <Image layout="responsive" className="invisible 2xl:visible object-cover w-full h-full" src={heroImage} /> */}
          {/* <Image layout="fill" className=" object-cover w-full h-full" src={heroImage} /> */}
        </div>
      </SectionBox>
      <SectionBox id="partA" className='flex flex-col gap-5' >
        {
          bookmarks.sections.map(i => {
            return (

              <div className="section flex flex-col gap-2">
                {
                  i.items.map(j => {
                    return (
                      <a className='cursor-pointer border-2 bg-yellow-800' target={j.target ?? '_blank'} href={j.url}>
                        {j.title}
                      </a>
                    )

                  })
                }

              </div>
            )
          })

        }
      </SectionBox>
      <SectionBox id="partB"  >
        partB
      </SectionBox>
      <SectionBox id="partC"  >
        partC
      </SectionBox>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}


Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
