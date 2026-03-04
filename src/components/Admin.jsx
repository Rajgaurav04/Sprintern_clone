import { useState, useEffect } from 'react'
import { getVideos, addVideo, deleteVideo } from './db/db'

const Admin = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [open, setOpen] = useState(false);
    

    
    function viewVideo(video) {
        setSelectedVideo(video);
    }

    async function loadVideos() {
        const data = await getVideos();
        setVideos(data);
    }

    useEffect(() => {
        loadVideos();
    }, []);

    async function applyFilter(category) {
        if (category === "") {
            loadVideos();
        } else {
            const data = await getVideos();
            setVideos(data.filter(video => video.category === category));
        }
    }

    async function handleDelete(id) {
        await deleteVideo(id);
        loadVideos();
    }
    async function handleSubmit(e) {
        e.preventDefault();

        if (!videoFile) return;
        await addVideo({
            title,
            description,
            category,
            file: videoFile
        });

        setTitle("");
        setCategory("");
        setDescription("");
        setVideoFile(null);

        loadVideos();



    }


    return (
        <div className="bg-linear-to-br from-[#030712] to-[#131830]">
            <div className="py-10 px-50">
                <h1 className="bg-linear-to-r from-sky-500  to-sky-200 text-transparent bg-clip-text font-bold text-4xl mb-3 text-center">Admin Panel</h1>

                <div className="px-50 text-center">
                    <p className="text-md text-gray-200 mb-10">Welcome to the Admin Panel. Here you can Upload new courses, View and manage them.</p>
                </div>
                <div className="w-full flex flex-row space-x-4 py-6 rounded-xl ">
                    <div className="w-1/2  ">

                        <div className="w-full px-2 mx-16 py-6 ">

                            <h2 className="text-2xl font-bold text-white mb-6">Upload Course Video</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                <input type="text" placeholder="Enter Course Title" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500" value={title} onChange={(e) => setTitle(e.target.value)}
                                />
                                <input type="text" placeholder="Enter Course Description" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500" value={description} onChange={(e) => setDescription(e.target.value)} />

                                <select name="courseCat" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500 " value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="ece">ECE</option>
                                    <option value="cs">CS</option>
                                    <option value="che">CHE</option>
                                    <option value="me">ME</option>
                                    <option value="ee">EE</option>
                                    <option value="ce">CE</option>
                                </select>
                                <input type="file" placeholder="Upload Course Video" accept="video/*" className="p-3 rounded-lg bg-[#040917] text-white border border-gray-500 focus:border-gray-700 focus:outline-none" onChange={(e) => setVideoFile(e.target.files[0])} />

                                <button type="submit" className="px-4 py-3 mt-4 bg-linear-to-br from-sky-500 to-blue-600 text-white  rounded-full font-semibold text-md hover:bg-blue-700 duration-300 cursor-pointer">Upload Video → </button>
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
                                    <select name="filterCat" className="p-2 rounded-lg bg-[#040917] text-white border border-gray-500 " onChange={(e) => applyFilter(e.target.value)}>
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
                            
                            <div className="w-full h-77 bg-[#060B19] border border-gray-700 rounded-xl p-6 text-white overflow-y-auto custom-scrollbar">
                                { videos.length>0 ? <table className="w-full text-sm text-left text-sky-500 h-30 overflow-y-auto">
                                    <thead>
                                        <tr className="text-xs text-gray-200 border-b border-gray-700 ">
                                            <th className="px-6 py-2">TITLE</th>
                                           
                                            <th className="px-6 py-2">CATEGORY</th>
                                            <th className="px-6 py-2">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {videos.map((video) => (
                                            <tr
                                                key={video.id}
                                                className="text-xs text-gray-200 border-b border-gray-700"
                                            >
                                                <td className="px-6 py-2">{video.title}</td>

                                                

                                                <td className="px-6 py-2">{video.category}</td>

                                                <td className="px-6 py-2">
                                                    <button
                                                        className="text-sky-400 hover:text-sky-500 pr-3 cursor-pointer"
                                                        onClick={() => {
                                                            viewVideo(video);
                                                            setOpen(true);
                                                        }}
                                                    >
                                                        View
                                                    </button>

                                                    <button className="text-red-500 hover:text-red-600 cursor-pointer" onClick={() => handleDelete(video.id)}
>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>





                                </table>
: <p className="text-gray-400 text-center mt-10">No videos uploaded yet.</p>}
                                {selectedVideo && open && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-20" onClick={() => setOpen(false)}
>
                                        <div className="w-160 aspect-video drop-shadow-[0_0_50px_rgba(70,80,108,0.35)] bg-black/90 rounded-xl p-6">
                                            <h3 className="text-white text-xl mb-2">
                                            Title : {selectedVideo.title}
                                        </h3>
                                        <p className="text-gray-400 text-md mb-2">Description : {selectedVideo.description}</p>
                                        <p className="text-gray-400 text-md mb-4">Category : {selectedVideo.category}</p>

                                        <video
                                            height="600"
                                            controls
                                            src={URL.createObjectURL(selectedVideo.file)} className="w-full h-full object-contain rounded-2xl"
                                        />
                                        </div>

                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin