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
} from 'react-icons/si'
import { MdEmail, MdOutlineEmail, MdLocationOn } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

import { FiFramer } from 'react-icons/fi'

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
  const [background, setBackground] = useState({ background: '#ffff' })
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

  const timelineCard = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.15 } },
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

  function businessTheme() {
    setTheme('business')
  }

  function Modal() {
    return (
      <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h1 className="text-xl  font-bold">Finn Jefferis</h1>
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
                  <div className="border-4-4  absolute  h-full border-y-0 border-r-4 lg:px-60 md:px-40 "></div>
                 

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
    console.log("Theme applied")
    // document.documentElement.style
    // .setProperty('--primary-colour', "#00FF00");
    // setTheme('myTheme')
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
                   <label htmlFor="theme-modal" className="btn modal-button">???</label> 
                </ul>
              </motion.div>

              <div className=" z-10 xs:py-64 sm:my-64 md:my-36 lg:my-0 text-center ">
                <div className="">
                  <motion.h1
                    variants={name}
                    initial="hidden"
                    animate="visible"
                    className="m-1 md:mt-20 lg:mt-0 my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text   text-left font-bungee-shade   text-5xl font-extrabold text-transparent  md:text-8xl  lg:text-7xl xl:text-7xl"
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
            {/* <WhyMe /> */}
            {/* <ThemeGenerator /> */}

            <Timeline />
          </div>
        </div>
      </div>

       <div className="section co" id="contact-me">
        <div                    className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text   font-bungee-shade   text-7xl font-extrabold text-transparent text-center">
          Get in touch
        </div>

        <div className=" overflow-hidden text-center p-80 ">
          <div className="box"> - finnjefferis@gmail.com <MdOutlineEmail/></div>
      
          <div className="box">- business phone? <AiFillPhone/></div>
          <div className="box"> - Brighton, UK <MdLocationOn/></div>
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
