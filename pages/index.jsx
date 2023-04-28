import { AiFillHtml5, AiFillGithub, AiFillPhone } from 'react-icons/ai'

import { FaCss3Alt, FaPython, FaPhp } from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiCsharp,
  SiReact,
  SiMysql,
  SiJquery,
} from 'react-icons/si'
import { MdEmail, MdOutlineEmail, MdLocationOn } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import { FiFramer, FiFigma } from 'react-icons/fi'

import { SliderPicker } from 'react-color'

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
  'marine',
]

const Home = () => {
  let randomNumber = Math.floor(Math.random() * themes.length)
  const [theme, setTheme] = useState('lava')
  const [background, setBackground] = useState({ background: '#ffff' })
  const whyMeRef = useRef(null)
  //animation consts for text animation

  const line1 = 'Frontend developer with a passion for React'

  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.4, staggerChildren: 0.02 } },
  }

  const title = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  }

  const waves = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.9 } },
  }

  const name = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1 } },
  }

  const timelineCard = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.15 } },
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  useEffect(() => {
    themeChange(false)
    // 👆 false parameter is required for react project
    //setTheme(themes[randomNumber])
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

  function pastelTheme() {
    setTheme('pastel')
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

  function lavaTheme() {
    setTheme('lava')
  }

  function marineTheme() {
    setTheme('marine')
  }

  function businessTheme() {
    setTheme('business')
  }

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
              <div className="text-center text-xl font-semibold">Skills </div>

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
                  <div className="border-4-4  absolute  h-full border-y-0 border-r-4 md:px-40 lg:px-60 "></div>

                  <div className="right-timeline mx-4 mx-4 mb-8  flex w-full flex-row items-center md:mx-24 lg:mx-24 ">
                    <div className="order-1 md:w-5/12"></div>

                    <div className="order-1  py-4 text-left md:w-5/12">
                      <div className="mb-3 text-base text-secondary">
                        Started October 2022
                      </div>
                      <h4 className="mb-3  font-bold md:text-2xl">
                        Software Engineer at CloudPerfect
                      </h4>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        - Oversaw development, implementation and maintenance of
                        various business software for a variety of clients.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        {' '}
                        - Mastered Deluge - a proprietary scripting language
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base "></div>
                      <motion.a
                        variants={name}
                        initial="hidden"
                        whileInView="visible"
                        className="flex  text-2xl  font-semibold text-accent"
                      >
                        Skills acquired:
                        <FaPython className="m-1" />
                        <FaPhp className="m-1" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="mx-4 mb-8 flex w-full flex-row items-center justify-between text-left lg:mx-20">
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

                  <div className="right-timeline mx-4 mb-8 flex w-full items-center md:mx-24">
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

                  <div className="mx-4 mb-8 flex w-full flex-row items-center justify-between text-left lg:mx-20">
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
              <div className="text-center text-xl font-semibold">Skills </div>

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
                  <div className="border-4-4  absolute  h-full border-y-0 border-r-4 md:px-40 lg:px-60 "></div>

                  <div className="right-timeline mx-4 mx-4 mb-8  flex w-full flex-row items-center md:mx-24 lg:mx-24 ">
                    <div className="order-1 md:w-5/12"></div>

                    <div className="order-1  py-4 text-left md:w-5/12">
                      <div className="mb-3 text-base text-secondary">
                        Started October 2022
                      </div>
                      <h4 className="mb-3  font-bold md:text-2xl">
                        Software Engineer at CloudPerfect
                      </h4>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        - Oversaw development, implementation and maintenance of
                        various business software for a variety of clients.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        {' '}
                        - Mastered Deluge - a proprietary scripting language
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base "></div>
                      <motion.a
                        variants={name}
                        initial="hidden"
                        whileInView="visible"
                        className="flex  text-2xl  font-semibold text-accent"
                      >
                        Skills acquired:
                        <FaPython className="m-1" />
                        <FaPhp className="m-1" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="mx-4 mb-8 flex w-full flex-row items-center justify-between text-left lg:mx-20">
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

                  <div className="right-timeline mx-4 mb-8 flex w-full items-center md:mx-24">
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

                  <div className="mx-4 mb-8 flex w-full flex-row items-center justify-between text-left lg:mx-20">
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
              <div className="text-center text-xl font-semibold">Skills </div>

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
          <div
            // initial={{ opacity: 0, scale: 0.5 }}
            // whileInView={{
            //   opacity: [1, 1, 0, 0, 0],
            //   scale: [1, 2, 2],
            //   delay: 1,
            // }}
            // transition={{
            //   duration: 2,
            //   delay: 1,
            //   repeat: Infinity,
            //   repeatDelay: 5,
            // }}
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
          </div>

          <div
            // initial={{ opacity: 0 }}
            // whileInView={{
            //   opacity: [0, 0, 1, 0, 0],
            //   scale: [1, 2, 1],
            //   delay: 1,
            // }}
            // transition={{
            //   duration: 2,
            //   delay: 1,
            //   repeat: Infinity,
            //   repeatDelay: 5,
            // }}
            className="mockup-window border bg-base-300 "
          >
            <div className="flex justify-center bg-base-200 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl  font-semibold text-transparent  ">
              <div className="my-20 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-5xl font-semibold text-transparent ">
                Looks stunning
              </div>
            </div>
          </div>
        </div>

        <div
          // initial={{ opacity: 0 }}
          // whileInView={{
          //   opacity: [0, 0, 0, 1, 0],
          //   scale: [1, 2, 1, 1],
          //   delay: 1,
          // }}
          // transition={{
          //   duration: 2,
          //   delay: 1,
          //   repeat: Infinity,
          //   repeatDelay: 5,
          // }}
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
        </div>
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
                  <div className="right-timeline mx-4 mx-4 mb-8  flex w-full flex-row items-center md:mx-24 lg:mx-24 ">
                    <div className="order-1  py-4 text-left md:w-5/12">
                      <div className="mb-3 text-base text-secondary">
                        Started January 2023
                      </div>
                      <h4 className="mb-3  font-bold md:text-2xl">
                        Frontend Developer at Park Cameras
                      </h4>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        -Oversaw design, development, testing and implementation
                        of new frontend features while maintaining and
                        overhauling legacy code
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        {' '}
                        - Comprehensively designed, developed and implemented
                        new pages and components
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base ">
                        {' '}
                        - Maintained old code on legacy platforms and frameworks
                      </div>
                      <motion.a
                        variants={name}
                        initial="hidden"
                        whileInView="visible"
                        className="flex  text-2xl  font-semibold text-accent"
                      >
                        Skills acquired:
                        <SiJquery className="m-1" />
                        <FiFigma className="m-1" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="right-timeline mx-4 mx-4 mb-8  flex w-full flex-row items-center md:mx-24 lg:mx-24 ">
                    <div className="order-1 md:w-5/12"></div>

                    <div className="order-1  py-4 text-left md:w-5/12">
                      <div className="mb-3 text-base text-secondary">
                        Started October 2022
                      </div>
                      <h4 className="mb-3  font-bold md:text-2xl">
                        Software Engineer at CloudPerfect
                      </h4>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        - Oversaw development, implementation and maintenance of
                        various business software for a variety of clients.
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base">
                        {' '}
                        - Mastered Deluge - a proprietary scripting language
                      </div>
                      <div className=" my-1 leading-snug  text-opacity-100 md:text-base "></div>
                      <motion.a
                        variants={name}
                        initial="hidden"
                        whileInView="visible"
                        className="flex  text-2xl  font-semibold text-accent"
                      >
                        Skills acquired:
                        <FaPython className="m-1" />
                        <FaPhp className="m-1" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="mx-4 mb-8 flex w-full flex-row items-center justify-between text-left lg:mx-20">
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

                  <div className="right-timeline mx-4 mb-8 flex w-full items-center md:mx-24">
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

                  <div className="mx-4 mb-8 flex w-full flex-row items-center justify-between text-left lg:mx-20">
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
              <svg
                className="hidden lg:block"
                version="1.1"
                viewBox="0 0 960 540"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="960"
                  height="540"
                  fill="#001220"
                  className="fill-base-100"
                />
                <motion.path
                  d="M0 321L12.3 321.5C24.7 322 49.3 323 74 323.8C98.7 324.7 123.3 325.3 148 331.2C172.7 337 197.3 348 221.8 349.3C246.3 350.7 270.7 342.3 295.2 345.2C319.7 348 344.3 362 369 365C393.7 368 418.3 360 443 349.7C467.7 339.3 492.3 326.7 517 332.2C541.7 337.7 566.3 361.3 591 362.5C615.7 363.7 640.3 342.3 664.8 337.7C689.3 333 713.7 345 738.2 349.3C762.7 353.7 787.3 350.3 812 351.8C836.7 353.3 861.3 359.7 886 356.8C910.7 354 935.3 342 947.7 336L960 330L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#c62368"
                  className="fill-gradient-100"
                />
                <motion.path
                  d="M0 334L12.3 340.8C24.7 347.7 49.3 361.3 74 371.3C98.7 381.3 123.3 387.7 148 391.5C172.7 395.3 197.3 396.7 221.8 389.5C246.3 382.3 270.7 366.7 295.2 364C319.7 361.3 344.3 371.7 369 376.8C393.7 382 418.3 382 443 384.8C467.7 387.7 492.3 393.3 517 385.3C541.7 377.3 566.3 355.7 591 356.8C615.7 358 640.3 382 664.8 382C689.3 382 713.7 358 738.2 356.2C762.7 354.3 787.3 374.7 812 376.8C836.7 379 861.3 363 886 358C910.7 353 935.3 359 947.7 362L960 365L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#ce2e68"
                  className="fill-gradient-200"
                />
                <motion.path
                  d="M0 358L12.3 365.2C24.7 372.3 49.3 386.7 74 390.3C98.7 394 123.3 387 148 389.2C172.7 391.3 197.3 402.7 221.8 403.7C246.3 404.7 270.7 395.3 295.2 395.8C319.7 396.3 344.3 406.7 369 404.2C393.7 401.7 418.3 386.3 443 380.7C467.7 375 492.3 379 517 386.3C541.7 393.7 566.3 404.3 591 401.5C615.7 398.7 640.3 382.3 664.8 376.8C689.3 371.3 713.7 376.7 738.2 380.2C762.7 383.7 787.3 385.3 812 385.3C836.7 385.3 861.3 383.7 886 380.8C910.7 378 935.3 374 947.7 372L960 370L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#d53867"
                  className="fill-gradient-300"
                />
                <motion.path
                  d="M0 404L12.3 401.5C24.7 399 49.3 394 74 398C98.7 402 123.3 415 148 419.3C172.7 423.7 197.3 419.3 221.8 417.3C246.3 415.3 270.7 415.7 295.2 416.7C319.7 417.7 344.3 419.3 369 415.2C393.7 411 418.3 401 443 399.8C467.7 398.7 492.3 406.3 517 409.2C541.7 412 566.3 410 591 412.7C615.7 415.3 640.3 422.7 664.8 418.2C689.3 413.7 713.7 397.3 738.2 398.3C762.7 399.3 787.3 417.7 812 425.7C836.7 433.7 861.3 431.3 886 430.2C910.7 429 935.3 429 947.7 429L960 429L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#dc4267"
                  className="fill-gradient-400"
                />
                <motion.path
                  d="M0 427L12.3 429.7C24.7 432.3 49.3 437.7 74 437.3C98.7 437 123.3 431 148 427.7C172.7 424.3 197.3 423.7 221.8 426.8C246.3 430 270.7 437 295.2 441.5C319.7 446 344.3 448 369 450C393.7 452 418.3 454 443 453.8C467.7 453.7 492.3 451.3 517 449.3C541.7 447.3 566.3 445.7 591 441.7C615.7 437.7 640.3 431.3 664.8 429.2C689.3 427 713.7 429 738.2 434.2C762.7 439.3 787.3 447.7 812 444C836.7 440.3 861.3 424.7 886 422C910.7 419.3 935.3 429.7 947.7 434.8L960 440L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#e34c67"
                  className="fill-gradient-500"
                />
                <motion.path
                  d="M0 446L12.3 443.8C24.7 441.7 49.3 437.3 74 436.2C98.7 435 123.3 437 148 443.7C172.7 450.3 197.3 461.7 221.8 460C246.3 458.3 270.7 443.7 295.2 436.2C319.7 428.7 344.3 428.3 369 434.2C393.7 440 418.3 452 443 455.8C467.7 459.7 492.3 455.3 517 455C541.7 454.7 566.3 458.3 591 456.8C615.7 455.3 640.3 448.7 664.8 449.3C689.3 450 713.7 458 738.2 456.2C762.7 454.3 787.3 442.7 812 443.5C836.7 444.3 861.3 457.7 886 461.8C910.7 466 935.3 461 947.7 458.5L960 456L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#e95667"
                  className="fill-gradient-600"
                />
                <motion.path
                  d="M0 474L12.3 472.5C24.7 471 49.3 468 74 464.3C98.7 460.7 123.3 456.3 148 459C172.7 461.7 197.3 471.3 221.8 474.3C246.3 477.3 270.7 473.7 295.2 472.3C319.7 471 344.3 472 369 475.2C393.7 478.3 418.3 483.7 443 480.5C467.7 477.3 492.3 465.7 517 464.5C541.7 463.3 566.3 472.7 591 475.5C615.7 478.3 640.3 474.7 664.8 472.3C689.3 470 713.7 469 738.2 466.5C762.7 464 787.3 460 812 461.7C836.7 463.3 861.3 470.7 886 472.5C910.7 474.3 935.3 470.7 947.7 468.8L960 467L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#ef5f67"
                  className="fill-gradient-700"
                />
                <motion.path
                  d="M0 476L12.3 475.8C24.7 475.7 49.3 475.3 74 480.7C98.7 486 123.3 497 148 497.5C172.7 498 197.3 488 221.8 487C246.3 486 270.7 494 295.2 495.7C319.7 497.3 344.3 492.7 369 491C393.7 489.3 418.3 490.7 443 491.8C467.7 493 492.3 494 517 493C541.7 492 566.3 489 591 489.3C615.7 489.7 640.3 493.3 664.8 491.7C689.3 490 713.7 483 738.2 483.2C762.7 483.3 787.3 490.7 812 496C836.7 501.3 861.3 504.7 886 501.2C910.7 497.7 935.3 487.3 947.7 482.2L960 477L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#f56967"
                  className="fill-gradient-800"
                />
                <motion.path
                  d="M0 508L12.3 508.2C24.7 508.3 49.3 508.7 74 509.2C98.7 509.7 123.3 510.3 148 511.8C172.7 513.3 197.3 515.7 221.8 517.2C246.3 518.7 270.7 519.3 295.2 518.5C319.7 517.7 344.3 515.3 369 512.2C393.7 509 418.3 505 443 506.7C467.7 508.3 492.3 515.7 517 517C541.7 518.3 566.3 513.7 591 510C615.7 506.3 640.3 503.7 664.8 502.8C689.3 502 713.7 503 738.2 503.3C762.7 503.7 787.3 503.3 812 505.3C836.7 507.3 861.3 511.7 886 513.5C910.7 515.3 935.3 514.7 947.7 514.3L960 514L960 541L947.7 541C935.3 541 910.7 541 886 541C861.3 541 836.7 541 812 541C787.3 541 762.7 541 738.2 541C713.7 541 689.3 541 664.8 541C640.3 541 615.7 541 591 541C566.3 541 541.7 541 517 541C492.3 541 467.7 541 443 541C418.3 541 393.7 541 369 541C344.3 541 319.7 541 295.2 541C270.7 541 246.3 541 221.8 541C197.3 541 172.7 541 148 541C123.3 541 98.7 541 74 541C49.3 541 24.7 541 12.3 541L0 541Z"
                  fill="#fa7268"
                  className="fill-gradient-900"
                />
              </svg>

              <svg
                className=" lg:hidden"
                version="1.1"
                viewBox="0 0 540 960"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="fill-100"
                  width="540"
                  height="960"
                  fill="#001220"
                />
                <path
                  className="fill-gradient-100"
                  d="m0 560 12.8 1.5c12.9 1.5 38.5 4.5 64.2 5.5s51.3 0 77-3 51.3-8 77.2 1.2c25.8 9.1 51.8 32.5 77.6 41.6 25.9 9.2 51.5 4.2 77.2-1.5 25.7-5.6 51.3-12 77-13.3s51.3 2.3 64.2 4.2l12.8 1.8v363h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#fa7268"
                />
                <path
                  className="fill-gradient-200"
                  d="m0 644 12.8-2.8c12.9-2.9 38.5-8.5 64.2-10s51.3 1.1 77 4c25.7 2.8 51.3 5.8 77.2 10.1 25.8 4.4 51.8 10 77.6 1.5 25.9-8.5 51.5-31.1 77.2-32.6s51.3 18.1 77 25.6 51.3 2.9 64.2 0.5l12.8-2.3v323h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#f56967"
                />
                <path
                  className="fill-gradient-300"
                  d="m0 631 12.8 11.7c12.9 11.6 38.5 35 64.2 37.8s51.3-14.8 77-22.8 51.3-6.4 77.2-4.2c25.8 2.2 51.8 4.8 77.6 8.7 25.9 3.8 51.5 8.8 77.2 13.6 25.7 4.9 51.3 9.5 77 6.9 25.7-2.7 51.3-12.7 64.2-17.7l12.8-5v301h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#ef5f67"
                />
                <path
                  className="fill-gradient-content"
                  d="m0 735 12.8-3.5c12.9-3.5 38.5-10.5 64.2-19.8 25.7-9.4 51.3-21 77-17.5s51.3 22.1 77.2 22.5c25.8 0.3 51.8-17.7 77.6-19.4 25.9-1.6 51.5 13 77.2 13.7s51.3-12.7 77-20.8c25.7-8.2 51.3-11.2 64.2-12.7l12.8-1.5v285h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#e95667"
                />
                <path
                  className="fill-gradient"
                  d="m0 751 12.8 4c12.9 4 38.5 12 64.2 10.2 25.7-1.9 51.3-13.5 77-18s51.3-1.9 77.2 1.3c25.8 3.2 51.8 6.8 77.6 3.5 25.9-3.3 51.5-13.7 77.2-10.8 25.7 2.8 51.3 18.8 77 26.6 25.7 7.9 51.3 7.5 64.2 7.4l12.8-0.2v186h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#e34c67"
                />
                <path
                  className="fill-gradient-focus"
                  d="m0 763 12.8 2.5c12.9 2.5 38.5 7.5 64.2 14.2 25.7 6.6 51.3 15 77 15.5s51.3-6.9 77.2-4.7c25.8 2.2 51.8 13.8 77.6 15.2 25.9 1.3 51.5-7.7 77.2-15.2s51.3-13.5 77-13.7c25.7-0.1 51.3 5.5 64.2 8.4l12.8 2.8v173h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#dc4267"
                />
                <path
                  className="fill-gradient-700"
                  d="m0 825 12.8 0.5c12.9 0.5 38.5 1.5 64.2 2s51.3 0.5 77-2.5 51.3-9 77.2-7.5c25.8 1.5 51.8 10.5 77.6 11.7 25.9 1.1 51.5-5.5 77.2-10s51.3-6.9 77-1.2 51.3 19.3 64.2 26.2l12.8 6.8v110h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#d53867"
                />
                <path
                  className="fill-gradient-800"
                  d="m0 869 12.8 3.3c12.9 3.4 38.5 10 64.2 9s51.3-9.6 77-15.5c25.7-5.8 51.3-8.8 77.2-9.8 25.8-1 51.8 0 77.6 5.5 25.9 5.5 51.5 15.5 77.2 14.2 25.7-1.4 51.3-14 77-15.7s51.3 7.7 64.2 12.3l12.8 4.7v84h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#ce2e68"
                />
                <path
                  className="fill-gradient-900"
                  d="m0 918 12.8-1.5c12.9-1.5 38.5-4.5 64.2-4.2 25.7 0.4 51.3 4 77 3.4 25.7-0.7 51.3-5.7 77.2-5 25.8 0.6 51.8 7 77.6 5.3 25.9-1.7 51.5-11.3 77.2-16.2 25.7-4.8 51.3-4.8 77-2.8s51.3 6 64.2 8l12.8 2v54h-12.8-64.2-77-77.2-77.6-77.2-77-64.2-12.8z"
                  fill="#c62368"
                />
              </svg>

              <motion.div
                variants={title}
                initial="hidden"
                animate="visible"
                className="dropdown absolute top-5 left-5 z-20"
              >
                <label tabIndex="0" className="btn m-1">
                  {theme}
                </label>
                <ul
                  tabIndex="0"
                  className="dropdown-content menu rounded-box   overflow-scroll bg-accent p-2 text-base-100   shadow lg:h-auto"
                >
                  <li>
                    <a onClick={marineTheme}>Marine</a>
                  </li>
                  <li>
                    <a onClick={lavaTheme}>Lava</a>
                  </li>
                  <li>
                    <a onClick={draculaTheme}>Dracula</a>
                  </li>
                  <li>
                    <a onClick={businessTheme}>Business</a>
                  </li>
                  {/* <li>
                    <a onClick={corporateTheme}>Corporate</a>
                  </li> */}
                  <li>
                    <a onClick={synthwaveTheme}>Synthwave</a>
                  </li>
                  {/* <li>
                    <a onClick={myTheme}/>
                  </li> */}
                  <li>
                    <a onClick={cyberpunkTheme}>Cyberpunk</a>
                  </li>
                  {/* <li>
                    <a onClick={forestTheme}>Forest</a>
                  </li> */}
                  <li>
                    <a onClick={lofiTheme}>lofi</a>
                  </li>
                  <li>
                    <a onClick={fantasyTheme}>Fantasy</a>
                  </li>
                  {/* <li>
                    <a onClick={blackTheme}>Black</a>
                  </li> */}
                  <li>
                    <a onClick={autumnTheme}>Autumn</a>
                  </li>
                  {/* <li>
                    <a onClick={coffeeTheme}>Coffee</a>
                  </li>
                  <li>
                    <a onClick={winterTheme}>Winter</a>
                  </li> */}
                  {/* <label htmlFor="theme-modal" className="btn modal-button">???</label> */}
                </ul>
              </motion.div>

              <div className=" z-10 text-center sm:my-64 md:my-36 lg:my-0 xs:py-64 ">
                <div className="">
                  <motion.h1
                    variants={name}
                    initial="hidden"
                    animate="visible"
                    className="m-1 my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text  font-bungee-shade   text-5xl font-extrabold   text-transparent md:mt-20 md:text-8xl  lg:mt-0  lg:text-7xl xl:text-7xl"
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
                    className="btn btn-accent m-1  text-base-100 "
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
            {/* <WhyMe />
             <ThemeGenerator />  */}

            <Timeline />
          </div>
        </div>
      </div>

      <footer className="footer footer-center bg-primary p-10 text-base-100">
        <div>
          <div className="grid grid-flow-col gap-4">
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
