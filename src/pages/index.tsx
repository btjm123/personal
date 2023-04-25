import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Inter } from 'next/font/google';
import {
  CSSIcon,
  FigmaIcon,
  FirstHeading,
  FourthHeading,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  HamburgerIcon,
  JavascriptIcon,
  MongoDBIcon,
  NodeJSIcon,
  PostgresSQLIcon,
  ReactIcon,
  SecondHeading,
  SubHeading,
  ThirdHeading,
  TypescriptIcon,
  VSCodeIcon,
} from '@/components';
import { useEffect, useRef, useState } from 'react';
import {
  boxVariant,
  boxDelayVariant,
  fadeInVariant,
  shakeVariant,
} from '@/animations';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  // Hello Animation
  const helloAnimation = useAnimation();

  // About Me Animation
  const aboutMeAnimation = useAnimation();
  const [aboutMeRef, isAboutMeShown] = useInView();

  // Experience Animation
  const firstExpAnimation = useAnimation();
  const [firstExpRef, isFirstExpShown] = useInView();

  const secondExpAnimation = useAnimation();
  const [secondExpRef, isSecondExpShown] = useInView();

  // Awards Animation
  const awardAnimation = useAnimation();
  const [awardRef, isAwardShown] = useInView();

  // Control state of navigation hamburger icon on mobile devices
  const [isOpen, setOpen] = useState(false);

  // Refs to control to scroll to animation
  const introSectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const expSectionRef = useRef<HTMLElement>(null);
  const awardsSectionRef = useRef<HTMLElement>(null);

  // useEffects hooks to control animation
  useEffect(() => {
    helloAnimation.start('start');
  }, [helloAnimation]);

  useEffect(() => {
    aboutMeAnimation.start(isAboutMeShown ? 'visible' : 'hidden');
    firstExpAnimation.start(isFirstExpShown ? 'visible' : 'hidden');
    secondExpAnimation.start(isSecondExpShown ? 'visible' : 'hidden');
    awardAnimation.start(isAwardShown ? 'visible' : 'hidden');
  }, [
    aboutMeAnimation,
    isAboutMeShown,
    isFirstExpShown,
    firstExpAnimation,
    secondExpAnimation,
    isSecondExpShown,
    awardAnimation,
    isAwardShown,
  ]);

  return (
    <main className="bg-slate-100">
      {/* Navbar */}
      <nav className="sm:flex md:flex flex-col lg:hidden  ">
        <div className="flex justify-end pr-10 py-5">
          <HamburgerIcon
            onClick={() => {
              setOpen((prevState) => !prevState);
            }}
          />
        </div>

        {isOpen && (
          <ul className="flex w-full flex-col justify-center">
            <li
              className="w-full text-center text-slate-800 py-3 text-2xl border border-gray-300 cursor-pointer"
              onClick={() => {
                introSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              intro
            </li>
            <li
              className="w-full text-center text-slate-800 py-3 text-2xl border border-gray-300 cursor-pointer"
              onClick={() => {
                aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              about me
            </li>
            <li
              className="w-full text-center text-slate-800 py-3 text-2xl border border-gray-300 cursor-pointer"
              onClick={() => {
                expSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              experience
            </li>
            <li
              className="w-full text-center text-slate-800 py-3 text-2xl border border-gray-300 cursor-pointer"
              onClick={() => {
                awardsSectionRef.current?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              awards
            </li>
          </ul>
        )}
      </nav>
      <nav className="fixed top-10 w-full z-50">
        <ul className="lg:flex justify-end sm:hidden md:hidden">
          <li
            className="mr-10 text-xl cursor-pointer text-slate-600 font-medium relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
    before:-bottom-2 before:left-0 before:bg-black
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300"
            onClick={() => {
              introSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            intro
          </li>
          <li
            className="mr-10 text-xl cursor-pointer text-slate-600 font-medium relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
    before:-bottom-2 before:left-0 before:bg-black
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300"
            onClick={() => {
              aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            about me
          </li>
          <li
            className="mr-10 text-xl cursor-pointer text-slate-600 font-medium relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
    before:-bottom-2 before:left-0 before:bg-black
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300"
            onClick={() => {
              expSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            experience
          </li>
          <li
            className="mr-10 text-xl cursor-pointer text-slate-600 font-medium relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
    before:-bottom-2 before:left-0 before:bg-black
    before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
    before:transition before:ease-in-out before:duration-300"
            onClick={() => {
              awardsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            awards
          </li>
        </ul>
      </nav>
      {/* Intro Section */}
      <section className="min-h-screen flex items-center" ref={introSectionRef}>
        <div className="sm:w-full md:w-full sm:px-20 md:px-20 lg:w-1/2 pl-40">
          <motion.p
            className="text-6xl"
            variants={shakeVariant}
            initial="start"
            animate={helloAnimation}
          >
            👋
          </motion.p>
          <FirstHeading>Hello World, I am Benn Tan</FirstHeading>
          <SecondHeading>
            I am an incoming Business freshman and am keen to know more about
            the finance field
          </SecondHeading>
        </div>
      </section>

      {/*  About Me Section */}
      <section
        className="min-h-screen flex justify-center"
        ref={aboutSectionRef}
      >
        <div className="w-4/5 mt-40">
          <div className="sm:w-full md:w-full lg:w-3/5">
            <FirstHeading>about me. 🤪</FirstHeading>
            <motion.div
              ref={aboutMeRef}
              animate={aboutMeAnimation}
              initial="hidden"
              variants={boxVariant}
            >
              <ThirdHeading>
                My first encounter with programming was through the Inspect
                Element Function. Since then I started learning a bunch of
                languages and frameworks and happened to really like it a lot.
              </ThirdHeading>
              <ThirdHeading>
                Programming empowers me to build products that have a real
                impact on people lives. I also enjoy solving algorithmic and
                mathematical problems with code.
              </ThirdHeading>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="min-h-screen flex justify-center" ref={expSectionRef}>
        <div className="w-4/5 mt-40">
          <div className="sm:w-full md:w-full lg:w-4/5">
            <FirstHeading style="mb-2">experience. 💼</FirstHeading>
            {/* TODO: abstract this away in a Experience Container */}
            <motion.div
              className="mb-20"
              ref={firstExpRef}
              animate={firstExpAnimation}
              initial="hidden"
              variants={boxVariant}
            >
              <ThirdHeading style="mb-5">
                Software Engineer @ EdTech Startup
              </ThirdHeading>
              <FourthHeading>
                &gt; Developed a custom video player on React Native, with
                custom video controls and modal educational quiz popups
              </FourthHeading>
              <FourthHeading>
                &gt; Created an advanced filtering options panel to enable users
                to sort through questions with a range of criterias
              </FourthHeading>
              <FourthHeading>
                &gt; Co-developed a worksheet generation system that automated
                the process of exporting a A4-sized PDF from the quiz database
              </FourthHeading>

              <div className="flex sm:w-full md:w-full lg:w-2/5 justify-between mt-8">
                <TypescriptIcon />
                <ReactIcon />
                <NodeJSIcon />
                <PostgresSQLIcon />
                <GitIcon />
                <VSCodeIcon />
                <FigmaIcon />
              </div>
            </motion.div>

            <motion.div
              className="mb-20"
              ref={secondExpRef}
              animate={secondExpAnimation}
              initial="hidden"
              variants={boxDelayVariant}
            >
              <ThirdHeading style="mb-5">
                Software Engineer @ Stealth Startup
              </ThirdHeading>
              <FourthHeading>
                &gt; Created a graph theory algorithm that optimised and
                automated the traditionally laborious problem of assignment of
                tutors to students
              </FourthHeading>
              <FourthHeading>
                &gt; Pioneered the creation of a web portal from scratch with
                admin CMS as a front-end for the backend algorithm
              </FourthHeading>

              <div className="flex sm:w-full md:w-full lg:w-2/5 justify-between mt-8">
                <HTMLIcon />
                <CSSIcon />
                <JavascriptIcon />
                <NodeJSIcon />
                <MongoDBIcon />
                <GithubIcon />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        className="min-h-screen flex justify-center"
        ref={awardsSectionRef}
      >
        <div className="w-4/5 mt-20">
          <div className="sm:w-full md:w-full lg:w-3/5">
            <FirstHeading>awards. 🎖️</FirstHeading>
            <motion.ul
              ref={awardRef}
              animate={awardAnimation}
              initial="hidden"
              variants={fadeInVariant}
            >
              <FourthHeading>Victorian Pioneer Award 2020</FourthHeading>
              <SubHeading>
                The Victorian Pioneer Award is a prestigious award presented
                only to the most outstanding students who epitomise the spirits
                of entrepreneurship and innovation for a worthy cause, in honour
                of the pioneer cohort of VJC.
              </SubHeading>

              <FourthHeading>
                National Olympiad in Informatics 2020
              </FourthHeading>
              <SubHeading>Silver Medal & Top School Scorer in VJC</SubHeading>

              <FourthHeading>YouthHacks Hackathon 2019</FourthHeading>
              <SubHeading>3rd Place in Open Category </SubHeading>

              <FourthHeading>DSTA BrainhackCTF</FourthHeading>
              <SubHeading>2nd Place - Gold Award in JC/IP Category</SubHeading>
              <FourthHeading>
                Singapore Gaames Creation Competition 2018
              </FourthHeading>
              <SubHeading>Finalist & Merit Awardee</SubHeading>

              <FourthHeading>
                Singapore Gaames Creation Competition 2017
              </FourthHeading>
              <SubHeading>Finalist & Commendation Awardee</SubHeading>
            </motion.ul>
          </div>
        </div>
      </section>
    </main>
  );
}
