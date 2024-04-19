import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { backend } from '../../Links.js'
import axios from 'axios'

const currentCourse = {
    _id: '1',
    title: 'React Course',
    description: 'Learn React.js from scratch',
}
//our schema is different from the one in the snippet above
const actualCurrentCourse = {
    _id: '4',
    videos: [
        {
            title: 'Introduction to React',
            videoId: 'your-youtube-video-id',
            desc: 'Learn the basics of React.js',
        },
        {
            title: 'React Components',
            videoId: 'your-youtube-video-id',
            desc: 'Learn about React components',
        },
        {
            title: 'React Hooks',
            videoId: 'your-youtube-video-id',
            desc: 'Learn about React hooks',
        },
    ],

    resources: [
        {
            title: 'React Docs',
            content: 'https://reactjs.org/docs/getting-started.html',
            desc: 'Official React documentation',
        },
        {
            title: 'React Quick Start',
            content:
                'Today we will learn how to use React\n\nReact is a JavaScript library for building user interfaces\n\nReact is used to build single page applications\n\nReact allows us to create reusable UI components',
            desc: 'Quick start guide for React',
        },
    ],
    quizzes: [
        // nothing here yet
    ],
    other: [],
}

const viewCourse = () => {
    const { id } = useParams()
    let [currentCourse, setCurrentCourse] = useState({})
    let [actualCurrentCourse, setActualCurrentCourse] = useState({})
    let [play, setPlay] = useState(null)
    useEffect(() => {
        // fetch course data from backend

        axios.get(`${backend}/courses/fetch_id/${id}`).then((response) => {
            //console.log(response.data);
            setCurrentCourse(response.data)
        })

        axios
            .post(`${backend}/courses/get_content/${id}`, {
                token: localStorage.getItem('session'),
            })
            .then((response) => {
                //console.log(response.data);
                setActualCurrentCourse(response.data)
                if (response.data.videos.length > 0) {
                    setPlay(response.data.videos[0]) // set the first video to play
                }
            })
            .catch((error) => {
                console.error('Error fetching course data:', error)
                alert(
                    'You are not authorized to view this course. Please login to view this course.'
                )
                window.location.href = '/'
            })
    }, [])

    // useEffect(() => {
    //     if (actualCurrentCourse.videos) {
    //         const videos = actualCurrentCourse.videos.map((video) => (
    //             <div key={video.id} className="py-2">
    //                 <h4 className="text-lg font-semibold">{video.title}</h4>
    //                 <p className="text-gray-600">{video.desc}</p>
    //             </div>
    //         ))
    //         setActualCurrentCourse({ videos: videos })
    //     }
    // }, [actualCurrentCourse.videos])

    return (
        <>
        <Link to="/user" className="text-primary flex items-center md:ml-14 md:mr-14 py-8 px-4 transform transition duration-300 ease-in-out hover:-translate-x-2">
                <i className="fas fa-arrow-left"></i> 
                <span className="ml-2 text-accent">Back to Courses</span>
            </Link>
        <div className="container mx-auto ml-auto mr-auto md:ml-14 md:mr-14  py-8 px-4 lg:flex">
            
            <div className="lg:w-3/4 lg:pr-11">
                <div
                    style={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                        paddingLeft: "1px",
                        paddingRight: "2px",
                    }}
                >
                    <iframe
                        title="Course Video"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                        src={`https://www.youtube.com/embed/${
                            play ? play.videoId : 'FtutLA63Cp8'
                        }`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-primary">
                        {currentCourse.name}
                    </h2>
                    <p className="text-gray-600 mt-2">
                        {currentCourse.content}
                    </p>
                    <div className="mt-4">
                        <p className="text-gray-600">
                            Category: {currentCourse.category}
                        </p>
                        <p className="text-gray-600">
                            Difficulty: {currentCourse.difficulty}
                        </p>
                        <p className="text-gray-600">
                            Language: {currentCourse.language}
                        </p>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/4 mt-8 lg:mt-0">
                <h3 className="text-xl font-semibold mb-4">Lecture Videos</h3>
                <div className="divide-y divide-gray-200">
                    {actualCurrentCourse.videos &&
                        actualCurrentCourse.videos.map((video) => (
                            <div
                                key={video.id}
                                className="py-2 px-1 m-1 cursor-pointer hover:bg-bg-contrast hover:text-accent hover:scale-110 transform transition duration-300"
                                onClick={() => setPlay(video)}
                            >
                                <h4
                                    className={`text-lg font-semibold ${
                                        play == video ? 'text-secondary' : ''
                                    }`}
                                >
                                    {video.title}
                                </h4>
                                <p className="text-gray-600">{video.desc}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
        </>
    )
}

// const viewCourse = () => {
//   return (
//     <div className="container mx-auto ml-14 mr-14  py-8 px-4 lg:flex">
//       <div className="lg:w-2/3 lg:pr-11">
//         <iframe
//           title="Course Video"
//           className="w-full h-64 lg:h-full lg:w-full"
//           src={`https://www.youtube.com/embed/${currentCourse.videoId}`}
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//         <div className="mt-6">
//           <h2 className="text-2xl font-semibold">{currentCourse.title}</h2>
//           <p className="text-gray-600 mt-2">{currentCourse.description}</p>
//         </div>
//       </div>

//       <div className="lg:w-1/3 mt-8 lg:mt-0">
//         <h3 className="text-xl font-semibold mb-4">Other Courses</h3>
//         <div className="divide-y divide-gray-200">
//           {otherCourses.map(course => (
//             <div key={course.id} className="py-2">
//               <h4 className="text-lg font-semibold">{course.title}</h4>
//               <p className="text-gray-600">{course.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default viewCourse
