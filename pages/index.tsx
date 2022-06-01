import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'



const Home: NextPage = () => {
  const [anim, setAnim] = useState(false)
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hi there,{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            I'm Finn
          </a>
        </h1>

        <p className="mt-3 text-xl">
          Junior software developer focusing on React and Node.js.
          
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"
          
          >
          <a
            href="https://github.com/finnjefferis/super-quicksort"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
             <button
          className={`${
            anim && "animate-wiggle"
          } bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
          onClick={() => {
            setAnim(true);
          }}
          onAnimationEnd={() => setAnim(false)}
        >
            <h3 className="text-2xl font-bold ">
              super-quicksort &rarr;
            </h3>
            <p className="mt-4 text-xl">
            Quick-sort algorithm written in Python using termplotlib to visualise results in-console. Developed for educational purposes.
            </p>
            </button>
          </a>

          <a
            href="https://github.com/finnjefferis/react-form-builder"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            
          >
            <h3 className="text-2xl font-bold">react-form-builder &rarr;</h3>
            <p className="mt-4 text-xl">
              Forked from Kiho/react-form-builder. Used in version 4 of Admor DentalPlus software
            </p>
          </a>

          <a
            href="https://github.com/finnjefferis/with-tailwindcss-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">website-portfolio &rarr;</h3>
            <p className="mt-4 text-xl">
              Repository for this landing page
            </p>
          </a>

          <a 
          href="https://github.com/richard-dentalplus/v4"
          className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 hover:animate-ping">
            <h3 className="text-2xl font-bold">v4&rarr;</h3>
            <p className="mt-4 text-xl">
              <div>
                Version 4 of Admor DentalPlus software. My current project!
              </div>
            </p>
          </a>
        </div>
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
      
      </footer> */}
    </div>
  )
}

export default Home
