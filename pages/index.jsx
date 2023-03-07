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

<<<<<<< Updated upstream

=======
  
  const waves = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.9 } },
  }
>>>>>>> Stashed changes

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
    // let scrollToWhyMe = document.querySelector('#scroll-why-me')
    // let whyMe = document.querySelector('#why-me')

    // scrollToWhyMe.addEventListener('click', function () {
    //   whyMe.scrollIntoView()
    // })

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

<<<<<<< Updated upstream
=======
  function Modal() {
    return (
      <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h1 className="text-xl font-bold">Finn Jefferis</h1>
            <h3 className=" font-semibold">Professional Summary</h3>
            <div>
              Software developer with solid foundational knowledge, experience
              in modern web development and a commitment to always keep
              learning.
            </div>
            <div className="py-4 text-left">
              <div className="text-xl text-center font-semibold">Skills </div>

              <div>
                Experience in full-stack web app development using frameworks
                such as React and Next.js.
              </div>
              <div>- Designed websites using JavaScript, HTML, and CSS.</div>
              <div>- Comfortable writing clean and efficient SQL.</div>
              <div>
                - Experience with Electron and writing browser extensions.
              </div>
              <div>
                Familiar with other programming languages such as Python, C# and
                PHP.
              </div>
              <div>- Fast and intentional learner. </div>
              <div>- Focused & Patient.</div>
              <div>- Dedicated team player.</div>
              <div>- Thrives in fast-paced environment.</div>
              <div>- Quick problem solver.</div>
              <div>- High energy.</div>
              <div>- Committed team player.</div>
              <div>- Organised multi-tasker.</div>
              <div>
                - Passionate about software development and always eager to
                learn something new.
              </div>
            </div>
            <div className=" text-xl font-semibold">
              Junior Software Developer at Admor DentalPlus
            </div>
            <div className="text-xl"> 9/5/2022 - 4/10/2022 </div>
            <div className="text-left">
              <div>
                - Assisted in the design and full-stack development of a modern
                web app for dental practices
              </div>
              <div>
                - Used Next.js and component libraries Syncfusion and Bootstrap
                for the front-end.
              </div>
              <div>
                - Wrote SQL statements using PostgreSQL & PGadmin 4 to handle
                database interaction.
              </div>
              <div>- Translated legacy PHP scripts into modern Javascript.</div>
              <div>
                - Paid careful attention to performance & React best practices
                to ensure an optimised and secure experience.
              </div>
              <div>
                - Wrote a browser extension for deeper system-level integration.
              </div>
            </div>

            <div className=" text-xl font-semibold">
              Software Developer Apprentice at The Shore Group
            </div>
            <div className="text-xl"> 18/8/2021 – 5/5/2022 </div>
            <div className="text-left">
              <div>
                - Took personal ownership of a project and worked around the
                clock to ensure it shipped on time and to a high standard.
              </div>
              <div>
                - Developed a bespoke digital signage solution using React and
                TailwindCSS for the front-end and cutting-edge headless content
                management systems like Strapi and Keystone to power the
                back-end.
              </div>
              <div>
                - Learned on the job continuously throughout the experience.
              </div>
              <div>- Self-motivated and highly organised</div>
              <div>
                - Familiar with modern development tools such as Git and Node.js
              </div>
              <div>
                - Cleaned up and maintained our RDBMS to ensure compatibility
                with custom software
              </div>
              <div>
                - Assisted colleagues with a plethora of general IT issues
              </div>
              <div></div>
            </div>

            <div className="text-xl font-semibold">Education</div>
            <div className="text-left">
              - BCS Level 3 Certificate in Programming{' '}
            </div>
            <div className="text-left">
              - BCS Level 3 Certificate in Software Development Context and
              Methodologies{' '}
            </div>
            <div className="text-left font-semibold">
              A Levels - 2018 - 2021
            </div>
            <div className="text-left">- Computer Science</div>
            <div className="text-left">- Electronics </div>
            <div className="text-left">- Engineering CAMTEC</div>
            <div className="text-left"></div>
          </label>
        </label>
      </div>
    )
  }

  function WhyMe() {
    return (
      <div ref={whyMeRef}>
        <div className="">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: [1, 1, 0, 0, 0],
              scale: [1, 2, 2],
              delay: 1,
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="mockup-code my-5 md:mx-96"
            id="why-me"
          >
            <pre data-prefix="$" className="text-warning">
              <code>Upgrade to a website that is</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="text-warning">
              <code>painless to maintain...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="text-warning ">
              <code>secure by design...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>

            <pre data-prefix=">" className="">
              <code>installing...</code>
            </pre>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 0, 1, 0, 0],
              scale: [1, 2, 1],
              delay: 1,
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            className="mockup-window border bg-base-300 "
          >
            <div className="flex justify-center bg-base-200 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl  font-semibold text-transparent  ">
              <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                Looks stunning
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: [0, 0, 0, 1, 0],
            scale: [1, 2, 1, 1],
            delay: 1,
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="mockup-phone border-primary"
        >
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                Consistent
              </div>
              <div className="">on any device</div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  function Timeline() {
    return (
      <div>
        <div className=" ">
          <div className="container mx-auto my-12 flex flex-col items-start sm:my-24 lg:flex-row">
            <div className="mt-2 flex w-full flex-col px-8 sm:top-36 sm:mt-12 lg:sticky lg:w-1/3">
              <div className="tracking-loose ml-2 uppercase text-accent">
                My experience
              </div>
              <div className="mb-2 text-3xl leading-normal lg:text-4xl lg:leading-relaxed">
                Why Me?
              </div>
              <div className="mb-4 text-sm  lg:text-base">
                Over a year of professional web dev experience.
              </div>
              <label
                htmlFor="my-modal-4"
                className="modal-button btn btn-outline"
              >
                View CV
              </label>
            </div>
            <div className="sticky ml-0 sm:ml-12 lg:w-2/3">
              <div className="container mx-auto h-full w-full ">
                <div className="wrap relative h-full overflow-hidden p-5  ">
                  {/* <div className="border-4-4  absolute  h-full border-y-0 border-r-4 lg:px-60 md:px-40 "></div>
                  */}
                      <div className="lg:mx-24 mx-4 right-timeline mb-8  flex w-full flex-row items-center md:mx-24 mx-4 ">
            

            <div className="order-1  py-4 text-left md:w-5/12">
<div className="mb-3 text-base text-secondary">
                Started January 2023
              </div>
              <h4 className="mb-3  font-bold md:text-2xl">
                Frontend Developer at Park Cameras
              </h4>
              <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
              -Oversaw design, development, testing and implementation of new frontend features while maintaining and overhauling legacy code
              </div>
              <div className=" my-1 leading-snug  text-opacity-100 md:text-base"> - Comprehensively designed, developed and implemented new pages and components</div>
              <div className=" my-1 leading-snug  text-opacity-100 md:text-base "> - Maintained old code on legacy platforms and frameworks</div>
              <motion.a
                variants={name}
                initial="hidden"
                whileInView="visible"
                className="flex  text-2xl  font-semibold text-accent"
              >
                Skills acquired:
                jQuery
                Foundation framework
                Figma
                <FaPython className="m-1"/>
                <FaPhp className="m-1"/>
              </motion.a>
            </div>
            </div>
                  
                  <div className="lg:mx-24 mx-4 right-timeline mb-8  flex w-full flex-row items-center md:mx-24 mx-4 ">
                  <div className="order-1 md:w-5/12"></div>

                    <div className="order-1  py-4 text-left md:w-5/12">
                      <div className="mb-3 text-base text-secondary">
                        Started October 2022
                      </div>
                      <h4 className="mb-3  font-bold md:text-2xl">
                        Software Engineer at CloudPerfect
                      </h4>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        - Oversaw development, implementation and maintenance of various business software for a variety of clients.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base"> - Mastered Deluge - a proprietary scripting language</div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base "></div>
                      <motion.a
                        variants={name}
                        initial="hidden"
                        whileInView="visible"
                        className="flex  text-2xl  font-semibold text-accent"
                      >
                        Skills acquired:
                        <FaPython className="m-1"/>
                        <FaPhp className="m-1"/>
                      </motion.a>
                    </div>
                  </div>

               

                  <div className="flex-row mx-4 text-left lg:mx-20 mb-8 flex w-full items-center justify-between">
            

                    <div className="order-1 py-4 text-left md:w-5/12">
                      {/* <motion.div
                        variants={timelineCard}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gradient-to-r from-primary via-accent to-secondary z-10"
                      > */}
                      <div className="mb-3 text-base text-secondary">
                        Started May 2022
                      </div>
                      <h4 className="mb-3  font-bold md:text-2xl">
                        Junior Software Developer at Admor DentalPlus Software
                        Ltd.
                      </h4>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        - Worked closely with a team to design and develop a
                        world-class dental application using Next.JS,
                        PostgreSQL, and SyncFusion component library.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base ">
                        - Developed a native C# app to allow deeper native
                        integration via a web extension.
                      </div>
                      <div className="">
                      <motion.div
                        variants={timelineCard}
                        initial="hidden"
                        whileInView="visible"
                        className="flex text-2xl font-semibold text-accent"
                      >
                        Skills acquired:
                        <SiNextdotjs className="m-1" />{' '}
                        <SiPostgresql className="m-1" />
                        <FaCss3Alt className="m-1" />
                      </motion.div>
                      </div>
                     
                      {/* </motion.div> */}
                    </div>
                  </div>

                  <div className="right-timeline mb-8 flex w-full items-center md:mx-24 mx-4">
                    <div className="order-1 md:w-5/12"></div>

                    <div className="order-1  py-4 text-left md:w-5/12">
                      {/* <motion.div
                        variants={timelineCard}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gradient-to-r from-primary via-accent to-secondary z-10"
                      > */}
                      <div className="mb-3 text-base text-secondary">
                        Started August 2021
                      </div>
                      <h4 className="mb-3 font-bold md:text-2xl">
                        Software Developer Apprentice at The Shore Group
                      </h4>
                      <div className=" my-1 leading-snug text-opacity-100 md:text-base">
                        - Introduced to React and modern Javascript web
                        development.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base ">
                        - Worked on a bespoke digital signage solution to be
                        used internally made using Next.JS, TailwindCSS and
                        Electron.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base ">
                        - Achieved certificates in software development
                        methodolgies and software development.
                      </div>

                      <motion.a
                        variants={timelineCard}
                        initial="hidden"
                        whileInView="visible"
                        className="flex text-2xl font-semibold text-accent"
                      >
                        Skills acquired:
                        <SiJavascript className="m-1" />{' '}
                        <SiReact className="m-1" />{' '}
                        <SiTailwindcss className="m-1" />
                      </motion.a>
                      {/* </motion.div> */}
                    </div>
                  </div>

   
                  <div className="flex-row mx-4 text-left lg:mx-20 mb-8 flex w-full items-center justify-between">
                    

                    <div className="order-1 md:w-5/12 ">
                      {/* <motion.div
                        variants={timelineCard}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-gradient-to-r from-primary via-accent to-secondary z-10"
                      > */}
                      <div className="mb-3 text-base text-secondary">
                        {' '}
                        Started September 2018
                      </div>
                      <h4 className="mb-3   text-lg font-bold md:text-2xl">
                        Worthing College
                      </h4>
                      <div className="my-1 text-sm leading-snug  text-opacity-100 md:text-base">
                        - Studied Computer Science, Electronics, and Engineering
                      </div>
                      <div className="my-1 text-sm leading-snug  text-opacity-100 md:text-base">
                        - Introduced to C# and native app development using
                        WinForms.
                      </div>
                      <div className="my-1 text-sm leading-snug  text-opacity-100 md:text-base">
                        - Learned principles of SQL and relational databases.
                      </div>
                      <motion.a
                        variants={timelineCard}
                        initial="hidden"
                        whileInView="visible"
                        className="flex text-2xl font-semibold text-accent"
                      >
                        Skills acquired:
                        <SiCsharp className="m-1" />
                        <AiFillGithub className="m-1" />
                        <SiMysql className="m-1" />
                      </motion.a>
                 
                      {/* </motion.div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  function handleChangeComplete() {
    handleChangeComplete = (color) => {
      console.log('colour', color)
      setBackground({ background: color.hex })
    }
  }

  function applyTheme() {
    let primaryColour = '#fffff'
    let secondaryColour = '#fffff'
    let accentColor = '#fffff'

    let data = {
      primary: primaryColour,
      secondary: secondaryColour,
      accent: accentColor,
    }

    //api call to post selected colours through

    fetch('http://localhost:3000/api/theme', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  function ThemeGenerator() {
    return (
      <div>
        <input type="checkbox" id="theme-modal" className="modal-toggle" />
        <label htmlFor="theme-modal" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <div className="md:font-5xl text-center font-semibold">
              Endlessly Extensible.
            </div>

            <div className="grid grid-cols-3 grid-rows-1 gap-2 overflow-hidden">
              <div className="card text-center ">
                <div className="">Primary</div>
                <SliderPicker
                  className="card-body"
                  color={background}
                  onChangeComplete={handleChangeComplete}
                />
              </div>
              <div className="card text-center ">
                <div className="">Secondary</div>
                <SliderPicker
                  className="card-body"
                  color={background}
                  onChangeComplete={handleChangeComplete}
                />
              </div>

              <div className="card text-center ">
                <div className="">Accent</div>
                <SliderPicker
                  className="card-body"
                  color={background}
                  onChangeComplete={handleChangeComplete}
                />
              </div>
            </div>
            <div className="btn btn-primary" onClick={applyTheme}>
              Apply
            </div>
          </label>
        </label>
      </div>
    )
  }

>>>>>>> Stashed changes
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
            
              
                
          
<svg className="hidden lg:block" version="1.1" viewBox="0 0 960 540" xmlns="http://www.w3.org/2000/svg">
<rect width="960" height="540" fill="#001220" className="fill-base-100"/>
<motion.path  variants={waves}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }} d="m0 361 22.8 3.7c22.9 3.6 68.5 11 114.2 3.6 45.7-7.3 91.3-29.3 137-34.3s91.3 7 137.2 18c45.8 11 91.8 21 137.6 16 45.9-5 91.5-25 137.2-30.7 45.7-5.6 91.3 3 137 5.9 45.7 2.8 91.3-0.2 114.2-1.7l22.8-1.5v201h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z" fill="#fa7268" className="fill-primary-content"/>
<motion.path  variants={title}
                initial="hidden"
                animate="visible" d="m0 394 22.8-4.3c22.9-4.4 68.5-13 114.2-14.4 45.7-1.3 91.3 4.7 137 8.2s91.3 4.5 137.2 0.8c45.8-3.6 91.8-12 137.6-13.6 45.9-1.7 91.5 3.3 137.2 9 45.7 5.6 91.3 12 137 11.8s91.3-6.8 114.2-10.2l22.8-3.3v163h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z" fill="#ef5f67" className="fill-primary"/>
<motion.path  variants={title}
                initial="hidden"
                animate="visible" d="m0 440 22.8-6.8c22.9-6.9 68.5-20.5 114.2-27.2s91.3-6.3 137-4.5 91.3 5.2 137.2 6.3c45.8 1.2 91.8 0.2 137.6 1 45.9 0.9 91.5 3.5 137.2 3.7s91.3-2.2 137 2.7c45.7 4.8 91.3 16.8 114.2 22.8l22.8 6v97h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z" fill="#e34c67" className="fill-primary-focus"/>
<motion.path 
        variants={title}
        initial="hidden"
        animate="visible"
         d="m0 477 22.8-5.8c22.9-5.9 68.5-17.5 114.2-21.2s91.3 0.7 137 7.5 91.3 16.2 137.2 17c45.8 0.8 91.8-6.8 137.6-10 45.9-3.2 91.5-1.8 137.2-0.5s91.3 2.7 137 6 91.3 8.7 114.2 11.3l22.8 2.7v57h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z" fill="#d53867" className="fill-secondary"/>
<path d="m0 487 22.8 4.8c22.9 4.9 68.5 14.5 114.2 17.5s91.3-0.6 137-7.6 91.3-17.4 137.2-19.7c45.8-2.3 91.8 3.3 137.6 4 45.9 0.7 91.5-3.7 137.2-6.3 45.7-2.7 91.3-3.7 137-4.5 45.7-0.9 91.3-1.5 114.2-1.9l22.8-0.3v68h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z" fill="#c62368" className="fill-secondary-focus"/>
</svg>


<svg className=" lg:hidden" version="1.1" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg">
<rect className="fill-base-100" width="540" height="960" fill="#001220"/>
<path className="fill-accent-content" d="m0 560 12.8 1.5c12.9 1.5 38.5 4.5 64.2 5.5s51.3 0 77-3 51.3-8 77.2 1.2c25.8 9.1 51.8 32.5 77.6 41.6 25.9 9.2 51.5 4.2 77.2-1.5 25.7-5.6 51.3-12 77-13.3s51.3 2.3 64.2 4.2l12.8 1.8v363h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#fa7268"/>
<path className="fill-accent" d="m0 644 12.8-2.8c12.9-2.9 38.5-8.5 64.2-10s51.3 1.1 77 4c25.7 2.8 51.3 5.8 77.2 10.1 25.8 4.4 51.8 10 77.6 1.5 25.9-8.5 51.5-31.1 77.2-32.6s51.3 18.1 77 25.6 51.3 2.9 64.2 0.5l12.8-2.3v323h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#f56967"/>
<path className="fill-accent-focus" d="m0 631 12.8 11.7c12.9 11.6 38.5 35 64.2 37.8s51.3-14.8 77-22.8 51.3-6.4 77.2-4.2c25.8 2.2 51.8 4.8 77.6 8.7 25.9 3.8 51.5 8.8 77.2 13.6 25.7 4.9 51.3 9.5 77 6.9 25.7-2.7 51.3-12.7 64.2-17.7l12.8-5v301h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#ef5f67"/>
<path  className="fill-secondary-focus" d="m0 735 12.8-3.5c12.9-3.5 38.5-10.5 64.2-19.8 25.7-9.4 51.3-21 77-17.5s51.3 22.1 77.2 22.5c25.8 0.3 51.8-17.7 77.6-19.4 25.9-1.6 51.5 13 77.2 13.7s51.3-12.7 77-20.8c25.7-8.2 51.3-11.2 64.2-12.7l12.8-1.5v285h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#e95667"/>
<path className="fill-secondary" d="m0 751 12.8 4c12.9 4 38.5 12 64.2 10.2 25.7-1.9 51.3-13.5 77-18s51.3-1.9 77.2 1.3c25.8 3.2 51.8 6.8 77.6 3.5 25.9-3.3 51.5-13.7 77.2-10.8 25.7 2.8 51.3 18.8 77 26.6 25.7 7.9 51.3 7.5 64.2 7.4l12.8-0.2v186h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#e34c67"/>
<path className="fill-secondary-focus" d="m0 763 12.8 2.5c12.9 2.5 38.5 7.5 64.2 14.2 25.7 6.6 51.3 15 77 15.5s51.3-6.9 77.2-4.7c25.8 2.2 51.8 13.8 77.6 15.2 25.9 1.3 51.5-7.7 77.2-15.2s51.3-13.5 77-13.7c25.7-0.1 51.3 5.5 64.2 8.4l12.8 2.8v173h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#dc4267"/>
<path className="fill-primary-focus" d="m0 825 12.8 0.5c12.9 0.5 38.5 1.5 64.2 2s51.3 0.5 77-2.5 51.3-9 77.2-7.5c25.8 1.5 51.8 10.5 77.6 11.7 25.9 1.1 51.5-5.5 77.2-10s51.3-6.9 77-1.2 51.3 19.3 64.2 26.2l12.8 6.8v110h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#d53867"/>
<path className="fill-primary" d="m0 869 12.8 3.3c12.9 3.4 38.5 10 64.2 9s51.3-9.6 77-15.5c25.7-5.8 51.3-8.8 77.2-9.8 25.8-1 51.8 0 77.6 5.5 25.9 5.5 51.5 15.5 77.2 14.2 25.7-1.4 51.3-14 77-15.7s51.3 7.7 64.2 12.3l12.8 4.7v84h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#ce2e68"/>
<path className="fill-primary-focus" d="m0 918 12.8-1.5c12.9-1.5 38.5-4.5 64.2-4.2 25.7 0.4 51.3 4 77 3.4 25.7-0.7 51.3-5.7 77.2-5 25.8 0.6 51.8 7 77.6 5.3 25.9-1.7 51.5-11.3 77.2-16.2 25.7-4.8 51.3-4.8 77-2.8s51.3 6 64.2 8l12.8 2v54h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z" fill="#c62368"/>
</svg>


                
      

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
<<<<<<< Updated upstream
                    className="m-1 my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-left font-bungee-shade   text-5xl font-extrabold   text-transparent md:mt-20 md:text-8xl  lg:mt-0  lg:text-7xl xl:text-7xl"
=======
                    className="m-1  my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text   text-left font-bungee-shade   text-5xl font-extrabold text-transparent  md:text-5xl  lg:text-6xl xl:text-6xl"
>>>>>>> Stashed changes
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
                    className="btn btn-accent  m-1 "
                  >
                    Github
                  </motion.a>
                </div>

                {/* <motion.a
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
                </motion.label> */}
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
