import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'

import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
} from 'react-icons/si'

import { FiFramer } from 'react-icons/fi'

import { motion, useScroll, useTransform, useAnimation } from 'framer-motion'

import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { themeChange } from 'theme-change'

import { useInView } from 'react-intersection-observer'

const themes = [
  'dracula',

  'cupcake',


  'emerald',
  'corporate',
  'synthwave',
  'cyberpunk',

  'forest',
  'aqua',
  'lofi',
  'fantasy',

  'black',
  'autumn',
  
  'night',
  'coffee',
  'winter',
]

const Home = () => {
  //animation consts for text animation

  const line1 = "Web developer with a focus on React and Node.js"
  

  const sentence = {
    hidden: {opacity:1},
    visible: {opacity:1, transition:{delay: 0.4, staggerChildren: 0.02},},


  }

  const title = {
    hidden: {opacity:0},
    visible: {opacity:1, transition:{delay: 0.3, },},
  }

  const name = {
    hidden: {opacity:0},
    visible: {opacity:1, transition:{delay: 0.2, },},
  }

  const letter = {
    hidden: {opacity:0, y:50},
    visible: {opacity:1, y:0},
  }


  // useEffect(() => {
  //   // let scrollToWhyMe = document.querySelector('#scroll-why-me')
  //   // let whyMe = document.querySelector('#why-me')

  //   // scrollToWhyMe.addEventListener('click', function () {
  //   //   whyMe.scrollIntoView()
  //   })

  //   // let scrollToContactMe = document.querySelector('#scroll-contact-me')
  //   // let contactMe = document.querySelector('#contact-me')

  //   // scrollToContactMe.addEventListener('click', function () {
  //   //   contactMe.scrollIntoView()
  //   })
  // }, [])
  let randomNumber = Math.floor(Math.random() * themes.length)
  const [theme, setTheme] = useState('lofi')
  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
    setTheme(themes[randomNumber])
  }, [])

  function lightTheme() {
    setTheme('light')
  }

  function cupcakeTheme() {
    setTheme('cupcake')
  }

  function bumblebeeTheme() {
    setTheme('bumblebee')
  }

  function emeraldTheme() {
    setTheme('emerald')
  }
  function corporateTheme() {
    setTheme('corporate')
  }

  function synthwaveTheme() {
    setTheme('synthwave')
  }
  function retroTheme() {
    setTheme('retro')
  }

  function cyberpunkTheme() {
    setTheme('cyberpunk')
  }

  function valentineTheme() {
    setTheme('valentine')
  }

  function halloweenTheme() {
    setTheme('halloween')
  }

  function forestTheme() {
    setTheme('forest')
  }

  function lofiTheme() {
    setTheme('lofi')
  }

  function pastelTheme() {
    setTheme('pastel')
  }

  function fantasyTheme() {
    setTheme('fantasy')
  }

  function wireframeTheme() {
    setTheme('wireframe')
  }

  function blackTheme() {
    setTheme('black')
  }

  function cmykTheme() {
    setTheme('cmyk')
  }

  function autumnTheme() {
    setTheme('autumn')
  }

  function acidTheme() {
    setTheme('acid')
  }

  function lemonadeTheme() {
    setTheme('lemonade')
  }

  function coffeeTheme() {
    setTheme('coffee')
  }

  function winterTheme() {
    setTheme('winter')
  }

  function darkTheme() {
    setTheme('dark')
  }

  function draculaTheme() {
    setTheme('dracula')
  }

  function businessTheme() {
    setTheme('business')
  }

  return (
    <div data-theme={theme}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="section ">
        <div className="text-center text-primary  ">
          <div className="wrapper z-10"></div>
          <div className=" ">
            <div className="hero  min-h-screen">
              <motion.div variants={title} initial="hidden" animate="visible" className="mask-parallelogram-4 inline-block min-h-full min-w-full gap-1 overflow-hidden">
                <div className="  min-h-screen origin-top-right -rotate-45 transform bg-gradient-to-r from-primary via-accent to-secondary"></div>
              </motion.div>
              <motion.div variants={title} initial="hidden" animate="visible" className="dropdown absolute top-5 left-5 z-20">
                <label tabIndex="0" className="btn m-1">
                  {theme}
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu rounded-box   overflow-scroll bg-accent p-2 text-accent-content   shadow lg:h-auto"
                >
                
                  <li>
                    <a onClick={draculaTheme}>Dracula</a>
                  </li>
                  <li>
                    <a onClick={businessTheme}>Business</a>
                  </li>
                
                  <li>
                    <a onClick={corporateTheme}>Corporate</a>
                  </li>
                  <li>
                    <a onClick={synthwaveTheme}>Synthwave</a>
                  </li>
                  <li>
                    <a onClick={cyberpunkTheme}>Cyberpunk</a>
                  </li>
               
                  <li>
                    <a onClick={forestTheme}>Forest</a>
                  </li>{' '}
                  <li>
                    <a onClick={lofiTheme}>lofi</a>
                  </li>
                  <li>
                    <a onClick={fantasyTheme}>Fantasy</a>
                  </li>
                  <li>
                    <a onClick={blackTheme}>Black</a>
                  </li>
                  <li>
                    <a onClick={autumnTheme}>Autumn</a>
                  </li>
                  <li>
                    <a onClick={coffeeTheme}>Coffee</a>
                  </li>
                  <li>
                    <a onClick={winterTheme}>Winter</a>
                  </li>
                </ul>
              </motion.div>

              <div className=" z-10 text-center">
                <div>
                  <motion.h1 variants={name} initial="hidden" animate="visible" className="from-primary via-accent to-secondary font-bungee-shade   text-5xl font-bold text-base-content  sm:text-xl md:bg-gradient-to-r md:bg-clip-text md:text-7xl md:text-transparent lg:text-7xl">
               Finn Jefferis
                <br />
               
                  </motion.h1>

                  

                  <motion.h1 variants={sentence} initial="hidden" animate="visible"  className="text-l from-primary via-accent to-secondary py-6 font-semibold text-base-content sm:text-xl md:bg-gradient-to-r md:bg-clip-text md:text-2xl md:text-transparent">
             
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  )
                })}
                <br />
               
                  </motion.h1>
                  

                  <motion.a variants={title} initial="hidden" animate="visible"
                    href="https://github.com/finnjefferis"
                    className="btn btn-accent m-5 w-48 md:w-56 lg:w-64 "
                  >
                    Github
                  </motion.a>
                </div>
                {/* <a className="btn btn-primary z-10 m-1" id="scroll-why-me">
                  Why Me?
                </a>
                <a
                  className="btn  btn-secondary z-10 m-1"
                  id="scroll-contact-me"
                >
                  Get in Touch
                </a> */}
              </div>
            </div>
          </div>
          {/* <div className="mockup-code my-5 md:mx-96" id="why-me">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0 }}
            >
              <pre data-prefix="$" className="text-warning">
                <code>Upgrade to a website that is</code>
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.1 }}
            >
              <pre data-prefix=">" className="">
                <code>installing...</code>
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.2 }}
            >
              <pre data-prefix=">" className="">
                <code>installing...</code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.3 }}
            >
              <pre data-prefix=">" className="text-warning">
                <code>painless to maintain...</code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.4 }}
            >
              <pre data-prefix=">" className="">
                <code>installing...</code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.5 }}
            >
              <pre data-prefix=">" className="">
                <code>installing...</code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.6 }}
            >
              <pre data-prefix=">" className="text-warning ">
                <code>secure by design...</code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.7 }}
            >
              <pre data-prefix=">" className="">
                <code>installing...</code>
              </pre>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-5, 0], opacity: 1 }}
              transition={{ repeat: 0, duration: 0.5, delay: 0.8 }}
            >
              <pre data-prefix=">" className="">
                <code>installing...</code>
              </pre>
            </motion.div>

          </div>{' '}
          <div className="items-center justify-center space-x-5 space-y-5 md:flex">
            <div className="item "></div>
            <div className="item  ">
              <div className="mockup-window border bg-base-300">
                <div className="flex justify-center bg-base-200 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl  font-semibold text-transparent md:px-80 md:py-40">
                  <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                    Looks stunning
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="mockup-phone border-primary">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                      Consistent
                    </div>
                    <div className="">on any device</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            Modern Tools
            <div className="grid grid-cols-2 grid-rows-2 gap-2 overflow-hidden">
              <div className="box row-span-2 bg-primary">
                {' '}
                <div className="item  content-center items-center rounded-full bg-primary-content text-center">
                  <FaReact size={70} />
                  React
                </div>
                <div className="item rounded-full bg-primary-content">
                  <SiNextdotjs size={70} />
                  Next.js
                </div>
                <div className="item rounded-full bg-primary-content">
                  <SiNodedotjs size={70} />
                  Node.js
                </div>
              </div>
              <div className="box bg-secondary">
                {' '}
                <div className="item h-32 w-32 bg-secondary-content">
                  {' '}
                  <SiTailwindcss size={70} />
                  Tailwind
                </div>
                <div className="item h-32 w-32 bg-secondary-content">
                  {' '}
                  <FiFramer size={70} />
                  Framer Motion
                </div>
              </div>
              <div className="box bg-accent">
                <div className="item h-32 w-32 bg-accent-content">
                  {' '}
                  <SiPostgresql size={70} />
                  PostgreSQL
     
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section" id="contact-me">
        <div className="  bg-base-100 md:flex"></div>
        <footer className="footer footer-center bg-secondary p-10 text-secondary-content">
          <div>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="inline-block fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p className="font-bold">Jefferis Software Services.</p>
            <p>Copyright © 2022 - All right reserved</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
    </div>
  )
}

export default Home
