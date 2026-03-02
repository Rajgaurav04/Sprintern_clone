

const Navbar = () => {
  return (
    <nav className="bg-[#030712] text-white px-14 py-6 sticky top-0">
        <div  className="flex flex-row justify-between items-center ">
            <div className="text-[#E5E7EB] text-3xl font-bold">SPRINTERN.</div>
            <div>
                <ul className="flex flex-row space-x-10 text-lg font-semibold items-center">
                    <li className="hover:text-sky-200 cursor-pointer ">Home</li>
                    <li className="text-sky-300 cursor-pointer ">Our Courses</li>
                    <li className="hover:text-sky-200 cursor-pointer ">About Us</li>
                    <li className="text-white cursor-pointer bg-linear-to-br from-sky-500 to-blue-600 px-4 py-[5px] rounded-full  hover:from-sky-400 hover:to-blue-500">Register</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar