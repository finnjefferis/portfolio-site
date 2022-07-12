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
                  <p className="text-5xl text-accent font-semibold">About me</p>
                  <p>1 year web developer experience using React, Next.js, Node, Electron, </p>
                  <p>Frontend technologies: HTML, CSS, Tailwind, Javascript, React, Next.js</p>
                  <p>Backend technologies: Node, Express, MongoDB, GraphQL, Apollo, Prisma, MySQL </p>
                  <p> Dev tools: Git, NPM, </p>
                 
                </div>
              </div>
            
              <div className="section min-h-screen bg-base-200">
                <div className=" text-center">
                  <p className="text-secondary font-semibold text-5xl">Experience</p>
                  <p> Previous projects: Signage, V4, this website</p>
                  <p>Experience: Shore Group, DentalPlus, A Levels </p>
                  
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
