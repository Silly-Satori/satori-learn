import React, { useEffect, useState } from 'react'
import Pay from '../courses/Pay.jsx'
import image from './images/undraw_react_re_g3ui.svg'
import { backend } from '../../Links.js'
import axios from 'axios'
import './styles/Course.css'
import Pagination from './Pagination'
import { IoClose } from "react-icons/io5";
//actual courses we will be using from the backend

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [popup, setPopup] = useState(null);
    
    const [currentPage, setCurrentPage] = useState(1)
    //change the coursesPerPage to whatever you want, I set as 3 just for testing and due to less courses

    const [coursesPerPage] = useState(3)

    const indexOfLastCourse = currentPage * coursesPerPage
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

  useEffect(() => {
    let purchased = [];

    axios
      .get(`${backend}/user/user_data/courses?token=${localStorage.getItem('session')}`)
      .then((res) => {
        purchased = res.data;
        console.log(purchased);
      })
      .then(() => {
        axios
          .get(`${backend}/courses/fetch/0`)
          .then((res) => {
            // conosle.log(res.data[0]);
            let copy = [...res.data];
            copy.forEach((course) => {
              course.authorImage = 'undraw_next_js_-8-g5m.svg';
              course.tags = ['tag1', 'tag2', 'tag3'];
              if (purchased.includes(course._id)) {
                course.bought = true;
              } else {
                course.bought = false;
              }
            });
            // send the "bought courses" to end of the list
            copy.sort((a, b) => (a.bought === b.bought ? 0 : a.bought ? 1 : -1));
            setCourses(copy);
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const displayPopup = (index) => () => {
    let popupData = {};
    popupData._id = currentCourses[index]._id;
    popupData.name = currentCourses[index].name;
    popupData.description = currentCourses[index].description;
    popupData.price = currentCourses[index].price;
    popupData.tags = currentCourses[index].tags;
    popupData.long_description = currentCourses[index].long_description;
    // popupData.language = courses[index].language; // assuming the course object has a language property
    // popupData.difficulty = courses[index].difficulty; // assuming the course object has a difficulty property
    // popupData.youtubeVideoUrl = courses[index].youtubeVideoUrl; // assuming the course object has a youtubeVideoUrl property
    popupData.videos = null;

    axios
      .get(`${backend}/courses/get_overview/${popupData._id}`)
      .then((res) => {
        popupData.videos = res.data.videos;
      }).then(() => {
        setPopup(popupData);
      });
  };

    if (!localStorage.getItem('session')) {
        return (
            <div className="course flex flex-col items-center justify-center">
                <div className="course-header text-5xl font-bold flex items-center justify-start p-5">
                    Courses
                </div>
                <div className="course-list flex flex-wrap justify-center">
                    <div className="course-card p-4 hover:border-primary rounded-lg shadow-lg font-light text-center border w-64 mx-2 my-2 md:w-72 px-5 pb-5 text-2xl">
                        <h2 className="font-bold">
                            Please login to view courses
                        </h2>
                    </div>
                </div>
            </div>
        )
    }



  
    useEffect(() => {
        // fetch videos
        console.log('Popup:', popup)
    }, [popup])

  
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
      <div className="course flex flex-col items-center justify-center">
        <div className="course-header text-3xl font-bold flex items-center justify-start p-5">
          Courses
        </div>
        <div className="course-list grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentCourses.map((course, index) => (
            <div
              key={index}
              className="course-card p-4 hover:border-primary rounded-lg shadow-lg font-light text-center border w-64 mx-2 my-2 md:w-72 px-5 pb-5"
              onClick={displayPopup(index)}
            >
              {/* <img src={`/assets/courses/${course.authorImage}`} alt={course.name} /> */}
              <img src={image} alt={course.name} />
              <h2 className="font-bold text-xl p-3">{course.name}</h2>
              <p className="-pt-2 pb-1">{course.description}</p>
              <p className="text-secondary">
                Price: <span className="font-bold">${course.price}</span>
              </p>
              <div onClick={(e)=> e.stopPropagation()}>
              <Pay courseId={course._id} bought={course.bought} />
              </div>
              <div className="tags">
                {course.tags.map((tag, index) => (
                  <span key={index} className="tag text-gray-400 italic">
                    {tag}
                    {index !== course.tags.length - 1 && (
                      <span className="tag-dot"> &bull; </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    
        {popup && (
  <>
    <div className="fixed inset-0 bg-black opacity-50"></div>
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 z-10 w-4/5 max-w-lg rounded-lg shadow-lg bg-bg-contrast">
      <button className="float-right" onClick={() => setPopup(null)}><IoClose /></button>
      <h2 className="text-2xl font-bold mb-2">{popup.name}</h2>
      <p className="text-base">Description: {popup.description}</p>
      <p className="text-base">Price: ${popup.price}</p>
      <p className="text-base">{popup.tags.join(', ')}</p>
      <p className="text-base">{popup.long_description}</p>
      {/* Display YouTube video if it exists */}
      {popup.videos && popup.videos.map((video, index) => (
        <div key={index}>
          <h1 className="text-lg font-semibold">{video.title}</h1>
          <h1 className="text-base">{video.desc}</h1>
          </div>
      ))}
    </div>
  </>
)}
    
        <Pagination
          coursesPerPage={coursesPerPage}
          totalCourses={courses.length}
          paginate={paginate}
        />
      </div>
    );
}

export default Course



// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { backend } from '../../Links.js'
// import { Modal } from 'react-bootstrap'

// const Course = () => {
//     const [courses, setCourses] = useState([])
//     const [popup, setPopup] = useState(null)

//     useEffect(() => {
//         axios.get(`${backend}/courses/fetch/0`).then((response) => {
//             setCourses(response.data)
//         }).catch((error) => {
//             console.error('Error fetching courses:', error)
//         })
//     }, [])

//     const displayPopup = (index) => () => {
//         setPopup(courses[index])
//     }

//     const handleClose = () => setPopup(null)

//     return (
//         <>
//             {/* ... */}
//             <div className="course-list">
//                 {courses.map((course, index) => (
//                     <div key={index} className="course-card" onClick={displayPopup(index)}>
//                         <h2>{course.name}</h2>
//                         <p>{course.description}</p>
//                         <p>Price: ${course.price}</p>
//                     </div>
//                 ))}
//             </div>
//             {popup && (
//                 <Modal show={true} onHide={handleClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>{popup.name}</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <p>{popup.description}</p>
//                         <p>Price: ${popup.price}</p>
//                         <p>Tags: {popup.tags.join(', ')}</p>
//                         <p>{popup.long_description}</p>
//                         {/* Display videos if they exist */}
//                         {popup.videos && popup.videos.map((video, index) => (
//                             <div key={index}>
//                                 <h3>{video.title}</h3> 
//                                 <video src={video.url} controls /> 
//                             </div>
//                         ))}
//                     </Modal.Body>
//                 </Modal>
//             )}
//         </>
//     )
// }

// export default Course