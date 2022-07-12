import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

import ReactFullpage from '@fullpage/react-fullpage'
import { renderToHTML } from 'next/dist/server/render'

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <div>
          <html data-theme="synthwave"></html>
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        </div>
      )
    }}
  />
)

const Home: NextPage = () => {
  const [anim, setAnim] = useState(false)
  const [anim1, setAnim1] = useState(false)
  const [anim2, setAnim2] = useState(false)
  const [anim3, setAnim3] = useState(false)
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="hero min-h-screen bg-base-200">
                  <div className="hero-content text-center">
                    <div className="max-w-md" >
                      <h1 className="lg:text-7xl xs:text-5xl sm:text-6xl md:text-7xl font-bold">Finn Jefferis</h1>
                      <p className="py-6 text-2xl">
                        {' '}
                        Web developer with a focus on React and Node.js.
                      </p>
                      <button
                        className="btn btn-outline btn-secondary w-full   "
                        onClick={() => fullpageApi.moveSectionDown()}
                      >
                        Get Started
                      </button>
                   
                   
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="section">
                <div className="text-center ">
                  <p>About me</p>
                  <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"

>
<a
  href="https://github.com/finnjefferis/super-quicksort"
  className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
>
   <button
className={`${
  anim && "animate-ping"
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
  <button
className={`${
  anim1 && "animate-ping"
} bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
onClick={() => {
  setAnim1(true);
}}
onAnimationEnd={() => setAnim1(false)}
>
  <h3 className="text-2xl font-bold">react-form-builder &rarr;</h3>
  <p className="mt-4 text-xl">
    Forked from Kiho/react-form-builder. Used in version 4 of Admor DentalPlus software
  </p>
  </button>
</a>

<a
  href="https://github.com/finnjefferis/with-tailwindcss-app"
  className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
>
  <button
className={`${
  anim2 && "animate-ping"
} bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
onClick={() => {
  setAnim2(true);
}}
onAnimationEnd={() => setAnim2(false)}
>

  <h3 className="text-2xl font-bold">website-portfolio &rarr;</h3>
  <p className="mt-4 text-xl">
    Repository for this landing page
  </p>
  </button>
</a>

<a
href="https://github.com/richard-dentalplus/v4"
className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
    <button
className={`${
  anim3 && "animate-ping"
} bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
onClick={() => {
  setAnim3(true);
}}
onAnimationEnd={() => setAnim3(false)}
>
  <h3 className="text-2xl font-bold">v4&rarr;</h3>
  <p className="mt-4 text-xl">
    <div>
      Version 4 of Admor DentalPlus software. My current project!
    </div>
  </p>
  </button>
</a>
</div>
                </div>
              </div>
            
              <div className="section min-h-screen bg-base-200">
                <div className=" text-center">
                  <p>Section 2</p>
                  
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )

 
 

  
       
   
  
}

export default Home
