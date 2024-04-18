import React, { useEffect, useState } from 'react';
import Pay from '../courses/Pay.jsx';
import image from './images/undraw_react_re_g3ui.svg';
import { backend } from '../../Links.js';
import axios from 'axios';
import './styles/Course.css';
import Pagination from './Pagination';
//actual courses we will be using from the backend

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
      //change the coursesPerPage to whatever you want, I set as 3 just for testing and due to less courses

  const [coursesPerPage] = useState(3);

  console.log(localStorage.getItem('session'));
  if (!localStorage.getItem('session')) {
    return (
      <div className="course flex flex-col items-center justify-center">
      <div className="course-header text-5xl font-bold flex items-center justify-start p-5">
        Courses
      </div>
      <div className="course-list flex flex-wrap justify-center">
        <div className="course-card p-4 hover:border-primary rounded-lg shadow-lg font-light text-center border w-64 mx-2 my-2 md:w-72 px-5 pb-5 text-2xl">
        <h2 className="font-bold">Please login to view courses</h2>
        </div>
      </div>
      </div>
    );
  }

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
            let copy = [...res.data];
            console.log(copy);
            copy.forEach((course) => {
              course.authorImage = 'undraw_next_js_-8-g5m.svg';
              course.tags = ['tag1', 'tag2', 'tag3'];
              if (purchased.includes(course._id)) {
                course.bought = true;
              } else {
                course.bought = false;
              }
            });
            setCourses(copy);
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching purchased courses:', error);
      });
  }, []);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          >
            {/* <img src={`/assets/courses/${course.authorImage}`} alt={course.name} /> */}
            <img src={image} alt={course.name} />
            <h2 className="font-bold text-xl p-3">{course.name}</h2>
            <p className="-pt-2 pb-1">{course.description}</p>
            <p className="text-secondary">Price: <span className='font-bold'>${course.price}</span></p>
            <Pay courseId={course._id} bought={course.bought} />
            <div className="tags">
              {course.tags.map((tag, index) => (
                <span key={index} className="tag text-gray-400 italic">
                  {tag}
                  {index !== course.tags.length - 1 && <span className="tag-dot"> &bull; </span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Pagination
        coursesPerPage={coursesPerPage}
        totalCourses={courses.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Course;
