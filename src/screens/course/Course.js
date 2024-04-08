import React from 'react';

const Course = () => {
    // Dummy list of courses
    const courses = [
        {
            name: 'Course 1',
            price: 19.99,
            bought: true,
            authorImage: 'author1.jpg',
            description: 'Course 1 description',
            tags: ['tag1', 'tag2', 'tag3'],
        },
        {
            name: 'Course 2',
            price: 29.99,
            bought: false,
            authorImage: 'author2.jpg',
            description: 'Course 2 description',
            tags: ['tag4', 'tag5', 'tag6'],
        },
        // Add more courses here
    ];

    return (
        <div className="course flex flex-col items-center justify-center">
            <div className="course-header text-3xl font-bold flex items-center justify-start p-5">
                Courses
            </div>
            <div className="course-list">
                {courses.map((course, index) => (
                    <div key={index} className="course-card p-4 bg-bg-contrast rounded-lg shadow-lg">
                        <img src={`/assets/courses/${course.authorImage}`} alt={course.name} />
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                        <p>Price: ${course.price}</p>
                        <p>{course.bought ? 'Bought' : 'Not bought'}</p>
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