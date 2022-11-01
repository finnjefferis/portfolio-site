import { AiFillHtml5, AiFillGithub, AiFillPhone } from 'react-icons/ai'

import Modal from './components/Modal'
import Timeline from './components/Timeline'
import  ThemeGenerator  from './components/ThemeGenerator'

import { MdEmail, MdOutlineEmail, MdLocationOn } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import { FiFramer } from 'react-icons/fi'

import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useSpring,
} from 'framer-motion'

import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

import { themeChange } from 'theme-change'

import { useInView } from 'react-intersection-observer'

const themes = [
  'dracula',
  'cupcake',
  'corporate',
  'synthwave',
  'cyberpunk',
  'forest',
  'lofi',
  'fantasy',
  'black',
  'autumn',
  'coffee',
  'winter',
]

const Home = () => {
  let randomNumber = Math.floor(Math.random() * themes.length)
  const [theme, setTheme] = useState('lofi')

  const whyMeRef = useRef(null)
  //animation consts for text animation

  const line1 = 'Web developer focusing on Next.js.'

  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.4, staggerChildren: 0.02 } },
  }

  const title = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  }



  const name = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1 } },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  //animation consts for scroll animation
  const { scrollYProgress } = useScroll({
    container: whyMeRef,
    target: whyMeRef,
  })

  useEffect(() => {
    let scrollToWhyMe = document.querySelector('#scroll-why-me')
    let whyMe = document.querySelector('#why-me')

    scrollToWhyMe.addEventListener('click', function () {
      whyMe.scrollIntoView()
    })

    // let scrollToContactMe = document.querySelector('#scroll-contact-me')
    // let contactMe = document.querySelector('#contact-me')

    // scrollToContactMe.addEventListener('click', function () {
    //   contactMe.scrollIntoView()
    // })
  }, [])

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
    setTheme(themes[randomNumber])
  }, [])

  function corporateTheme() {
    setTheme('corporate')
  }

  function synthwaveTheme() {
    setTheme('synthwave')
  }

  function cyberpunkTheme() {
    setTheme('cyberpunk')
  }

  function forestTheme() {
    setTheme('forest')
  }

  function lofiTheme() {
    setTheme('lofi')
  }

  function fantasyTheme() {
    setTheme('fantasy')
  }

  function blackTheme() {
    setTheme('black')
  }

  function autumnTheme() {
    setTheme('autumn')
  }

  function coffeeTheme() {
    setTheme('coffee')
  }

  function winterTheme() {
    setTheme('winter')
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

      <ThemeGenerator />
      <div className="section ">
        <div className="text-center text-primary  ">
          <div className="wrapper z-10"></div>
          <div className=" ">
            <div className="hero  min-h-screen">
              <motion.div
                variants={title}
                initial="hidden"
                animate="visible"
                className="mask-parallelogram-4 inline-block min-h-full min-w-full gap-1 overflow-hidden"
              >
                <div className="  h-screen origin-top-left  -rotate-45 transform bg-gradient-to-r from-primary via-accent to-secondary lg:origin-top-right"></div>
              </motion.div>
              {/* <motion.div
                variants={title}
                initial="hidden"
                animate="visible"
                className="mask-parallelogram-4 inline-block min-h-full min-w-full gap-1 overflow-hidden"
              >
                <div className="  h-screen origin-bottom-right  -rotate-45 transform bg-gradient-to-r from-primary via-accent to-secondary md:origin-top-right"></div>
              </motion.div> */}

              <motion.div
                variants={title}
                initial="hidden"
                animate="visible"
                className=" dropdown absolute top-5 left-5 z-20"
              >
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
                  </li>
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
                  <label htmlFor="theme-modal" className="modal-button btn">
                    ???
                  </label>
                </ul>
              </motion.div>

              <div className=" z-10 text-center sm:my-64 md:my-36 lg:my-0 xs:py-64 ">
                <div className="">
                  <motion.h1
                    variants={name}
                    initial="hidden"
                    animate="visible"
                    className="m-1 my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-left font-bungee-shade   text-5xl font-extrabold   text-transparent md:mt-20 md:text-8xl  lg:mt-0  lg:text-7xl xl:text-7xl"
                  >
                    Finn Jefferis
                    <br />
                  </motion.h1>

                  <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="text-l my-5 bg-gradient-to-r from-primary via-accent  to-secondary bg-clip-text font-semibold text-transparent sm:text-xl md:text-2xl"
                  >
                    {line1.split('').map((char, index) => {
                      return (
                        <motion.span key={char + '-' + index} variants={letter}>
                          {char}
                        </motion.span>
                      )
                    })}
                    <br />
                  </motion.h1>

                  <motion.a
                    variants={title}
                    initial="hidden"
                    animate="visible"
                    href="https://github.com/finnjefferis"
                    className="btn btn-primary  m-1 "
                  >
                    Github
                  </motion.a>
                </div>

                <motion.a
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  className="btn btn-secondary z-10 m-1"
                  id="scroll-why-me"
                >
                  Why Me?
                </motion.a>

                <motion.label
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  htmlFor="my-modal-4"
                  className="modal-button btn btn-accent m-1"
                >
                  View CV
                </motion.label>
              </div>
            </div>
          </div>
          <Modal />
          <div id="why-me">
            <Timeline />
          </div>
        </div>
      </div>

      <div className="section   " id="contact-me">
        <div className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text   text-center   font-bungee-shade text-7xl font-extrabold text-transparent">
          Get in touch
        </div>
        <div className="dark grid grid-cols-2 grid-rows-none gap-1 overflow-hidden ">
          <div className="  text-center overflow-hidden text-center display-block  m-16 ">
            <div className="box flex text-2xl justify-center">
       
            <MdOutlineEmail className="text-primary m-1"/>  finnjefferis@gmail.com 
            </div>

            <div className="box flex text-2xl  justify-center">
            <AiFillPhone className="text-primary m-1"/>   business phone? 
            </div>
            <div className="box flex text-2xl justify-center">
              
            <MdLocationOn className="text-primary m-1"/>  Brighton, UK
            </div>
          </div>
          <div className="item mockup-code text-center m-16">
          <pre data-prefix="$">
              <code>Anything to ask?</code>
            </pre>
            <pre data-prefix="$">
              <code>Send me a message!</code>
            </pre>
         
            <pre data-prefix=">" className="text-warning ">
              <code>
                
               
                <motion.a animate={{ opacity: [0, 1, 1, 0] }}   transition={{ repeat: Infinity, delay: 0.5}}
                 className="h-6 w-4 bg-warning"> </motion.a><input className="bg-black" />
              </code>
            </pre>
          
          </div>
        </div>
      </div>
      <footer className="footer footer-center bg-secondary p-10 text-secondary-content ">
        <div className="">
          <div className="grid grid-flow-col gap-4 ">
            <a
              href="https://www.linkedin.com/in/finlay-jefferis-80a417234/"
              className=""
            >
              <span>
                <BsLinkedin size={30} />
              </span>
            </a>
            <a href="https://github.com/finnjefferis" className="">
              <span>
                <AiFillGithub size={30} />
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/finlay-jefferis-80a417234/"
              className=""
            >
              <span>
                <MdEmail size={30} />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
