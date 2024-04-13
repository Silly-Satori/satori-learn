import React from 'react';
import image from './images/undraw_react_re_g3ui.svg';

const Course = () => {
    // Dummy list of courses
    const courses = [
        {
            name: 'React Js Course',
            price: 19.99,
            bought: true,
            authorImage: 'undraw_next_js_-8-g5m.svg',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tags: ['tag1', 'tag2', 'tag3'],
        },
        {
            name: 'Course 2',
            price: 29.99,
            bought: false,
            authorImage: 'author2.jpg',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tags: ['tag4', 'tag5', 'tag6'],
        },
        {
            name: 'JavaScript Course',
            price: 29.99,
            bought: true,
            authorImage: 'author2.jpg',
            description: 'loremsit amet, consectetur adipiscing elit',
            tags: ['tag4', 'tag5', 'tag6'],
        },
        {
            name: 'React Js Course',
            price: 19.99,
            bought: false,
            authorImage: 'undraw_next_js_-8-g5m.svg',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tags: ['tag1', 'tag2', 'tag3'],
        },
        {
            name: 'React Js Course',
            price: 19.99,
            bought: true,
            authorImage: 'undraw_next_js_-8-g5m.svg',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tags: ['tag1', 'tag2', 'tag3'],
        },
        {
            name: 'React Js Course',
            price: 19.99,
            bought: false,
            authorImage: 'undraw_next_js_-8-g5m.svg',
            description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit',
            tags: ['tag1', 'tag2', 'tag3'],
        },
        // Add more courses here
    ];
    const style = { style: { backgroundColour: 'var(--bg-contrast)' } };
    
    return (
        <div className="course flex flex-col items-center justify-center">
            <div className="course-header text-3xl font-bold flex items-center justify-start p-5">
                Courses
            </div>
            <div className="course-list  grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {courses.map((course, index) => (
                    <div key={index} className="course-card p-4 hover:border-secondary-contrast hover:border-bg-primary-contrast rounded-lg shadow-lg font-light text-center border w-64  mx-2 my-2  md:w-72 px-5 pb-5">
                        {/* <img src={`/assets/courses/${course.authorImage}`} alt={course.name} /> */}
                        <img src={image} alt={course.name} />
                        <h2 className='font-bold'>{course.name}</h2>
                        <p>{course.description}</p>
                        <p>Price: ${course.price}</p>
                        <button className='rounded-lg bg-secondary-contrast border px-2 py-1 font-medium text-bg-contrast m-2'>                        
                        <p>{course.bought ?  'Bought' : 'Buy Now'}</p>
                        </button>
                        <div className="tags">
                            {course.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;