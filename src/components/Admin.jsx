

const Admin = () => {
  return (
    <div className="bg-linear-to-br from-[#030712] to-[#131830]">
        <div className="py-20 px-50">
            <h1 className="bg-linear-to-r from-sky-500  to-sky-200 text-transparent bg-clip-text font-bold text-6xl mb-3 text-center">Admin Panel</h1>
            <div className="px-50 text-center">
            <p className="text-lg text-gray-200 mb-10">Welcome to the Admin Panel. Here you can Upload new courses, View and manage them.</p>
            </div>
            <div className="w-full flex flex-row space-x-4 py-10 rounded-xl ">
                <div className="w-1/2  ">
                    
                    <div className="w-full px-2 mx-16 py-10 ">

                        <h2 className="text-3xl font-bold text-white mb-6">Upload Course Video</h2>
                        <form className="flex flex-col space-y-4">
                            <input type="text" placeholder="Enter Course Title" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500  "/>
                            <input type="text" placeholder="Enter Course Description" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500  "/>
                            <select name="courseCat"  className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500 ">
                                <option value="">Select Category</option>
                                <option value="ece">ECE</option>
                                <option value="cs">CS</option>
                                <option value="che">CHE</option>
                                <option value="me">ME</option>
                                <option value="ee">EE</option>
                                <option value="ce">CE</option>
                            </select>
                            <input type="file" placeholder="Upload Course Video" accept="video/*" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500 focus:border-gray-700 focus:outline-none"/>
                            <button type="submit" className="px-4 py-3 mt-4 bg-linear-to-br from-sky-500 to-blue-600 text-white  rounded-full font-semibold text-md">Upload Video → </button>
                        </form>
                    </div>
                </div>


                <div className="w-1/2">
                    <div className="w-full px-2 mx-16 py-10">
                        <div className=" flex flex-row justify-between items-center">

                        <span>
                        <p className="text-3xl font-bold text-white mb-6">View Uploaded Items</p>
                        </span>
                        <span>
                            <select name="viewCat"  className="p-2 rounded-lg bg-[#040917] text-white border border-gray-500 ">
                                <option value="">Sort By</option>
                                <option value="ece">ECE</option>
                                <option value="cs">CS</option>
                                <option value="che">CHE</option>
                                <option value="me">ME</option>
                                <option value="ee">EE</option>
                                <option value="ce">CE</option>
                            </select>
                        </span>
                        </div>
                    <div className="text-white text-lg font-semibold mb-4">
                        Total Video(s) : 2
                    </div>
                    <div className="w-full h-70 bg-[#161638] rounded-4xl p-6 text-white">
                        <table className="w-full text-sm text-left text-sky-500">
                            <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                <th className="px-6 py-2">TITLE</th>
                                <th className="px-6 py-2">CATEGORY</th>
                                <th className="px-6 py-2">ACTION</th>
                            </tr>
                            <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                <td className="px-6 py-2">Course Title 1</td>
                                <td className="px-6 py-2">CS</td>
                                <td className="px-6 py-2">
                                    <button className="text-sky-400 hover:text-sky-500 pr-3 cursor-pointer">View</button>
                                    <button className="text-rose-500 hover:text-rose-600 cursor-pointer">Delete</button>
                                </td>
                            </tr>
                            <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                <td className="px-6 py-2">Course Title 1</td>
                                <td className="px-6 py-2">CS</td>
                                <td className="px-6 py-2">
                                    <button className="text-sky-400 hover:text-sky-500 pr-3 cursor-pointer">View</button>
                                    <button className="text-rose-500 hover:text-rose-600 cursor-pointer">Delete</button>
                                </td>
                            </tr>
                            <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                <td className="px-6 py-2">Course Title 1</td>
                                <td className="px-6 py-2">CS</td>
                                <td className="px-6 py-2">
                                    <button className="text-sky-400 hover:text-sky-500 pr-3 cursor-pointer">View</button>
                                    <button className="text-rose-500 hover:text-rose-600 cursor-pointer">Delete</button>
                                </td>
                            </tr>
                            <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                <td className="px-6 py-2">Course Title 1</td>
                                <td className="px-6 py-2">CS</td>
                                <td className="px-6 py-2">
                                    <button className="text-sky-400 hover:text-sky-500 pr-3 cursor-pointer">View</button>
                                    <button className="text-rose-500 hover:text-rose-600 cursor-pointer">Delete</button>
                                </td>
                            </tr>
                            <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                <td className="px-6 py-2">Course Title 1</td>
                                <td className="px-6 py-2">CS</td>
                                <td className="px-6 py-2">
                                    <button className="text-sky-400 hover:text-sky-500 pr-3 cursor-pointer">View</button>
                                    <button className="text-rose-500 hover:text-rose-600 cursor-pointer">Delete</button>
                                </td>
                            </tr>


                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin