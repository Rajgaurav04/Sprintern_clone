

const Footer = () => {
  return (
    <div className="p-12 bg-[#040917]">
      <div className="bg-[#040917] h-40 flex flex-row space-x-10 ">
        <div className="w-1/4 p-2">
          <h2 className="text-white font-semibold text-xl mb-3">Sprintern</h2>
          <p className="text-sm text-gray-400">Short-term, project-driven courses designed to build real engineering skills with proof.

          </p>
        </div>
        <div className="w-1/4">
          <h2 className="text-white font-semibold text-lg mb-3">Courses</h2>
          <p className="text-sm text-gray-400 mb-2">E & C Engineering</p>
          <p className="text-sm text-gray-400 mb-2">Mechanical Engineering</p>
          <p className="text-sm text-gray-400 mb-2">Civil Engineering</p>
          <p className="text-sm text-gray-400 mb-2">Computer Science</p>
          <p className="text-sm text-gray-400 mb-2">Chemical Engineering</p>
          <p className="text-sm text-gray-400 mb-2">Electrical Engineering</p>
        </div>
        <div className="w-1/4">
          <h2 className="text-white font-semibold text-lg mb-3">Company</h2>
          <p className="text-sm text-gray-400 mb-2">About</p>
          <p className="text-sm text-gray-400 mb-2">Contact</p>
          <p className="text-sm text-gray-400 mb-2">Privacy Policy</p>
        </div>
        <div className="w-1/4">
          <h2 className="text-white font-semibold text-lg b-3">Stay Updated</h2>
          <p className="text-sm text-gray-400 mb-2">Get updates on new courses and launches.</p>
        </div>

      </div>

      <div className="w-full h-px bg-gray-700 mt-18 mb-4"></div>
      <div className="flex flex-row justify-between items-center text-xs text-gray-400">
        <span><p>© 2026 Sprintern. All rights reserved.</p></span>
        <span><p>LinkedIn</p></span>
      </div>
    </div>
  )
}

export default Footer