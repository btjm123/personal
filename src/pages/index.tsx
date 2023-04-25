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
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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

  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: '-50%' },
  };

  const boxDelayVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
    hidden: { opacity: 0, x: '-50%' },
  };

  const fadeInVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.7 },
  };

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
    <main>
      {/* Navbar */}
      {/* Intro Section */}
      <section className="min-h-screen bg-green-200 flex items-center">
        <div className="w-1/2 pl-40">
          <FirstHeading>Hello World, I am Marcus Wee</FirstHeading>
          <SecondHeading>
            I am an incoming XXX XX Freshman and was offered the XXX Merit
            Scholarship.
          </SecondHeading>
        </div>
      </section>

      {/*  About Me Section */}
      <section className="min-h-screen bg-blue-100 flex justify-center">
        <div className="w-4/5 mt-40">
          <div className="w-3/5">
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
      <section className="min-h-screen bg-orange-100 flex justify-center">
        <div className="w-4/5 mt-40">
          <div className="w-4/5">
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

              <div className="flex w-2/5 justify-between mt-8">
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

              <div className="flex w-1/3 justify-between mt-8">
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
      <section className="min-h-screen bg-purple-100 flex justify-center">
        <div className="w-4/5 mt-20">
          <div className="w-3/5">
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
