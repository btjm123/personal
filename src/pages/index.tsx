import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
  FirstHeading,
  FourthHeading,
  SecondHeading,
  SubHeading,
  ThirdHeading,
} from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      {/* Intro Section */}
      <section className="h-screen bg-green-200 flex items-center">
        <div className="w-1/2 pl-40">
          <FirstHeading>Hello World, I am Marcus Lee</FirstHeading>
          <SecondHeading>
            I am an incoming XXX XX Freshman and was offered the XXX Merit
            Scholarship.
          </SecondHeading>
        </div>
      </section>

      {/*  About Me Section */}
      <section className="h-screen bg-blue-100 flex justify-center">
        <div className="w-4/5 mt-40">
          <div className="w-3/5">
            <FirstHeading>about me. 🤪</FirstHeading>
            <ThirdHeading>
              My first encounter with programming was through the Inspect
              Element Function. Since then I started learning a bunch of
              languages and frameworks and happened to really like it a lot.
            </ThirdHeading>
            <ThirdHeading>
              Programming empowers me to build products that have a real impact
              on people lives. I also enjoy solving algorithmic and mathematical
              problems with code.
            </ThirdHeading>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="h-screen bg-purple-100 flex justify-center">
        <div className="w-4/5 mt-20">
          <div className="w-3/5">
            <FirstHeading>awards. 🎖️</FirstHeading>
            <ul>
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
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
