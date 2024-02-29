"use client";
import React from 'react'
import LottieAnimate from './HeroLottieAnimate'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link'

const HeroSection = () => {

  const openResume = () => {
    window.open('/assets/resume.pdf', '_blank'); //replace resume.pdf with your resume file
  };

  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-7 items-center justify-items-center">
          <div className="col-span-7 place-self-center text-center sm:text-left">
            <p className='text-textColor text-base sm:text-lg lg:text-xl mb-4 mt-10'>
              Hi, my name is
            </p>
            <p className='text-primaryColor text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4'>
              John Doe
            </p>
            <div className='mb-4'>
              <TypeAnimation
                sequence={[
                  "Job Title 1",
                  2000,
                  "Job Title 2",
                  2000,
                  "Job Title 3",
                  2000,
                  // add more job titles if you want - make sure to restart the server when editing this part to see the changes
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className='text-primaryColor text-4xl sm:text-5xl lg:text-6xl font-extrabold'
              />
            </div>
            <p className='text-textColor text-base sm:text-lg lg:text-xl mb-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <Link href='#contact'>
                <button className='px-1.5 py-1.5 w-full sm:w-fit rounded-full mr-4 bg-secondaryColor hover:bg-secondaryColor text-textColor hover:scale-110 transition duration-200 ease-in-out'>
                  <span className='px-5 py-2 block bg-bgColor hover:bg-secondaryColor rounded-full'>Contact Me</span>
                </button>
              </Link>
              <button onClick={openResume} className='px-1.5 py-1.5 w-full sm:w-fit rounded-full bg-secondaryColor hover:bg-secondaryColor text-textColor mt-3 hover:scale-110 transition duration-200 ease-in-out'>
                <span className='px-5 py-2 block bg-bgColor hover:bg-secondaryColor rounded-full'>Download Resume</span>
              </button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-6 lg:mt-0">
            <div className="rounded-full bg-bgColor w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <LottieAnimate/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSection