import { NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-[#030712] text-white px-14 py-6 sticky top-0 z-10">
        <div  className="flex flex-row justify-between items-center ">
            <div className="text-[#E5E7EB] text-3xl font-bold">SPRINTERN.</div>
            <div>
                <ul className="flex flex-row space-x-10 text-lg font-semibold items-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-sky-300" : "hover:text-sky-200 cursor-pointer "} >Home</NavLink>
                    <NavLink to="/courses" className={({ isActive }) => isActive ? "text-sky-300" : "hover:text-sky-200 cursor-pointer "} >Our Courses</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-sky-300" : "hover:text-sky-200 cursor-pointer "} >About Us</NavLink>
                    <li className="text-white cursor-pointer bg-linear-to-br from-sky-500 to-blue-600 px-4 py-1.25 rounded-full  hover:from-sky-400 hover:to-blue-500">Register</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar