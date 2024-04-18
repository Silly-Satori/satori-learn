import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { backend } from '../../Links.js';
import "./userPage.css"
import image from './images/undraw_react_re_g3ui.svg';
import play from './images/play.svg';

function userPage() {
  if (!localStorage.getItem('session')) {
    return (
      <div className="course flex flex-col items-center justify-center">
      <div className="course-header text-5xl font-bold flex items-center justify-start p-5">
        User Profile
      </div>
      <div className="course-list flex flex-wrap justify-center">
        <div className="course-card p-4 hover:border-primary rounded-lg shadow-lg font-light text-center border w-64 mx-2 my-2 md:w-72 px-5 pb-5 text-2xl">
        <h2 className="font-bold">Please login to view your profile</h2>
        </div>
      </div>
      </div>
    );
  }
  const [courses, setCourses] = useState([]);

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
            copy.forEach((course) => {
              course.authorImage = 'undraw_next_js_-8-g5m.svg';
              course.tags = ['tag1', 'tag2', 'tag3'];
              if (purchased.includes(course._id)) {
                course.bought = true;
              } else {
                course.bought = false;
              }
            });
            copy = copy.filter((course) => course.bought);
            setCourses(copy);
            //display all bought courses in console
            console.log(copy);
      
          })
          .catch((error) => {
            console.error('Error fetching courses:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching purchased courses:', error);
      });
  }, []);
  
    const userData = {
        name: 'Manas Bhanushali',
        email: 'why@hotmail.com',
        image: 'https://via.placeholder.com/150',
        age: '12',
        descrp: 'I was high while i made this, please dont judge me, its very bad, I am sorry, I failed you Parth.',
      };
    
    return (
      <>
        <div className='ml-[25vw] mt-4 mr-[5vw] mb-10'>
      <span className='font-[700] text-[6vh]'>Your Courses:</span>
      <div className="course-list flex flex-wrap justify-center">
        {courses.map(course => (
          <div key={course._id} className='my-6 flex flex-col gap-6 w-[20vw] bg-[#0a2236] rounded-3xl items-center px-6 py-6 custShad hover:scale-110 duration-300 hover:duration-300'>
            <img src={image} alt={course.name} />
            <h2 className="font-bold">{course.name}</h2>
            <p className="-pt-2 pb-1">{course.description}</p>
            <p className="text-secondary">Price: <span className='font-bold'>${course.price}</span></p>
            <button className='flex flex-row gap-1 justify-center items-center align-middle bg-cyan-600 px-2 py-1 text-[2.3vh] font-bold blueBut rounded-lg z-30 before:z-10 hover:scale-110 duration-300 hover:duration-300 hover:z-50'><img src={play} className='w-[5vw]'></img>View Course</button>
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
    </div>
      </>
    )
}

export default userPage;