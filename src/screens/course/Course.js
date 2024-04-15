import React, { useEffect, useState } from "react";
import image from "./images/undraw_react_re_g3ui.svg";
import axios from "axios";
import "./styles/Course.css";
import Pagination from './Pagination';

//actual courses we will be using from the backend
const Course = () => {
    const [courses, setCourses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    //change the coursesPerPage to whatever you want, I set as 2 just for testing and due to less courses
    const [coursesPerPage] = useState(2); 

    useEffect(() => {
        let purchased = [];
        axios
            .get(
                `http://localhost:8000/user/user_data/courses?token=${localStorage.getItem(
                    "session"
                )}`
            )
            .then((res) => {
                purchased = res.data;
                console.log(purchased);
            })
            .then(() => {
                axios
                    .get(`http://localhost:8000/courses/fetch/0`)
                    .then((res) => {
                        let copy = [...res.data];
                        console.log(copy);
                        copy.forEach((course) => {
                            course.authorImage = "undraw_next_js_-8-g5m.svg";
                            course.tags = ["tag1", "tag2", "tag3"];
                            
                            if (purchased.includes(course._id)) {
                                course.bought = true;
                            } else {
                                course.bought = false;
                            }
                        });
                        setCourses(copy);
                    });
            });
    }, []);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const style = { style: { backgroundColour: "var(--bg-contrast)" } };


    return (
        <div className="course flex flex-col items-center justify-center">
            <div className="course-header text-3xl font-bold flex items-center justify-start p-5">
                Courses
            </div>
            <div className="course-list  grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {currentCourses.map((course, index) => (
                    <div
                        key={index}
                        className="course-card p-4 hover:border-primary rounded-lg shadow-lg font-light text-center border w-64  mx-2 my-2  md:w-72 px-5 pb-5"
                    >
                        {/* <img src={`/assets/courses/${course.authorImage}`} alt={course.name} /> */}
                        <img src={image} alt={course.name} />
                        <h2 className="font-bold">{course.name}</h2>
                        <p>{course.description}</p>
                        <p className="text-secondary">Price: ${course.price}</p>
                        <button className="bought rounded-lg bg-primary border hover:bg-bg-contrast  px-2 py-1 font-medium text-bg-contrast m-2">
                            <p>{course.bought ? "Bought" : "Buy Now"}</p>
                        </button>
                        <div className="tags">
                            {course.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
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
};

export default Course;



