import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Courses from './Courses';

const LandingPage = () => {
  return (
    <div className=" bg-linear-to-br from-[#030712] to-[#131830]">
     
      <div className="p-4 flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-start px-16 py-6">


          <p className="text-xs text-gray-300 px-4 font-semibold py-1.5 bg-linear-to-br from-emerald-500/10 to-purple-500/30 rounded-full mb-3  border  border-purple-500 ">LIMITED SEATS AVAILABLE!</p>
          <h1 className="text-7xl font-bold text-white mb-6 ">Master Engineering Internships in <span className="whitespace-nowrap bg-linear-to-r from-sky-500 via-emerald-400 to-pink-400 text-transparent bg-clip-text">Just 28 Days</span></h1>
          <p className="text-lg text-gray-300 mb-8">Intensive courses designed to bridge the gap between academia and industry through project mastery and real startup exposure.</p>

          <div className="flex flex-row space-x-4">
            <button className="px-6 py-3 bg-linear-to-r from-sky-500  rounded-full font-semibold text-white text-md hover:from-indigo-600 to-purple-800 cursor-pointer">Start Your Journey</button>
            <button className="px-6 py-3 rounded-full font-semibold text-white border-2 border-emerald-400 text-md hover:bg-linear-to-r from-emerald-500 to-blue-700 cursor-pointer">Explore Courses </button>
          </div>
        </div>
        <div className="p-20 w-1/2 flex justify-center items-center drop-shadow-[0_0_100px_rgba(59,130,246,0.35)]">

          <DotLottieReact className=""
            src="https://lottie.host/6331af21-d8ee-4733-b36c-9712bb3709f4/bjndqv6lEA.lottie"
            loop
            autoplay
          />
        </div>


      </div>

      <div className="h-1 my-6 bg-linear-to-l from-[#0B1023] to-sky-700/50 
            "></div>


      <div className="px-20 py-16">
        <h2 className="text-5xl font-bold text-white mb-4">The Sprintern Advantage</h2>
        <p className="text-xl text-gray-300 mb-10">Experience a premium, enterprise-grade learning environment focused on accelerating your engineering career.</p>
        <div className="flex flex-row space-x-8 ">
          <div className="w-1/4 h-70 py-4 bg-linear-to-br from-indigo-800 to-[#070B1E] rounded-2xl flex items-start justify-center border border-[#0B132E] transition-all duration-300 ease-out 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-2">
            <div className="flex flex-col items-start justify-around  px-6 space-y-4">
              <span className="px-4 text-[15px] font-semibold py-2  border border-gray-400 rounded-full text-blue-200 ">
                <span className="flex flex-row items-center space-x-2">
                  <span>
                    <svg width="20px" height="20px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="Layer_3" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g>
                        <polygon fill="#ece6e7" points="30.367,21.922 16.96,8.113 21.334,22.747 17.885,26.021 31.04,39.887 26.867,25.322  " />
                        <path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M24,44   c-4.756,0-9.119-1.667-12.552-4.439l7.053-7.053l-2.754-2.902l-7.149,7.149C5.727,33.293,4,28.849,4,24C4,12.954,12.954,4,24,4   c4.849,0,9.293,1.727,12.755,4.597l-6.966,6.966l2.781,2.875l6.99-6.99C42.333,14.881,44,19.244,44,24C44,35.046,35.046,44,24,44z" fill="#e4d3d7" />
                      </g>
                    </svg>
                  </span>
                  <span>
                    FEATURE
                  </span>
                </span>

              </span>
              <span className="text-[20px] font-semibold text-gray-100">
                <h1 className="whitespace-nowrap -mb-1">Core Engineering </h1>
                <h1 className='whitespace-nowrap  text-white'>Focus</h1>
              </span>
              <p className="text-sm text-gray-200">Deep dive into specialized modules including Mechanical, Civil, and CSE.</p>
            </div>
          </div>




          <div className="w-1/4 h-70 py-4 bg-linear-to-br from-indigo-800 to-[#070B1E] rounded-2xl flex items-start justify-around border border-[#0B132E] transition-all duration-300 ease-out 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-2">
            <div className="flex flex-col justify-around items-start px-6 space-y-4">
              <span className="px-4 text-[15px] font-semibold py-2  outline rounded-full text-blue-200">
                <span className="flex flex-row items-center space-x-2">
                  <span>
                    <svg width="20px" height="20x" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="#f9f9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M92.953 57.154c22.628-22.627 57.983-35.355 76.368-33.94 1.414 18.384-11.314 53.74-33.941 76.367-22.628 22.627-48.084 39.598-62.226 45.255L47.698 119.38c5.657-14.142 22.628-39.598 45.255-62.226Zm-5.657 48.084-39.598 39.598" /><circle cx="128.309" cy="64.225" r="12" fill="#f8f5f5" transform="rotate(45 128.309 64.225)" /><path stroke="#faf3f3" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m115.581 119.38 1.569 17.256c.779 8.57-3.09 16.9-10.139 21.835l-16.886 11.82-1.414-32.527M73.154 76.953l-17.256-1.569a24 24 0 0 0-21.835 10.139l-11.82 16.886 32.527 1.414" /></svg>
                  </span>
                  <span>
                    FEATURE
                  </span>
                </span>

              </span>
              <span className="text-[20px] font-semibold text-gray-100">
                <h1 className="whitespace-nowrap -mb-1">Real Startup</h1>
                <h1 className='whitespace-nowrap  text-white'>Internships</h1>
              </span>
              <p className="text-sm text-gray-300">Gain hands-on experience by solving problems for high-growth startups.</p>
            </div>
          </div>




          <div className="w-1/4 h-70 py-4 bg-linear-to-br from-indigo-800 to-[#070B1E] rounded-2xl flex items-start justify-center border border-[#0B132E] transition-all duration-300 ease-out 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-2">
            <div className="flex flex-col justify-around items-start px-6 space-y-4">
              <span className="px-4 text-[15px] font-semibold py-2 outline rounded-full text-blue-200 ">
                <span className="flex flex-row items-center space-x-2">
                  <span>
                    <svg fill="#f5f0f0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="18px" height="18px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                      <path d="M98.6,32.6c24,0,43.4,19.4,43.4,43.4s-19.4,43.6-43.4,43.6s-43.4-19.4-43.4-43.4S74.6,32.6,98.6,32.6z M221.8,215.6h-54.4
	l25.4-43.8c5.2-9.2,2-20.8-7-26s-20.6-2-25.8,7l-25.4,43.8l-37.8-64.8C93.2,125,86,121.6,77,121.6c-1.2,0-3.8,0.4-5.2,0.8
	c-1.2,0.2-3,0.8-4.4,1.2C31,135.6,2.2,193.8,2.2,254c1,0,87.4,0,109.4,0c-0.8-1.2-1.6-2.2-2.4-3.4L65.4,175c-1.4-2.6-0.4-6,2-7.4
	c2.6-1.4,6-0.4,7.4,2l43.4,75c3.2,5.6,9.2,9.4,16.2,9.4h87.4c10.6,0,19-8.6,19-19C241,224,232.2,215.6,221.8,215.6z M203.613,29.883
	v-6.156l-6.453-1.09c-0.477-2.109-1.309-4.086-2.43-5.863l3.793-5.332l-4.355-4.355l-5.332,3.793
	c-1.773-1.121-3.75-1.949-5.863-2.43L181.887,2h-6.16l-1.086,6.449c-2.113,0.48-4.09,1.309-5.863,2.43l-5.332-3.793l-4.355,4.355
	l3.793,5.332c-1.121,1.777-1.953,3.754-2.43,5.863L154,23.727v6.156l6.453,1.086c0.477,2.113,1.309,4.09,2.43,5.867l-3.793,5.332
	l4.355,4.352l5.332-3.793c1.773,1.121,3.75,1.953,5.863,2.43l1.086,6.453h6.16l1.086-6.453c2.113-0.477,4.09-1.309,5.863-2.43
	l5.332,3.793l4.355-4.352l-3.793-5.332c1.121-1.777,1.953-3.754,2.43-5.867L203.613,29.883z M178.805,36.594
	c-5.402,0-9.785-4.383-9.785-9.789s4.383-9.789,9.785-9.789c5.406,0,9.789,4.383,9.789,9.789S184.211,36.594,178.805,36.594z
	 M246.48,65.19l7.52-4.667l-3.154-7.707l-8.635,1.943c-1.629-2.327-3.659-4.397-6.043-6.096l2.017-8.616l-7.68-3.22l-4.73,7.479
	c-2.883-0.509-5.782-0.505-8.584-0.035l-4.668-7.52l-7.707,3.154l1.943,8.635c-2.327,1.629-4.397,3.659-6.096,6.043l-8.616-2.017
	l-3.22,7.68l7.479,4.73c-0.509,2.883-0.505,5.782-0.035,8.584l-7.52,4.668l3.154,7.707l8.635-1.943
	c1.629,2.327,3.659,4.397,6.043,6.096l-2.017,8.616l7.68,3.22l4.73-7.479c2.883,0.509,5.782,0.505,8.584,0.035l4.668,7.52
	l7.707-3.154l-1.943-8.635c2.327-1.629,4.397-3.659,6.096-6.043l8.616,2.017l3.22-7.68l-7.479-4.73
	C246.953,70.891,246.95,67.992,246.48,65.19z M233.584,74.493c-2.827,6.743-10.584,9.918-17.327,7.091
	c-6.743-2.827-9.918-10.584-7.091-17.327s10.584-9.918,17.327-7.091C233.236,59.993,236.41,67.75,233.584,74.493z"/>
                    </svg>
                  </span>
                  <span>
                    FEATURE
                  </span>
                </span>

              </span>
              <span className="text-[20px] font-semibold text-gray-100">
                <h1 className="whitespace-nowrap -mb-1">Expert Mentorship</h1>

              </span>
              <p className="text-sm text-gray-200">1-on-1 sessions with industry leads from Fortune 500 companies.</p>
            </div>
          </div>




          <div className="w-1/4 h-70 py-4 bg-linear-to-br from-indigo-800 to-[#070B1E] rounded-2xl flex items-start justify-center border border-[#0B132E] transition-all duration-300 ease-out 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-2">
            <div className="flex flex-col justify-around items-start px-6 space-y-4">
              <span className="px-4 text-[15px] font-semibold py-2  outline rounded-full text-blue-200 ">
                <span className="flex flex-row items-center space-x-2">
                  <span>
                    <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z" stroke="#fdfcfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span>
                    FEATURE
                  </span>
                </span>

              </span>
              <span className="text-[20px] font-semibold text-gray-100">
                <h1 className="whitespace-nowrap -mb-1">Global Certification
                </h1>

              </span>
              <p className="text-sm text-gray-200">Receive industry-recognized credentials upon successful completion.</p>
            </div>
          </div>

        </div>



      </div>


      {/* Section 3 */}
      <div className="mt-10 px-20 py-16 ">
        <h2 className="text-center text-white text-4xl font-bold">Course <span className="bg-linear-to-r from-violet-600  to-pink-500 text-transparent bg-clip-text">Framework</span></h2>
        <div className="flex flex-row space-x-8 text-white px-30 py-4">
          <div className="w-[49%] flex flex-col items-end">

            {/* box */}
            <div className="pt-14">
              <div className="w-20 h-20  rounded-2xl bg-violet-500/10  outline-2 outline-offset-4 outline-violet-500">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                  <span>
                    <p className="font-bold text-sm text-amber-200">TIME</p>
                  </span>
                  <span>
                    <p className="text-sm font-semibold">Start</p>
                  </span>
                </div>
              </div>
            </div>


            <div className="pt-36">
              <h2 className="text-xl font-semibold text-end">Learning Phase (Lectures)</h2>
              <p className="text-gray-300 text-end">Daily lectures, concepts, demos and practice sessions.</p>
            </div>

            {/* box */}
            <div className="pt-38">
              <div className="w-20 h-20  rounded-2xl bg-violet-500/10  outline-2 outline-offset-4 outline-violet-500">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                  <span>
                    <p className="font-bold text-sm text-amber-200">TIME</p>
                  </span>
                  <span>
                    <p className="text-sm font-semibold">Day 7</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-36">
              <h2 className="text-xl font-semibold text-end">Project Phase
                (Lectures)</h2>
              <p className="text-gray-300 text-end">Build a real-world project with guidance and mentorship.</p>
            </div>


            {/* box */}
            <div className="pt-38">
              <div className="w-20 h-20  rounded-2xl bg-violet-500/10  outline-2 outline-offset-4 outline-violet-500">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                  <span>
                    <p className="font-bold text-sm text-amber-200">TIME</p>
                  </span>
                  <span>
                    <p className="text-sm font-semibold">Day 27</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-36">
              <h2 className="text-xl font-semibold text-end">Certificate Unlocked</h2>
              <p className="text-gray-300 text-end">Certificate is unlocked after successful review.

              </p>
            </div>


            {/* Timeline */}
          </div>
          <div className="w-[2%] ">
            <div className="flex flex-col space-y-1 justify-start items-center h-full ">


              <div className="w-0.5 h-20 rounded-full bg-rose-500"></div>
              <div className="w-1 h-1 rounded-full  border-4 border-emerald-300 outline-2 outline-offset-4 outline-emerald-500"></div>

              <div className="w-0.5 h-50 rounded-full bg-rose-500"></div>
              <div className="w-1 h-1 rounded-full  border-4 border-emerald-300 outline-2 outline-offset-4 outline-emerald-500"></div>

              <div className="w-0.5 h-50 rounded-full bg-rose-500"></div>
              <div className="w-1 h-1 rounded-full  border-4 border-emerald-300 outline-2 outline-offset-4 outline-emerald-500"></div>

              <div className="w-0.5 h-50 rounded-full bg-rose-500"></div>
              <div className="w-1 h-1 rounded-full  border-4 border-emerald-300 outline-2 outline-offset-4 outline-emerald-500"></div>

              <div className="w-0.5 h-50 rounded-full bg-rose-500"></div>
              <div className="w-1 h-1 rounded-full  border-4 border-emerald-300 outline-2 outline-offset-4 outline-emerald-500"></div>

              <div className="w-0.5 h-50 rounded-full bg-rose-500"></div>
              <div className="w-1 h-1 rounded-full  border-4 border-emerald-300 outline-2 outline-offset-4 outline-emerald-500"></div>
              <div className="w-0.5 h-20 rounded-full bg-linear-to-b from-rose-500 to-[#0D1326]"></div>


            </div>
          </div>
          <div className="w-[49%] ">
            <div className="pt-14">
              <h2 className="text-xl font-semibold">Enrollment & Onboarding</h2>
              <p className="text-gray-300">Student enrolls and gets access to dashboard, roadmap & resources.</p>
            </div>

            {/* Box */}
            <div className="pt-34">
              <div className="w-20 h-20  rounded-2xl bg-violet-500/10  outline-2 outline-offset-4 outline-violet-500">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                  <span>
                    <p className="font-bold text-sm text-amber-200">TIME</p>
                  </span>
                  <span>
                    <p className="text-sm font-semibold">Days 1-7</p>
                  </span>
                </div>
              </div>
            </div>




            <div className="pt-36">
              <h2 className="text-xl font-semibold">Mid Evaluation</h2>
              <p className="text-gray-300">Progress check and readiness for the project phase.</p>
            </div>

            {/* Box */}
            <div className="pt-34">
              <div className="w-20 h-20  rounded-2xl bg-violet-500/10  outline-2 outline-offset-4 outline-violet-500">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                  <span>
                    <p className="font-bold text-sm text-amber-200">TIME</p>
                  </span>
                  <span>
                    <p className="text-sm font-semibold">Days 8-26</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-40">
              <h2 className="text-xl font-semibold">Project Submission</h2>
              <p className="text-gray-300">Final project is submitted for review and validation.</p>
            </div>


            {/* Box */}
            <div className="pt-38">
              <div className="w-20 h-20  rounded-2xl bg-violet-500/10  outline-2 outline-offset-4 outline-violet-500">
                <div className='w-full h-full flex flex-col items-center justify-center'>
                  <span>
                    <p className="font-bold text-sm text-amber-200">TIME</p>
                  </span>
                  <span>
                    <p className="text-sm font-semibold">Day 28</p>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* Section 3  */}
      <div className="px-20 py-10 drop-shadow-[0_0_600px_rgba(59,130,246,0.35)]">
        <h1 className="bg-linear-to-r from-sky-500  to-sky-200 text-transparent bg-clip-text font-bold text-4xl mb-3">Internship-Style Courses</h1>
        <p className="text-lg text-gray-200">Learn for 28 days, build one project, and submit it like a real internship.</p>

        <div className="grid grid-cols-3 gap-5 py-10">
          <div className="bg-[#171726] h-60 rounded-2xl border border-gray-700 transition-all duration-300 ease-out 
             hover:-translate-y-2">
            <div className="flex flex-col justify-start items-start py-4 px-6">
              <div className="p-4">
                <svg fill="#0CA0FF" width="28px" height="28px" viewBox="0 0 35 35" data-name="Layer 2" id="ac59cc0a-8895-4ad6-9f65-67566b7e9681" xmlns="http://www.w3.org/2000/svg"><path d="M27.059,31.25H7.941A4.2,4.2,0,0,1,3.75,27.059V7.941A4.2,4.2,0,0,1,7.941,3.75H27.059A4.2,4.2,0,0,1,31.25,7.941V27.059A4.2,4.2,0,0,1,27.059,31.25ZM7.941,6.25A1.693,1.693,0,0,0,6.25,7.941V27.059A1.693,1.693,0,0,0,7.941,28.75H27.059a1.693,1.693,0,0,0,1.691-1.691V7.941A1.693,1.693,0,0,0,27.059,6.25Z" /><path d="M22.119,24.75H12.881a2.635,2.635,0,0,1-2.631-2.631V12.881a2.634,2.634,0,0,1,2.631-2.631h9.238a2.634,2.634,0,0,1,2.631,2.631v9.238A2.635,2.635,0,0,1,22.119,24.75Zm-9.238-12a.131.131,0,0,0-.131.131v9.238a.131.131,0,0,0,.131.131h9.238a.131.131,0,0,0,.131-.131V12.881a.131.131,0,0,0-.131-.131Z" /><path d="M12.982,4.4A1.25,1.25,0,0,1,11.734,3.2l-.034-1A1.25,1.25,0,0,1,12.908.905,1.263,1.263,0,0,1,14.2,2.112l.034,1A1.252,1.252,0,0,1,13.025,4.4Z" /><path d="M17.516,4.4A1.251,1.251,0,0,1,16.267,3.2l-.033-1A1.249,1.249,0,0,1,17.442.905a1.223,1.223,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,17.558,4.4Z" /><path d="M22.049,4.4A1.251,1.251,0,0,1,20.8,3.2l-.033-1A1.249,1.249,0,0,1,21.975.905a1.22,1.22,0,0,1,1.291,1.208l.033,1A1.25,1.25,0,0,1,22.091,4.4Z" /><path d="M32.081,23.334a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M32.081,18.8a1.25,1.25,0,0,1-.042-2.5l1-.034a1.25,1.25,0,1,1,.085,2.5l-1,.034Z" /><path d="M32.081,14.266a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M22.066,34.1a1.25,1.25,0,0,1-1.249-1.208l-.033-1A1.251,1.251,0,0,1,21.991,30.6,1.238,1.238,0,0,1,23.283,31.8l.033,1a1.249,1.249,0,0,1-1.207,1.291Z" /><path d="M17.532,34.1a1.249,1.249,0,0,1-1.248-1.209l-.033-1a1.25,1.25,0,0,1,1.208-1.29A1.237,1.237,0,0,1,18.75,31.8l.033,1a1.249,1.249,0,0,1-1.208,1.29Z" /><path d="M13,34.1a1.249,1.249,0,0,1-1.248-1.209l-.034-1a1.25,1.25,0,0,1,2.5-.082l.034,1a1.25,1.25,0,0,1-1.208,1.29Z" /><path d="M1.918,14.216a1.25,1.25,0,0,1-.041-2.5l1-.033a1.25,1.25,0,1,1,.083,2.5l-1,.033Z" /><path d="M1.918,18.75a1.25,1.25,0,0,1-.041-2.5l1-.034a1.25,1.25,0,1,1,.083,2.5l-1,.034Z" /><path d="M1.918,23.284a1.25,1.25,0,0,1-.042-2.5l1-.034a1.269,1.269,0,0,1,1.292,1.206,1.251,1.251,0,0,1-1.207,1.292l-1,.034Z" /></svg>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-white">Computer Science</h1>

                <ul className="p-2 list-disc marker:text-sky-500 marker:text-lg  text-[14px] text-gray-300 font-semibold">
                  <li>Python Basics → Student Management System</li>
                  <li>Web Development → Personal Portfolio Website</li>
                  <li>JavaScript → To-Do List Web App</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#171726] h-60 rounded-2xl border border-gray-700 transition-all duration-300 ease-out 
             hover:-translate-y-2">
            <div className="flex flex-col justify-start items-start py-4 px-6">
              <div className="p-4">
                <svg fill="#0CA0FF" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.76 16c-0.077-4.251-3.588-7.636-7.839-7.563-0.391 0-0.801 0.032-1.203 0.068-3.359 0.495-5.599 2.907-6.839 4.76-1.265-1.853-3.52-4.265-6.853-4.76-0.401-0.036-0.797-0.068-1.199-0.068-4.249-0.063-7.749 3.317-7.828 7.563 0.079 4.245 3.579 7.625 7.828 7.563 0.401 0 0.797-0.032 1.224-0.084 3.36-0.479 5.599-2.891 6.855-4.744 1.265 1.853 3.505 4.265 6.853 4.76 0.412 0.036 0.803 0.068 1.213 0.068 4.229 0.041 7.709-3.333 7.787-7.563zM8.64 20.803c-0.265 0.052-0.572 0.052-0.837 0.052-2.767 0.057-5.057-2.12-5.136-4.881 0.088-2.765 2.385-4.943 5.145-4.88 0.267 0 0.563 0.027 0.839 0.052 3.161 0.469 5.095 3.563 5.751 4.828-0.667 1.267-2.599 4.401-5.751 4.829zM17.333 16c0.651-1.24 2.588-4.36 5.745-4.828 0.271-0.052 0.561-0.052 0.828-0.052 2.776-0.084 5.088 2.104 5.161 4.88-0.089 2.76-2.385 4.937-5.147 4.88-0.271 0-0.561-0.025-0.828-0.052-3.145-0.468-5.093-3.588-5.744-4.828zM5.615 16.787h4.719v-1.547h-4.708v1.547zM24.453 16.787h1.588v-1.547h-1.604v-1.589h-1.505v1.604h-1.599v1.532h1.599v1.573h1.537v-1.557zM32 9.412c0 0.4-0.292 0.681-0.708 0.681-0.38 0.016-0.699-0.287-0.704-0.667 0-0.375 0.319-0.692 0.704-0.692 0.416 0 0.708 0.292 0.708 0.677zM30.787 9.412c0 0.296 0.213 0.536 0.531 0.536 0.297 0 0.511-0.24 0.511-0.536 0-0.292-0.213-0.532-0.511-0.532-0.317-0.025-0.531 0.213-0.531 0.532zM31.188 9.76h-0.136v-0.692l0.265-0.016c0.12 0 0.188 0.016 0.245 0.041 0.052 0.027 0.077 0.079 0.077 0.147 0 0.077-0.052 0.135-0.145 0.145 0.068 0.027 0.093 0.084 0.12 0.177l0.036 0.172h-0.156c-0.025-0.027-0.025-0.095-0.057-0.172-0.025-0.068-0.052-0.093-0.145-0.093h-0.063l-0.032 0.291zM31.213 9.36h0.079c0.093 0 0.135-0.011 0.135-0.095 0-0.068-0.041-0.093-0.135-0.093h-0.095v0.188z" />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-white">Electronics & Communication</h1>

                <ul className="p-2 list-disc marker:text-sky-500 marker:text-lg  text-[14px] text-gray-300 font-semibold">
                  <li>Arduino Basics → Automatic Street Light</li>
                  <li>IoT Fundamentals → Smart Home System</li>
                  <li>Embedded Systems → Temp Monitoring System</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#171726] h-60 rounded-2xl border border-gray-700 transition-all duration-300 ease-out 
             hover:-translate-y-2">
            <div className="flex flex-col justify-start items-start py-4 px-6">
              <div className="p-4">
                <svg width="30px" height="30px" fill="#0CA0FF" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs></defs><polygon class="cls-1" points="8.29 1.71 18.5 1.71 13.86 9.14 17.57 9.14 7.36 20.29 9.21 12.86 5.5 12.86 8.29 1.71" /></svg>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-white">Electrical Engineering</h1>

                <ul className="p-2 list-disc marker:text-sky-500 marker:text-lg  text-[14px] text-gray-300 font-semibold">
                  <li>MATLAB Basics → Power System Analysis</li>
                  <li>Electric Vehicle Basics → EV Charging Model</li>
                  <li>Renewable Energy → Solar Power Calculation</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#171726] h-60 rounded-2xl border border-gray-700 transition-all duration-300 ease-out 
             hover:-translate-y-2">
            <div className="flex flex-col justify-start items-start py-4 px-6">
              <div className="p-4">
                <svg fill="#0CA0FF" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 297 297" xml:space="preserve">
                  <g>
                    <g>
                      <g>
                        <path d="M170.755,154.495l-13.94-13.941c2.221-4.142,4.02-8.484,5.378-12.984h19.715c3.314,0,6-2.687,6-6V92.251
				c0-3.314-2.687-6-6-6h-19.715c-1.358-4.5-3.157-8.842-5.379-12.983l13.941-13.942c2.344-2.343,2.344-6.142,0-8.485L150.024,30.11
				c-2.342-2.344-6.143-2.344-8.485,0l-13.941,13.941c-4.142-2.222-8.484-4.021-12.984-5.379V18.956c0-3.314-2.687-6-6-6H79.295
				c-3.314,0-6,2.687-6,6v19.715c-4.5,1.358-8.842,3.157-12.983,5.379l-13.94-13.941c-1.126-1.126-2.652-1.758-4.243-1.758
				c-1.591,0-3.117,0.632-4.242,1.757L17.153,50.839c-2.344,2.344-2.344,6.143-0.001,8.486l13.941,13.942
				c-2.222,4.142-4.021,8.484-5.379,12.983H6c-3.314,0-6,2.687-6,6v29.318c0,3.314,2.687,6,6,6h19.714
				c1.358,4.499,3.157,8.841,5.379,12.984l-13.94,13.941c-2.344,2.343-2.344,6.142,0,8.485l20.731,20.731
				c2.341,2.343,6.142,2.344,8.485,0.001l13.941-13.94c4.143,2.222,8.485,4.021,12.984,5.379v19.715c0,3.314,2.687,6,6,6h29.318
				c3.314,0,6-2.687,6-6V175.15c4.499-1.358,8.841-3.157,12.983-5.379l13.942,13.941c2.342,2.342,6.143,2.343,8.485-0.001
				l20.731-20.731C173.099,160.637,173.099,156.838,170.755,154.495z M93.954,129.339c-12.367,0-22.429-10.062-22.429-22.429
				c0-12.368,10.062-22.429,22.429-22.429c12.367,0,22.429,10.061,22.429,22.429C116.383,119.277,106.321,129.339,93.954,129.339z"
                        />
                        <path d="M296.899,212.598l-3.774-20.458c-0.289-1.566-1.188-2.951-2.498-3.855c-1.311-0.902-2.923-1.247-4.491-0.958
				l-12.502,2.307c-1.239-2.266-2.643-4.432-4.204-6.488l7.209-10.471c0.902-1.311,1.247-2.926,0.958-4.491
				s-1.188-2.951-2.498-3.854l-17.136-11.798c-2.728-1.876-6.465-1.19-8.345,1.54l-7.208,10.47c-2.479-0.725-5.002-1.264-7.56-1.612
				l-2.307-12.502c-0.601-3.259-3.736-5.417-6.989-4.812l-20.458,3.774c-1.566,0.289-2.951,1.188-3.855,2.498
				c-0.902,1.311-1.247,2.926-0.958,4.491l2.307,12.502c-2.266,1.239-4.432,2.643-6.488,4.204l-10.471-7.209
				c-1.311-0.901-2.924-1.247-4.492-0.958c-1.565,0.289-2.951,1.188-3.854,2.498l-11.798,17.136
				c-0.902,1.311-1.247,2.926-0.958,4.492c0.289,1.565,1.188,2.951,2.498,3.854l10.47,7.208c-0.725,2.478-1.264,5.002-1.612,7.56
				l-12.503,2.307c-1.565,0.289-2.951,1.188-3.854,2.498c-0.902,1.311-1.247,2.926-0.958,4.491l3.775,20.458
				c0.602,3.259,3.735,5.419,6.99,4.812l12.502-2.307c1.238,2.265,2.644,4.432,4.204,6.488l-7.208,10.47
				c-0.903,1.311-1.248,2.926-0.959,4.491s1.188,2.951,2.498,3.854l17.136,11.798c2.727,1.876,6.465,1.19,8.345-1.54l7.208-10.47
				c2.478,0.726,5.002,1.264,7.56,1.613l2.307,12.502c0.533,2.891,3.056,4.912,5.894,4.912c0.361,0,0.728-0.032,1.095-0.101
				l20.458-3.774c1.566-0.289,2.951-1.188,3.855-2.498c0.902-1.311,1.247-2.926,0.958-4.491l-2.307-12.502
				c2.266-1.239,4.432-2.643,6.487-4.204l10.471,7.209c1.31,0.901,2.921,1.244,4.491,0.958c1.565-0.289,2.951-1.188,3.854-2.498
				l11.798-17.136c1.879-2.73,1.19-6.465-1.54-8.345l-10.47-7.208c0.726-2.478,1.264-5.002,1.613-7.56l12.502-2.307
				C295.346,218.985,297.501,215.856,296.899,212.598z M239.41,222.818c-4.432,6.436-13.272,8.069-19.712,3.637
				c-6.437-4.433-8.068-13.275-3.636-19.712c2.147-3.118,5.379-5.213,9.102-5.901c0.867-0.16,1.737-0.239,2.601-0.239
				c2.843,0,5.617,0.857,8.008,2.504C242.209,207.537,243.84,216.38,239.41,222.818z"/>
                      </g>
                    </g>
                  </g>
                </svg>

              </div>
              <div>
                <h1 className="font-semibold text-xl text-white">Mechanical Engineering</h1>

                <ul className="p-2 list-disc marker:text-sky-500 marker:text-lg  text-[14px] text-gray-300 font-semibold">
                  <li>AutoCAD → 2D House Plan Design</li>
                  <li>Mechatronics Basics → Line Following Robot</li>
                  <li>Machine Design → Mechanical Component CAD</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#171726] h-60 rounded-2xl border border-gray-700 transition-all duration-300 ease-out 
             hover:-translate-y-2">
            <div className="flex flex-col justify-start items-start py-4 px-6">
              <div className="p-4">
                <svg fill="#0CA0FF" height="25px" width="25px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
                  <g>
                    <g>
                      <path d="m494.6,428.9l-141.3-233.5c-0.5-0.8 0.4-105.4 0.4-105.4h-194.3c0,0-0.2,104.6-0.7,105.4l-141.3,233.5c-8.5,14-8.5,30.1-0.1,44 10.1,16.8 30.7,27.3 53.6,27.3h370.1c23,0 43.5-10.4 53.6-27.3 8.5-14 8.5-30 0-44z" />
                      <path d="m152.3,50.9h207.4c11.3,0 20.4-8.7 20.4-19.5 0-10.8-9.1-19.5-20.4-19.5h-207.4c-11.3,0-20.4,8.7-20.4,19.5 0,10.8 9.1,19.5 20.4,19.5z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-white">Chemical Engineering</h1>

                <ul className="p-2 list-disc marker:text-sky-500 marker:text-lg  text-[14px] text-gray-300 font-semibold">
                  <li>Process Calculations → Mass Balance</li>
                  <li>MATLAB → Reactor Simulation</li>
                  <li>Process Safety → Industrial Safety</li>

                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#171726] h-60 rounded-2xl border border-gray-700 transition-all duration-300 ease-out 
             hover:-translate-y-2">
            <div className="flex flex-col justify-start items-start py-4 px-6">
              <div className="p-4">
                <svg fill="#0CA0FF" height="30px" width="30px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><polygon class="cls-1" points="9.13 22.54 5.29 22.54 5.29 6.25 5.29 1.46 9.13 1.46 9.13 22.54"/><polygon class="cls-1" points="1.46 6.25 22.54 6.25 22.54 5.29 9.13 1.46 5.29 1.46 1.46 5.29 1.46 6.25"/><line class="cls-1" x1="23.5" y1="22.54" x2="0.5" y2="22.54"/><path class="cls-1" d="M20.62,6.25V9.64a1.82,1.82,0,0,0,.9,1.63A1.92,1.92,0,1,1,18.71,13"/><line class="cls-1" x1="9.13" y1="16.79" x2="5.29" y2="20.63"/><line class="cls-1" x1="5.29" y1="12" x2="9.13" y2="15.83"/><line class="cls-1" x1="9.13" y1="7.21" x2="5.29" y2="11.04"/></svg>
              </div>
              <div>
                <h1 className="font-semibold text-xl text-white">Civil Engineering</h1>

                <ul className="p-2 list-disc marker:text-sky-500 marker:text-lg  text-[14px] text-gray-300 font-semibold">
                  <li>AutoCAD → Residential Building Layout
                  </li>
                  <li>AutoCAD → Residential Building Layout
                  </li>
                  <li>Structural Basics → Beam Design Calculation</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 4 - Get Started Section (last) */}

      <div className="py-30 px-20 w-full flex flex-row justify-around items-center">
        <div className="w-1/2 px-10 py-20  flex flex-col items-start justify-center">
          <h1 className="text-start text-white font-bold text-6xl mb-4">Ready to sprint into your career?</h1>
          <p className="text-gray-400 font-semibold text-lg mb-4">Join 5000+ students who transformed their technical skills with Sprintern. Get updates, early access, and exclusive offers straight to your inbox.</p>

          <div className="flex flex-row space-x-10">
            <span className="flex flex-col items-start justify-center">
              <span><p className="text-4xl font-bold text-white ">100+</p></span>
              <span><p className="text-sm font-semibold text-gray-400">Students</p></span>
            </span>
            <span className="flex flex-col items-start justify-center">
              <span><p className="text-4xl font-bold text-white ">10+</p></span>
              <span><p className="text-sm font-semibold text-gray-400">Projects</p></span>
            </span>
            <span className="flex flex-col items-start justify-center">
              <span><p className="text-4xl font-bold text-white ">60%</p></span>
              <span><p className="text-sm font-semibold text-gray-400">Career Boost</p></span>
            </span>
          </div>

        </div>
        <div className="w-1/2 mx-16 px-10 py-10 border border-gray-700 rounded-2xl bg-[#0b0a1f]">
                <h2 className="text-2xl font-semibold text-white mb-8">Get Started Today</h2>
            <form action="">
              <label htmlFor="name" className="mb-2 block font-medium text-md text-gray-300">Full Name *</label>
              <input id="name" type="text" placeholder="Enter your name" className="w-full px-8 py-3 bg-[#0F1932] placeholder-gray-300 placeholder-opacity-10 rounded-full mb-6" />
              <label htmlFor="email" className="mb-2 block font-medium text-md text-gray-300">Email *</label>
              <input id="email" type="text" placeholder="Enter your email" className="w-full px-8 py-3 bg-[#0F1932] placeholder-gray-300 placeholder-opacity-10 rounded-full mb-6" />
              <label htmlFor="name" className="mb-2 block font-medium text-md text-gray-300">College (Optional)</label>
              <input id="name" type="text" placeholder="Enter your college name" className="w-full px-8 py-3 bg-[#0F1932] placeholder-gray-300 placeholder-opacity-10 rounded-full mb-10 " />
              <button className="w-full py-3 bg-sky-500 rounded-full  cursor-pointer bg-linear-to-br from-sky-500 to-blue-600  text-white hover:from-sky-400 hover:to-blue-500 font-semibold">Claim Your Spot → </button>

              <p className="text-xs text-gray-400 pt-4">We respect your privacy. No spam, ever.</p>
            </form>
         
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default LandingPage