import Head from 'next/head'
import Image from 'next/image'
import { ReactElement, useEffect } from 'react'
import Layout from '../components/layouts/Layout'
import SectionBox from '../components/layouts/SectionBox'
import { useMask } from '../context/MaskContext'
import { NextPageWithLayout } from './_app'
import heroImage from '../public/assets/bg.jpg'

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


  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionBox layout='center' className=''>
        <div className="z-10">
          <h1 className="text-6xl font-bold">
            This is a full screen{" "}
            <span className="text-warning underline-animation" >
              SectionBox
            </span>
          </h1>
        </div>
        <div className="absolute top-0 w-full h-full blur brightness-65">
          {/* <Image layout="responsive" className="invisible lg:visible h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={heroImage} /> */}
          {/* <Image layout="responsive" className="invisible 2xl:visible object-cover w-full h-full" src={heroImage} /> */}
          <Image layout="fill" className=" object-cover w-full h-full" src={heroImage} />
        </div>
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
