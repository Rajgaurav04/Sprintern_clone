import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

{/* <DotLottieReact
      src="https://lottie.host/d7efbcd8-0a19-4bd4-bb1a-f779d4b8761e/hLkGGexlPH.lottie"
      loop
      autoplay
    />
     */}
const LandingPage = () => {
  return (
    <div className="p-4 flex flex-row bg-linear-to-br from-[#030712] to-[#0F172A]">
         <div className="w-1/2 flex flex-col justify-center items-start px-20 py-6">
         
         
         <p className="text-xs text-gray-300 px-4 font-semibold py-[6px] bg-linear-to-br from-emerald-500/10 to-purple-500/30 rounded-full mb-3  border  border-purple-500 ">LIMITED SEATS AVAILABLE!</p>
            <h1 className="text-7xl font-bold text-white mb-6 ">Master Engineering Internships in <span className="whitespace-nowrap bg-linear-to-r from-sky-500 via-emerald-400 to-pink-400 text-transparent bg-clip-text">Just 28 Days</span></h1>
            <p className="text-lg text-gray-300 mb-8">Intensive courses designed to bridge the gap between academia and industry through project mastery and real startup exposure.</p>

            <div className="flex flex-row space-x-4">
              <button className="px-6 py-3 bg-linear-to-r from-sky-500 to-emerald-700 rounded-full font-semibold text-white text-md hover:from-indigo-600 to-purple-800 cursor-pointer">Start Journey</button>
              <button  className="px-6 py-3 rounded-full font-semibold text-white border-2 border-emerald-400 text-md hover:bg-linear-to-r from-emerald-500 to-blue-700 cursor-pointer">Explore Courses </button>
            </div>
          </div>
          <div className="p-8 w-1/2 flex justify-center items-center ">
          <DotLottieReact
      src="https://lottie.host/6331af21-d8ee-4733-b36c-9712bb3709f4/bjndqv6lEA.lottie"
      loop
      autoplay
    />
          </div>
    </div>
  )
}

export default LandingPage