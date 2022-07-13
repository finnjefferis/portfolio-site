import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'
import {FaCss3Alt, FaReact} from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPostgresql } from 'react-icons/si'

import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";
import ReactFullpage from '@fullpage/react-fullpage'
import { renderToHTML } from 'next/dist/server/render'
import { themeChange } from 'theme-change'



const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={'YOUR_KEY_HERE'}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <div>
        
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
  const [theme, setTheme] = useState('dracula')
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
  }, [])

  
  

  const Icons = [
    <div>
  <SiJavascript/>
  <SiTailwindcss/>
  <SiNextdotjs/>
  <SiNodedotjs/>
  <SiPostgresql/>
  <FaCss3Alt/>
  <FaReact/>
  <AiFillHtml5/>
  <AiFillGithub/>
</div>

  ]

  function lightTheme(){
    setTheme('light')
   
  }

  function darkTheme(){
    setTheme('dark')
  }

  function luxuryTheme(){
    setTheme('luxury')
  }

  function draculaTheme(){
    setTheme('dracula')
  }

  function businessTheme(){
    setTheme('business')
  }
  return (
    <div data-theme={theme}>
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
                <div className="dropdown absolute top-3 left-3">
  <label tabindex="0" class="btn m-1">Theme</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-secondary">
    <li><a onClick={lightTheme}>Light</a></li>
    <li><a onClick={darkTheme}>Dark</a></li>
    <li><a onClick={luxuryTheme}>Luxury</a></li>
    <li><a onClick={draculaTheme}>Dracula</a></li>
    <li><a onClick={businessTheme}>Business</a></li>
  </ul>
</div>
                  <div className="hero-content text-center">
              
                    <div className="max-w-md" >
                      <h1 className="lg:text-7xl xs:text-5xl sm:text-6xl md:text-7xl font-bold">Finn Jefferis</h1>
                      <p className="py-6 text-2xl">
                        {' '}
                        Web developer with a focus on React and Node.js.
                      </p>
                 
                   
                        
                      
                  
                        <a href="https://github.com/finnjefferis"      className="btn btn-outline btn-accent w-full   ">Github</a>
                  
                   
                   
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="section min-h-screen ">
                <div className=" text-center">
                  <p className="text-secondary font-semibold text-5xl">Experience</p>
                  <p> Previous projects: Signage, V4, this website</p>
                  <p>Experience: Shore Group, DentalPlus, A Levels </p>
                  <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
</div>       
                </div>
              </div>

              <div className="section min-h-screen bg-base-200">
                <div className="text-center ">
                  <p className="text-5xl text-accent  font-semibold">About me</p>
                  <p>1 year web developer experience using React, Next.js, Node, Electron, </p>
                  <p>Frontend technologies: HTML, CSS, Tailwind, Javascript, React, Next.js</p>
                  <p>Backend technologies: Node, Express, PostgreSQL, GraphQL, Apollo, Prisma, MySQL </p>
                  <p> Dev tools: Git, NPM, </p>
                  <Marquee velocity={12} minScale={0.7} resetAfterTries={200} scatterRandomly>
    {times(5, Number).map((id) => (
      <Motion
        key={`child-${id}`}
        initDeg={randomIntFromInterval(0, 360)}
        direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
        velocity={10}
        radius={50}
      >
       <SiJavascript/>
  <SiTailwindcss/>
  <SiNextdotjs/>
  <SiNodedotjs/>
  <SiPostgresql/>
  <FaCss3Alt/>
  <FaReact/>
  <AiFillHtml5/>
  <AiFillGithub/>
      
      </Motion>
    ))}
  </Marquee>
                 
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
