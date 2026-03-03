const About = () => {
  return (
    <div className="bg-linear-to-br from-[#030712] to-[#131830]">
        <div className=" py-20 px-10 flex flex-col space-y-10 items-center justify-start">
            <span className="mb-5 bg-linear-to-r from-teal-400 via-orange-300 to-pink-500 text-transparent bg-clip-text "><p className="text-7xl font-bold ">About Sprintern</p></span>
            <span className="mb-18"><p className="text-xl text-gray-300 px-80 text-center">We provide internships through structured courses and real project submissions — so students gain real experience while they learn.</p></span>
            <span className="flex flex-col items-start justify-start px-50 mb-18">
                <span><p className="text-3xl font-bold text-white mb-4">Our Mission</p></span>
                <span><p className="text-lg text-gray-400">Our mission is simple: make students industry-ready by combining learning with real work. At Sprintern, students enroll in structured courses, complete guided projects, and earn internship experience by submitting and building real-world projects — not just watching tutorials.</p></span>
            </span>

            <span className="w-full px-50 mb-18">
                <h2 className="text-3xl font-bold text-white mb-8 text-start">What We Do</h2>
                <span className="w-full grid grid-cols-3 gap-4">
                    <div className="bg-[#040917] p-7 rounded-xl border border-gray-500 hover:border-gray-700 duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">Internships Through Courses</h3>
                        <p className="text-gray-400">Students join structured courses that simulate real internship workflows.</p>
                    </div>
                    <div className="bg-[#040917] p-7 rounded-xl border border-gray-500 hover:border-gray-700 duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">Project-Based Evaluation</h3>
                        <p className="text-gray-400">Internship experience is earned by completing and submitting real, practical projects.</p>
                    </div>
                    <div className="bg-[#040917] p-7 rounded-xl border border-gray-500 hover:border-gray-700 duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">Real-World Skills</h3>
                        <p className="text-gray-400">Our programs focus on tools, workflows, and skills actually used in real companies.</p>
                    </div>
                </span>
            </span>

            <span className="w-full flex flex-col items-start justify-start px-50 mb-18">
                <span><p className="text-3xl font-bold text-white mb-4">Why Choose Sprintern?</p></span>
                <span className="pl-8">
                    <ul className="list-disc marker:text-orange-400 marker:text-2xl text-gray-400 text-lg">
                        <li className="hover:text-gray-300 mb-1">Internship experience through structured courses</li>
                        <li className="hover:text-gray-300 mb-1">Real projects instead of just theoretical assignments</li>
                        <li className="hover:text-gray-300 mb-1">Clear learning + project submission roadmap</li>
                        <li className="hover:text-gray-300 mb-1">Mentorship and guidance during the course</li>
                        <li className="hover:text-gray-300 mb-1">Internship certificates based on completed projects</li>
                    </ul>
                </span>
            </span>

            <span className="w-full flex flex-col items-start justify-start px-50 mb-18">
                <span><p className="text-3xl font-bold text-white mb-4">Our Learning Model</p></span>
                <span><p className="text-lg text-gray-400">We believe the best way to learn is by building real projects. That’s why our model is simple: <span className="text-blue-500 font-semibold">Enroll → Learn → Build → Submit Projects → Get Certified.</span> This ensures students don’t just learn concepts — they prove their skills through real project work and earn internship experience along the way.</p></span>
            </span>

        </div>
    </div>
  )
}

export default About