import React from 'react'
import { useParams } from 'react-router-dom'

// function viewCourse() {
//     // get id from url :id
//     const { id } = useParams();
//     return (
//         <div>
//             <h1>View Course</h1>
//             <p>Course ID: {id}</p>
//         </div>
//     )
// }

const currentCourse = {
  title: 'React Basics',
  description: 'Learn the fundamentals of React.js',
  videoId: 'your-youtube-video-id', 
};

// our schema is different from the one in the snippet above
const actualCurrentCourse = {
  _id: "4",
  videos: [
    {
      title: "Introduction to React",
      videoId: "your-youtube-video-id",
      desc: "Learn the basics of React.js",
    },
    {
      title: "React Components",
      videoId: "your-youtube-video-id",
      desc: "Learn about React components",
    },
    {
      title: "React Hooks",
      videoId: "your-youtube-video-id",
      desc: "Learn about React hooks",
    }
  ],
    
  resources: [
    {
      title: "React Docs",
      content : "https://reactjs.org/docs/getting-started.html",
      desc: "Official React documentation"
    },
    {
      title: "React Quick Start",
      content: "Today we will learn how to use React\n\nReact is a JavaScript library for building user interfaces\n\nReact is used to build single page applications\n\nReact allows us to create reusable UI components",
      desc: "Quick start guide for React"
    }
  ],
  quizzes: [
    // nothing here yet
  ],
  other: []
}


const otherCourses = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn the fundamentals of React.js',
  },
  {
    id: 2,
    title: 'JavaScript Advanced',
    description: 'Master advanced JavaScript concepts',
  },
  {
    id: 3,
    title: 'course 3 advanced',
    description: 'Learn something nice',
  },

];

const viewCourse = () => {
  return (
    <div className="container mx-auto ml-14 mr-14  py-8 px-4 lg:flex">
      <div className="lg:w-2/3 lg:pr-11">
        <iframe
          title="Course Video"
          className="w-full h-64 lg:h-full lg:w-full"
          src={`https://www.youtube.com/embed/${currentCourse.videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">{currentCourse.title}</h2>
          <p className="text-gray-600 mt-2">{currentCourse.description}</p>
        </div>
      </div>

      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <h3 className="text-xl font-semibold mb-4">Other Courses</h3>
        <div className="divide-y divide-gray-200">
          {otherCourses.map(course => (
            <div key={course.id} className="py-2">
              <h4 className="text-lg font-semibold">{course.title}</h4>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default viewCourse
