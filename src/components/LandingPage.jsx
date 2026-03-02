import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const LandingPage = () => {
  return (
    <div className=" bg-linear-to-br from-[#030712] to-[#131830]">
      <div className="p-4 flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-start px-16 py-6">


          <p className="text-xs text-gray-300 px-4 font-semibold py-[6px] bg-linear-to-br from-emerald-500/10 to-purple-500/30 rounded-full mb-3  border  border-purple-500 ">LIMITED SEATS AVAILABLE!</p>
          <h1 className="text-7xl font-bold text-white mb-6 ">Master Engineering Internships in <span className="whitespace-nowrap bg-linear-to-r from-sky-500 via-emerald-400 to-pink-400 text-transparent bg-clip-text">Just 28 Days</span></h1>
          <p className="text-lg text-gray-300 mb-8">Intensive courses designed to bridge the gap between academia and industry through project mastery and real startup exposure.</p>

          <div className="flex flex-row space-x-4">
            <button className="px-6 py-3 bg-linear-to-r from-sky-500 to-emerald-700 rounded-full font-semibold text-white text-md hover:from-indigo-600 to-purple-800 cursor-pointer">Start Your Journey</button>
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

      <div className="h-1 my-6 bg-linear-to-l from-[#0E142A] to-sky-700/50 
            "></div>


      <div className="px-20 pt-8 pb-16">
        <h2 className="text-5xl font-bold text-white mb-4">The Sprintern Advantage</h2>
        <p className="text-xl text-gray-300 mb-10">Experience a premium, enterprise-grade learning environment focused on accelerating your engineering career.</p>
        <div className="flex flex-row space-x-8 ">
          <div className="w-1/4 h-70 py-4 bg-linear-to-br from-indigo-800 to-[#070B1E] rounded-2xl flex items-start justify-center border border-[#0B132E] transition-all duration-300 ease-out 
            hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-2">
            <div className="flex flex-col items-start justify-around  px-6 space-y-4">
              <span className="px-4 text-[15px] font-semibold py-[8px]  border border-gray-400 rounded-full text-blue-200 ">
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
              <span className="px-4 text-[15px] font-semibold py-[8px]  outline rounded-full text-blue-200">
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
              <span className="px-4 text-[15px] font-semibold py-[8px]  outline rounded-full text-blue-200 ">
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
              <span className="px-4 text-[15px] font-semibold py-[8px]  outline rounded-full text-blue-200 ">
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
    </div>
  )
}

export default LandingPage