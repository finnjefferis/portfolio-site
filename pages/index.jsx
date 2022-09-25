import { AiFillHtml5, AiFillGithub } from 'react-icons/ai'

import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiCsharp,
  SiReact
} from 'react-icons/si'
import { MdEmail, MdOutlineEmail} from 'react-icons/md'
import { BsLinkedin} from 'react-icons/bs'

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
  const [background, setBackground] = useState({background: '#ffff'})
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

    let scrollToContactMe = document.querySelector('#scroll-contact-me')
    let contactMe = document.querySelector('#contact-me')

    scrollToContactMe.addEventListener('click', function () {
      contactMe.scrollIntoView()
    })

    scrollYProgress.onChange((latest) => {
      console.log('Page scroll: ', latest)
      console.log('whyMERef: ', whyMeRef)
    })
  }, [scrollYProgress])

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

  function Modal(){
    return (
      <div>
    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
  <label className="modal-box relative" for="">
    <h1 className="text-xl font-bold">Finn Jefferis</h1>
    <h3 className=" font-semibold">

Professional Summary
Software developer with solid foundational knowledge, experience in modern web development and a commitment to always keep learning.
</h3>
    <p className="py-4">Skills
Experience in full-stack web app development using frameworks such as React and Next.js.
Designed websites using JavaScript, HTML, and CSS.
Comfortable writing clean and efficient SQL.
Experience with Electron and writing browser extensions.
Familiar with other programming languages such as Python, C# and PHP.
Fast and intentional learner. 
Focused & Patient.
Dedicated team player.
Thrives in fast-paced environment.
Quick problem solver.
High energy.
Committed team player.
Organised multi-tasker.
Passionate about software development and always eager to learn something new.



</p>
<p>
Junior Software Developer at Admor DentalPlus 9-5-2022 - Present
Assisted in the design and full-stack development of a modern web app for dental practices
Used Next.js and component libraries Syncfusion and Bootstrap for the front-end.
Wrote SQL statements using PostgreSQL & PGadmin 4 to handle database interaction.
Translated legacy PHP scripts into modern Javascript.
Paid careful attention to performance & React best practices to ensure an optimised and secure experience.
Wrote a browser extension for deeper system-level integration.

</p>
<p>Software Developer Apprentice at The Shore Group 18-8-2021 – 5-5-2022
Took personal ownership of a struggling project and worked around the clock to ensure it shipped on time and to a high standard.
Developed a bespoke digital signage solution using React and TailwindCSS for the front-end and cutting-edge headless content management systems like Strapi and Keystone to power the back-end.
Learned on the job continuously throughout the experience.
Self-motivated and highly organised
Familiar with modern development tools such as Git and Node.js
Cleaned up and maintained our RDBMS to ensure compatibility with custom software
Assisted colleagues with a plethora of general IT issues
</p>

<p>Education</p>
<p>Education
BCS Level 3 Certificate in Programming: Pass
BCS Level 3 Certificate in Software Development Context and Methodologies : Pass
A Levels - 2018 - 2021
Computer Science : D
Electronics : D
Engineering CAMTEC : Pass
</p>
  </label>
</label>
</div>
    )
  }

  //take yposition and use it to scale code block?

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
      <section>
        <Modal/>
        <div class=" py-8">
          <div class="container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
            <div class="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
              <p class="tracking-loose ml-2 uppercase text-accent">
                My experience
              </p>
              <p class="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
                Why Me?
              </p>
              <p class="mb-4 text-sm  md:text-base">
                Over a year of professional web dev experience.
              </p>
              <label htmlFor="my-modal-4" className="btn modal-button btn-outline">View CV</label>
            </div>
            <div class="sticky ml-0 md:ml-12 lg:w-2/3">
              <div class="container mx-auto h-full w-full ">
                <div class="wrap relative h-full overflow-hidden p-10  ">
                <div
                    class="border-2-2 border-yellow-555 absolute h-full border absolute inset-y-0 md:right-96"
                    // style="right: 50%; border: 2px solid #FFC100; border-radius: 1%;"
                  ></div>
              
                  <div class="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                 
                    <div class="order-1 w-5/12"></div>
                    
                    <div class="order-1 md:w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-accent">Started May 2022</p>
                      <h4 class="mb-3 text-lg font-bold md:text-2xl">
                        Junior Software Developer at Admor DentalPlus Software
                        Ltd.
                      </h4>
                      <p class="text-sm leading-snug text-opacity-100  md:text-base my-1">
                       - Worked closely with a team to design and develop a world-class dental application using Next.JS, PostgreSQL, and SyncFusion component library.
                      </p>
                      <p class="text-sm leading-snug text-opacity-100  md:text-base my-1 ">
                      
                       - Developed a native C# app to allow deeper native integration via a web extension.
                      </p>
                      <motion.a
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  className="font-semibold"
                
                >
                  Skills acquired: 
                <SiNextdotjs/> <SiPostgresql/>
                </motion.a>
                    </div>
                  </div>
                  <div class="right-timeline mb-8 flex w-full items-center justify-between">
                    <div class="order-1 md:w-5/12"></div>
                    <div class="order-1  md:w-5/12 px-1 py-4 text-left">
                      <p class="mb-3 text-base text-accent">
                        Started August 2021
                      </p>
                      <h4 class="mb-3 text-lg font-bold md:text-2xl">
                        Software Developer Apprentice at The Shore Group
                      </h4>
                      <p class="text-sm leading-snug text-opacity-100 md:text-base my-1">
                       - Introduced to React and modern Javascript web development. 
            
                      </p>
                      <p class="text-sm leading-snug text-opacity-100  md:text-base my-1 ">
                      - Worked on a bespoke digital signage solution to be used internally made using Next.JS, TailwindCSS and Electron.
                     </p>
                     <p class="text-sm leading-snug text-opacity-100  md:text-base my-1 ">
                      - Achieved certificates in software development methodolgies and software development.
                     </p>
                     <motion.a
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  className="font-semibold"
                
                >
                  Skills acquired: 
                <SiJavascript/> <SiReact/> <SiNodedotjs/> <SiTailwindcss/>
                </motion.a>
                    </div>
                  </div>
               

                  <div class="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
                    <div class="order-1 md:w-5/12"></div>
                    <div class="order-1 md:w-5/12 px-1 py-4 text-right">
                      <p class="mb-3 text-base text-accent">
                        {' '}
                        Started September 2018
                      </p>
                      <h4 class="mb-3 text-right  text-lg font-bold md:text-2xl">
                        Worthing College
                      </h4>
                      <p class="text-sm leading-snug text-opacity-100  md:text-base my-1">
                     - Studied Computer Science, Electronics, and Engineering
                      </p>
                      <p class="text-sm leading-snug text-opacity-100  md:text-base my-1">
                     - Introduced to C# and native app development using WinForms. 
                      </p>
                      <motion.a
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  className="font-semibold"
                
                >
                  Skills acquired: 
                <SiCsharp/>
                </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  function handleChangeComplete(){
    handleChangeComplete = (color) => {
      setBackground({ background: color.hex });
    };
  }

  function ThemeGenerator() {
    return (

      <div>
              <input type="checkbox" id="theme-modal" className="modal-toggle" />
<label htmlFor="theme-modal" className="modal cursor-pointer">
  <label className="modal-box relative" for="">
        <div className="md:font-5xl text-center font-semibold">
          Endlessly Extensible.
        </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-2 overflow-hidden">
        <div className="card text-center ">
            <div className="">

          Primary
          </div>
            <SliderPicker className="card-body" color={background} onChangeComplete={handleChangeComplete} />
          </div>
          <div className="card text-center ">
            <div className="">
Secondary
</div>
<SliderPicker className="card-body" color={background} onChangeComplete={handleChangeComplete} />
          </div>

          <div className="card text-center ">
            <div className="">
              Accent
            </div>
            <SliderPicker className="card-body" color={background} onChangeComplete={handleChangeComplete} />
          </div>
        </div>
        <div className="btn btn-primary">Apply</div>
    
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
      
      <ThemeGenerator/>
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
                <div className="  h-screen origin-top-left  -rotate-45 transform bg-gradient-to-r from-primary via-accent to-secondary md:origin-top-right"></div>
              </motion.div>
              <motion.div
                variants={title}
                initial="hidden"
                animate="visible"
                className="mask-parallelogram-4 inline-block min-h-full min-w-full gap-1 overflow-hidden"
              >
                <div className="  h-screen origin-bottom-right  -rotate-45 transform bg-gradient-to-r from-primary via-accent to-secondary md:origin-top-right"></div>
              </motion.div>

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

              <div className=" z-10 text-center">
                <div>
                  <motion.h1
                    variants={name}
                    initial="hidden"
                    animate="visible"
                    className="m-1 my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text   text-left font-bungee-shade   text-5xl font-extrabold text-transparent sm:text-xl md:text-7xl lg:text-7xl xl:text-7xl"
                  >
                    Finn Jefferis
                    <br />
                  </motion.h1>

                  <motion.h1
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    className="text-l bg-gradient-to-r from-primary via-accent to-secondary  bg-clip-text font-semibold text-transparent sm:text-xl md:text-2xl"
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
                    className="btn btn-primnary my-5  "
                  >
                    Github
                  </motion.a>
             

                </div>

                <motion.a
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  className="btn btn-primary z-10 m-1"
                  id="scroll-why-me"
                >
                  Why Me?
                </motion.a>

                <motion.a
                  variants={title}
                  initial="hidden"
                  animate="visible"
                  className="btn  btn-secondary z-10 m-1"
                  id="scroll-contact-me"
                >
                  Get in Touch
                </motion.a>
              </div>
            </div>
          </div>
          <div id="why-me">
            {/* <WhyMe /> */}
            {/* <ThemeGenerator /> */}

            <Timeline />
          </div>

          {/* <div>
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
                  {' '} */}
          {/* <FiFramer size={70} />
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
          </div> */}
          <div classname="hero min-h-screen">
            <motion.h1
              variants={name}
              initial="hidden"
              whileInView="visible"
              className="m-1 my-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text   text-center font-bungee-shade    text-5xl font-extrabold text-transparent sm:text-xl md:text-7xl lg:text-7xl"
            >
              Get in touch
              <br />
            </motion.h1>
            <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
  <div className="divider lg:divider-horizontal">OR</div> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"><div>
    <MdOutlineEmail size={80}/></div></div>
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
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/finlay-jefferis-80a417234/" className="">
    <span>
    <BsLinkedin size={30} />
    </span>
</a>
<a href="https://github.com/finnjefferis" className="">
    <span>
 
    <AiFillGithub size={30}/>
    </span>
</a>

<a href="https://www.linkedin.com/in/finlay-jefferis-80a417234/" className="">
    <span>
    <MdEmail size={30} />
    </span>
</a>

    
          
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
