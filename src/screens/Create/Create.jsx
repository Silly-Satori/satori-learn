// folder/Create.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { backend } from '../../Links.js';

const Create = () => {
const [courseData, setCourseData] = useState({
    courseId: '',
    name: '',
    description: '',
    price: '',
    content: '',
    rating: '',
    reviews: [],
    author: '',
    category: '',
    difficulty: '',
    language: ''
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('session');
        const courses = await axios.get(`${backend}/courses/fetch/0`);
        courseData.courseId = courses.data.length + 1;
      //set author as user's name 
        const user = await axios.post(`${backend}/user/info`, {
            token: token
        });
        courseData.author = user.data.name;
        courseData.rating = 0.0;
        //set reviews as empty array
        courseData.reviews = [];        
      console.log(courseData);
      const response = await axios.post(`${backend}/courses/create`, courseData);
      console.log('Course created:', response.data);
      window.location.href = `/courses`;

    } catch (error) {
      console.error('Error creating course:', error);
    }
  };
return (
    <div className="create-course">
        <div className="course-header text-5xl font-bold flex items-center justify-start p-5">
      Create Courses
    </div>
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                <label className="block mb-2">Name:</label>
                <input type="text" name="name" value={courseData.name} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <div className="form-group">
                <label className="block mb-2">Description:</label>
                <textarea name="description" value={courseData.description} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <div className="form-group">
                <label className="block mb-2">Price:</label>
                <input type="number" name="price" value={courseData.price} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <div className="form-group">
                <label className="block mb-2">Content:</label>
                <textarea name="content" value={courseData.content} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <div className="form-group">
                <label className="block mb-2">Category:</label>
                <input type="text" name="category" value={courseData.category} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <div className="form-group">
                <label className="block mb-2">Difficulty:</label>
                <input type="text" name="difficulty" value={courseData.difficulty} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <div className="form-group">
                <label className="block mb-2">Language:</label>
                <input type="text" name="language" value={courseData.language} onChange={handleChange} className="border border-gray-300 rounded-md p-2 text-primary" required />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">Create Course</button>
        </form>
    </div>
);
};

export default Create;