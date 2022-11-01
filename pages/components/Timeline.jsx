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

import { AiFillHtml5, AiFillGithub, AiFillPhone } from 'react-icons/ai'

import {
    motion,
    useScroll,
    useTransform,
    useAnimation,
    useSpring,
  } from 'framer-motion'

export default function Timeline() {
    const timelineCard = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.15 } },
      }

      const name = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.1 } },
      }
    
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